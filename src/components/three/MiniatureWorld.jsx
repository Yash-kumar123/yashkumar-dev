import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from '../../context/ThemeContext'

// 1. Realistic Sculpted Mountain Terrain with Ridge Strata & Alpine Slopes
function RealisticMountain({ isDark }) {
  const meshRef = useRef()

  // Generate procedural realistic mountain terrain vertices using harmonic noise
  const { geometry, rockColors } = useMemo(() => {
    const size = 7.5
    const segments = 84
    const geo = new THREE.PlaneGeometry(size, size, segments, segments)
    geo.rotateX(-Math.PI / 2)

    const pos = geo.attributes.position
    const count = pos.count
    const colors = new Float32Array(count * 3)

    // Palette base colors for light and dark
    const lightPeak = new THREE.Color('#FAFBF9')
    const lightRock = new THREE.Color('#98A3B5')
    const lightMoss = new THREE.Color('#6EA887')
    const lightValley = new THREE.Color('#DFE8DF')

    const darkPeak = new THREE.Color('#8DA0B8')
    const darkRock = new THREE.Color('#252D37')
    const darkMoss = new THREE.Color('#1E3D34')
    const darkValley = new THREE.Color('#141C24')

    const peakCol = isDark ? darkPeak : lightPeak
    const rockCol = isDark ? darkRock : lightRock
    const mossCol = isDark ? darkMoss : lightMoss
    const valCol = isDark ? darkValley : lightValley

    for (let i = 0; i < count; i++) {
      const x = pos.getX(i)
      const z = pos.getZ(i)

      // Mountain shape: High jagged peaks at back-left and back-right, river valley running forward
      const distFromCenter = Math.sqrt(x * x + z * z)
      const backFactor = Math.max(0, -z + 0.8) // higher toward the back (-z)
      const valleyTrough = Math.exp(-Math.pow(x - 0.2 * z, 2) * 1.8) // carved river canyon

      // Multi-octave natural ridge displacement
      const octave1 = Math.sin(x * 0.9 + 1.2) * Math.cos(z * 0.8) * 0.9
      const octave2 = Math.sin(x * 1.9 - 0.8) * Math.cos(z * 1.7) * 0.45
      const octave3 = Math.sin(x * 3.8) * Math.cos(z * 3.5) * 0.18
      const cragNoise = Math.sin(x * 7.5) * Math.cos(z * 7.5) * 0.06

      // Mountain height
      let height = (backFactor * 1.4 + 0.4) * (octave1 + octave2 + octave3 + 1.2)
      // Carve out the river gorge where water flows
      height = height * (1 - valleyTrough * 0.75) + cragNoise

      // Flatten edges to prevent hard clipping
      const edgeFalloff = Math.cos(Math.min(Math.PI / 2, (distFromCenter / (size * 0.5)) * (Math.PI / 2)))
      height = height * edgeFalloff - 0.35

      pos.setY(i, height)

      // Color interpolation based on height & slope for realistic rock strata
      const tempColor = new THREE.Color()
      if (height > 1.4) {
        tempColor.lerpColors(rockCol, peakCol, Math.min(1, (height - 1.4) / 0.8))
      } else if (height > 0.4) {
        tempColor.lerpColors(mossCol, rockCol, (height - 0.4) / 1.0)
      } else {
        tempColor.lerpColors(valCol, mossCol, Math.max(0, (height + 0.2) / 0.6))
      }

      colors[i * 3] = tempColor.r
      colors[i * 3 + 1] = tempColor.g
      colors[i * 3 + 2] = tempColor.b
    }

    geo.computeVertexNormals()
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return { geometry: geo, rockColors: colors }
  }, [isDark])

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={[0, -0.2, -0.6]}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        vertexColors
        roughness={0.75}
        metalness={isDark ? 0.2 : 0.05}
        flatShading={false}
      />
    </mesh>
  )
}

// 2. Realistic Water System: Cascading Waterfall, Plunge Pool, and Flowing Meandering River
function RealisticWater({ isDark }) {
  const waterfallRef = useRef()
  const riverRef = useRef()
  const mistRef = useRef()

  // Generate water particles for waterfall mist
  const particleCount = 60
  const [mistPositions, initialY] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const initY = new Float32Array(particleCount)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.75
      pos[i * 3 + 1] = -0.1 + Math.random() * 0.35
      pos[i * 3 + 2] = -0.9 + (Math.random() - 0.5) * 0.45
      initY[i] = pos[i * 3 + 1]
    }
    return [pos, initY]
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Dynamic wave ripples on river surface
    if (riverRef.current) {
      riverRef.current.position.y = -0.06 + Math.sin(t * 3.5) * 0.007
      const pos = riverRef.current.geometry.attributes.position
      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i)
        const v = pos.getY(i)
        const zWave = Math.sin(u * 5.0 + t * 4.0) * 0.02 + Math.cos(v * 4.0 + t * 3.0) * 0.015
        pos.setZ(i, zWave)
      }
      pos.needsUpdate = true
    }

    // Waterfall shimmering cascade
    if (waterfallRef.current) {
      waterfallRef.current.position.y = 0.58 + Math.sin(t * 9) * 0.012
    }

    // Mist particles upward drift
    if (mistRef.current) {
      const positions = mistRef.current.geometry.attributes.position.array
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += 0.007
        if (positions[i * 3 + 1] > 0.48) {
          positions[i * 3 + 1] = initialY[i]
        }
      }
      mistRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group>
      {/* Waterfall: Cascading down the mountain canyon cliff */}
      <mesh
        ref={waterfallRef}
        position={[0.08, 0.58, -1.05]}
        rotation={[0.38, 0, 0]}
      >
        <planeGeometry args={[0.65, 1.45, 16, 16]} />
        <meshPhysicalMaterial
          color={isDark ? '#4DE1D3' : '#22C7C2'}
          emissive={isDark ? '#124B52' : '#71D7A4'}
          emissiveIntensity={isDark ? 0.4 : 0.25}
          transmission={0.8}
          roughness={0.1}
          ior={1.333}
          reflectivity={0.9}
          transparent
          opacity={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Waterfall Plunge Pool with Foam Ring */}
      <mesh position={[0.08, -0.06, -0.65]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.55, 32]} />
        <meshStandardMaterial
          color={isDark ? '#2AA89E' : '#71D7A4'}
          roughness={0.15}
          metalness={isDark ? 0.3 : 0.1}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Main River: Flows through the mountain valley towards the viewer */}
      <mesh
        ref={riverRef}
        position={[0.12, -0.06, 0.65]}
        rotation={[-Math.PI / 2, 0, -0.1]}
      >
        <planeGeometry args={[1.05, 2.8, 24, 24]} />
        <meshPhysicalMaterial
          color={isDark ? '#1D6B66' : '#22C7C2'}
          transmission={0.75}
          roughness={0.08}
          ior={1.333}
          reflectivity={0.95}
          clearcoat={1.0}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* Waterfall Mist Particle Spray */}
      <points ref={mistRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={mistPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          color={isDark ? '#C4FAF6' : '#E8FAF8'}
          transparent
          opacity={isDark ? 0.45 : 0.65}
          depthWrite={false}
        />
      </points>
    </group>
  )
}

// 3. Explorer Robot (Main Character): Cute, High-End Research Machine
function ExplorerRobot({ isHovered, isDark }) {
  const robotGroupRef = useRef()
  const headRef = useRef()
  const antennaRef = useRef()
  const eyeLightRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const { x, y } = state.pointer

    // Gentle robot breathing & curious idle posture
    if (robotGroupRef.current) {
      robotGroupRef.current.position.y = 0.12 + Math.sin(t * 1.8) * 0.018
    }

    // Swivel head smoothly tracks pointer / looks around environment
    if (headRef.current) {
      const targetRotY = THREE.MathUtils.clamp(x * 0.75 + Math.sin(t * 0.5) * 0.25, -0.85, 0.85)
      const targetRotX = THREE.MathUtils.clamp(-y * 0.4 + Math.sin(t * 0.8) * 0.1, -0.4, 0.4)

      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetRotY, 0.06)
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetRotX, 0.06)
    }

    // Antenna subtle movement
    if (antennaRef.current) {
      antennaRef.current.rotation.z = Math.sin(t * 3.8) * 0.09
    }

    // Optical eye light intensity
    if (eyeLightRef.current) {
      eyeLightRef.current.intensity = 1.0 + Math.sin(t * 2.8) * 0.35 + (isHovered ? 0.7 : 0)
    }
  })

  const chassisColor = isDark ? '#1F2630' : '#FAFBF9'
  const metalColor = isDark ? '#4A5568' : '#D4DAE8'
  const accentColor = isDark ? '#4DE1D3' : '#22C7C2'

  return (
    // Perched curiously on the left riverbank looking toward the flowing water & mountain
    <group ref={robotGroupRef} position={[-0.95, 0.12, 0.5]} rotation={[0, 0.68, 0]}>
      {/* Robot Chassis Body */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.26, 0.32, 28]} />
        <meshStandardMaterial
          color={chassisColor}
          metalness={isDark ? 0.6 : 0.25}
          roughness={0.2}
        />
      </mesh>

      {/* Energy Core Belt */}
      <mesh position={[0, 0.26, 0]}>
        <cylinderGeometry args={[0.27, 0.27, 0.05, 28]} />
        <meshStandardMaterial
          color={accentColor}
          emissive={accentColor}
          emissiveIntensity={isDark ? 0.8 : 0.55}
          roughness={0.15}
        />
      </mesh>

      {/* Research Backpack Unit */}
      <mesh position={[0, 0.3, -0.22]} castShadow>
        <boxGeometry args={[0.24, 0.26, 0.12]} />
        <meshStandardMaterial color={metalColor} metalness={0.7} roughness={0.25} />
      </mesh>

      {/* Swivel Head */}
      <group ref={headRef} position={[0, 0.52, 0]}>
        {/* Head Dome */}
        <mesh castShadow>
          <sphereGeometry args={[0.2, 28, 28]} />
          <meshStandardMaterial
            color={chassisColor}
            metalness={isDark ? 0.5 : 0.25}
            roughness={0.18}
          />
        </mesh>

        {/* Optical Camera Bezel */}
        <mesh position={[0, 0.02, 0.17]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.06, 28]} />
          <meshStandardMaterial color="#101318" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Glowing Camera Lens Eye */}
        <mesh position={[0, 0.02, 0.21]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color={accentColor} />
        </mesh>

        <pointLight
          ref={eyeLightRef}
          position={[0, 0.02, 0.32]}
          distance={1.6}
          color={accentColor}
          intensity={1.1}
        />

        {/* Antenna */}
        <group ref={antennaRef} position={[0.1, 0.18, -0.05]}>
          <mesh position={[0, 0.12, 0]}>
            <cylinderGeometry args={[0.012, 0.012, 0.24, 8]} />
            <meshStandardMaterial color="#8A92A6" metalness={0.8} />
          </mesh>
          <mesh position={[0, 0.24, 0]}>
            <sphereGeometry args={[0.035, 12, 12]} />
            <meshStandardMaterial
              color="#9B8AFB"
              emissive="#9B8AFB"
              emissiveIntensity={isDark ? 1.0 : 0.75}
            />
          </mesh>
        </group>
      </group>

      {/* Articulated Mechanical Feet */}
      <group position={[-0.15, 0.06, 0]}>
        <mesh position={[0, 0.06, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.18, 8]} />
          <meshStandardMaterial color="#6B7280" metalness={0.6} />
        </mesh>
        <mesh position={[0, -0.02, 0.03]}>
          <boxGeometry args={[0.1, 0.04, 0.16]} />
          <meshStandardMaterial color="#374151" metalness={0.5} roughness={0.3} />
        </mesh>
      </group>
      <group position={[0.15, 0.06, 0]}>
        <mesh position={[0, 0.06, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.18, 8]} />
          <meshStandardMaterial color="#6B7280" metalness={0.6} />
        </mesh>
        <mesh position={[0, -0.02, 0.03]}>
          <boxGeometry args={[0.1, 0.04, 0.16]} />
          <meshStandardMaterial color="#374151" metalness={0.5} roughness={0.3} />
        </mesh>
      </group>
    </group>
  )
}

// 3b. Cyber Dinosaur Companion (Friendly Futuristic Bio-Mech Raptor)
function CyberDinosaur({ isHovered, isDark }) {
  const dinoRef = useRef()
  const headRef = useRef()
  const jawRef = useRef()
  const tailRef = useRef()
  const tailTipRef = useRef()
  const eyeLightRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const { x, y } = state.pointer

    // Gentle dinosaur breathing & idle bounce
    if (dinoRef.current) {
      dinoRef.current.position.y = 0.14 + Math.sin(t * 1.5) * 0.015
    }

    // Head smoothly turns towards cursor & looks across river towards explorer robot
    if (headRef.current) {
      const targetRotY = THREE.MathUtils.clamp(-x * 0.65 + Math.sin(t * 0.45) * 0.25, -0.8, 0.8)
      const targetRotX = THREE.MathUtils.clamp(-y * 0.35 + Math.sin(t * 0.7) * 0.1, -0.35, 0.35)
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetRotY, 0.05)
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetRotX, 0.05)
    }

    // Jaw subtle breathing nod
    if (jawRef.current) {
      jawRef.current.rotation.x = 0.08 + Math.sin(t * 1.5) * 0.06
    }

    // Organic tail compound sway
    if (tailRef.current) {
      tailRef.current.rotation.y = Math.sin(t * 2.2) * 0.22
    }
    if (tailTipRef.current) {
      tailTipRef.current.rotation.y = Math.sin(t * 2.2 - 0.6) * 0.28
    }

    // Glowing dinosaur eye pulse
    if (eyeLightRef.current) {
      eyeLightRef.current.intensity = 0.8 + Math.sin(t * 2.5) * 0.3 + (isHovered ? 0.6 : 0)
    }
  })

  const skinColor = isDark ? '#1C2530' : '#E2E8DF'
  const underbellyColor = isDark ? '#2B3846' : '#FAFBF9'
  const plateGlowColor = isDark ? '#4DE1D3' : '#22C7C2'

  return (
    // Standing prominently on the rocky riverbank plateau as the majestic hero creature
    <group ref={dinoRef} position={[0.75, 0.16, 0.25]} rotation={[0, -0.92, 0]} scale={[1.35, 1.35, 1.35]}>
      {/* Dinosaur Main Body Torso (Powerful biomechanical raptor frame) */}
      <group position={[0, 0.42, 0]} rotation={[0.22, 0, 0]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.25, 0.52, 10, 20]} />
          <meshStandardMaterial
            color={skinColor}
            metalness={isDark ? 0.5 : 0.2}
            roughness={0.45}
          />
        </mesh>

        {/* Soft sculpted underbelly armor plate */}
        <mesh position={[0, -0.07, 0.09]} rotation={[0.12, 0, 0]}>
          <capsuleGeometry args={[0.2, 0.44, 8, 16]} />
          <meshStandardMaterial
            color={underbellyColor}
            metalness={0.15}
            roughness={0.55}
          />
        </mesh>

        {/* Luminescent Dorsal Spine Plates (Running along back) */}
        {[-0.26, -0.14, -0.02, 0.1, 0.22, 0.34].map((zPos, idx) => (
          <mesh
            key={idx}
            position={[0, 0.25 + (idx === 2 || idx === 3 ? 0.05 : 0), zPos]}
            rotation={[-0.32, 0, 0]}
            scale={[0.85, 1.0 + (idx > 1 && idx < 4 ? 0.35 : 0), 0.85]}
          >
            <coneGeometry args={[0.065, 0.18, 4]} />
            <meshStandardMaterial
              color={plateGlowColor}
              emissive={plateGlowColor}
              emissiveIntensity={isDark ? 1.4 : 0.8}
              roughness={0.15}
            />
          </mesh>
        ))}
      </group>

      {/* Dinosaur Muscular Neck & Head */}
      <group position={[0, 0.65, 0.24]}>
        {/* Curving Neck */}
        <mesh position={[0, 0.16, 0.12]} rotation={[0.42, 0, 0]}>
          <cylinderGeometry args={[0.13, 0.18, 0.38, 16]} />
          <meshStandardMaterial color={skinColor} roughness={0.45} />
        </mesh>

        {/* Swivel Head */}
        <group ref={headRef} position={[0, 0.36, 0.24]}>
          {/* Cranium Skull Dome */}
          <mesh castShadow>
            <sphereGeometry args={[0.19, 20, 20]} />
            <meshStandardMaterial color={skinColor} roughness={0.4} />
          </mesh>

          {/* Dinosaur Snout / Predatory Beak */}
          <mesh position={[0, -0.03, 0.22]}>
            <boxGeometry args={[0.19, 0.15, 0.28]} />
            <meshStandardMaterial color={skinColor} roughness={0.35} />
          </mesh>

          {/* Lower Jaw (articulated breathing & nodding) */}
          <mesh ref={jawRef} position={[0, -0.11, 0.2]}>
            <boxGeometry args={[0.17, 0.06, 0.26]} />
            <meshStandardMaterial color={underbellyColor} roughness={0.45} />
          </mesh>

          {/* Glowing Optical Eyes (Left & Right) */}
          <mesh position={[-0.15, 0.06, 0.1]}>
            <sphereGeometry args={[0.045, 14, 14]} />
            <meshBasicMaterial color={plateGlowColor} />
          </mesh>
          <mesh position={[0.15, 0.06, 0.1]}>
            <sphereGeometry args={[0.045, 14, 14]} />
            <meshBasicMaterial color={plateGlowColor} />
          </mesh>
          <pointLight
            ref={eyeLightRef}
            position={[0, 0.08, 0.18]}
            distance={1.6}
            color={plateGlowColor}
            intensity={1.0}
          />

          {/* Majestic Raptor Crest Fin */}
          <mesh position={[0, 0.18, -0.04]} rotation={[-0.45, 0, 0]}>
            <coneGeometry args={[0.055, 0.18, 4]} />
            <meshStandardMaterial
              color={plateGlowColor}
              emissive={plateGlowColor}
              emissiveIntensity={isDark ? 1.2 : 0.7}
            />
          </mesh>
        </group>
      </group>

      {/* Articulated Swaying Dinosaur Tail */}
      <group ref={tailRef} position={[0, 0.4, -0.32]} rotation={[-0.28, 0, 0]}>
        {/* Tail Base Segment */}
        <mesh position={[0, 0, -0.22]}>
          <cylinderGeometry args={[0.11, 0.16, 0.44, 12]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color={skinColor} roughness={0.45} />
        </mesh>

        {/* Tail Mid to Tip */}
        <group ref={tailTipRef} position={[0, 0, -0.44]}>
          <mesh position={[0, 0.04, -0.25]}>
            <coneGeometry args={[0.09, 0.48, 10]} rotation={[-Math.PI / 2, 0, 0]} />
            <meshStandardMaterial color={skinColor} roughness={0.45} />
          </mesh>
          {/* Luminescent Tail Tip Blade */}
          <mesh position={[0, 0.12, -0.38]} rotation={[0.42, 0, 0]}>
            <coneGeometry args={[0.045, 0.18, 4]} />
            <meshStandardMaterial
              color={plateGlowColor}
              emissive={plateGlowColor}
              emissiveIntensity={isDark ? 1.6 : 0.9}
            />
          </mesh>
        </group>
      </group>

      {/* Strong Muscular Hind Legs & Claws */}
      {/* Left Leg */}
      <group position={[-0.24, 0.24, -0.06]}>
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.095, 0.06, 0.32, 10]} />
          <meshStandardMaterial color={skinColor} roughness={0.45} />
        </mesh>
        <mesh position={[0, -0.27, 0.05]}>
          <boxGeometry args={[0.13, 0.05, 0.19]} />
          <meshStandardMaterial color={underbellyColor} roughness={0.55} />
        </mesh>
      </group>
      {/* Right Leg */}
      <group position={[0.24, 0.24, -0.06]}>
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.095, 0.06, 0.32, 10]} />
          <meshStandardMaterial color={skinColor} roughness={0.45} />
        </mesh>
        <mesh position={[0, -0.27, 0.05]}>
          <boxGeometry args={[0.13, 0.05, 0.19]} />
          <meshStandardMaterial color={underbellyColor} roughness={0.55} />
        </mesh>
      </group>

      {/* Articulated Cyber Forearms poised forward */}
      <group position={[-0.17, 0.4, 0.25]} rotation={[0.75, -0.25, 0]}>
        <mesh>
          <cylinderGeometry args={[0.035, 0.035, 0.16, 8]} />
          <meshStandardMaterial color={underbellyColor} />
        </mesh>
        {/* Forearm Claw */}
        <mesh position={[0, 0.08, 0.04]} rotation={[0.3, 0, 0]}>
          <coneGeometry args={[0.02, 0.06, 4]} />
          <meshStandardMaterial color={plateGlowColor} />
        </mesh>
      </group>
      <group position={[0.17, 0.4, 0.25]} rotation={[0.75, 0.25, 0]}>
        <mesh>
          <cylinderGeometry args={[0.035, 0.035, 0.16, 8]} />
          <meshStandardMaterial color={underbellyColor} />
        </mesh>
        {/* Forearm Claw */}
        <mesh position={[0, 0.08, 0.04]} rotation={[0.3, 0, 0]}>
          <coneGeometry args={[0.02, 0.06, 4]} />
          <meshStandardMaterial color={plateGlowColor} />
        </mesh>
      </group>
    </group>
  )
}

// 4. Subtle Futuristic Tech Elements: Floating Transparent Holographic Sensor & Energy Beacon
function SubtleTechElements({ isDark }) {
  const holoRef = useRef()
  const beaconRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (holoRef.current) {
      holoRef.current.position.y = 0.62 + Math.sin(t * 2.2) * 0.035
      holoRef.current.rotation.y = t * 0.4
    }
    if (beaconRef.current) {
      beaconRef.current.rotation.y = t * 0.65
    }
  })

  const aquaColor = isDark ? '#4DE1D3' : '#22C7C2'

  return (
    <group>
      {/* Tiny holographic glass sensor wafer floating near explorer robot */}
      <group ref={holoRef} position={[-0.52, 0.62, 0.65]}>
        <mesh>
          <planeGeometry args={[0.22, 0.14]} />
          <meshPhysicalMaterial
            color={aquaColor}
            transmission={0.85}
            roughness={0.1}
            transparent
            opacity={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh position={[0, 0, 0.005]}>
          <circleGeometry args={[0.02, 12]} />
          <meshBasicMaterial color={isDark ? '#F2F6F4' : '#101318'} />
        </mesh>
      </group>

      {/* Tiny energy beacon marker on riverbank rock */}
      <group ref={beaconRef} position={[0.62, 0.45, 0.45]}>
        <mesh>
          <octahedronGeometry args={[0.065, 0]} />
          <meshStandardMaterial
            color={aquaColor}
            emissive={aquaColor}
            emissiveIntensity={isDark ? 1.4 : 1.1}
            roughness={0.2}
          />
        </mesh>
        <pointLight distance={1.4} color={aquaColor} intensity={0.7} />
      </group>
    </group>
  )
}

// 5. Stylized Translucent Clouds
function Clouds({ isDark }) {
  const cloudsRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (cloudsRef.current) {
      cloudsRef.current.position.x = Math.sin(t * 0.1) * 0.35
    }
  })

  const cloudColor = isDark ? '#C5D6E8' : '#FFFFFF'
  const cloudOpacity = isDark ? 0.75 : 0.88

  return (
    <group ref={cloudsRef} position={[0, 2.1, -0.4]}>
      {/* Cloud 1 (Left-Mid) */}
      <group position={[-1.7, 0.25, -0.6]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.42, 16, 16]} />
          <meshStandardMaterial color={cloudColor} roughness={0.5} transparent opacity={cloudOpacity} />
        </mesh>
        <mesh position={[0.32, -0.05, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color={cloudColor} roughness={0.5} transparent opacity={cloudOpacity} />
        </mesh>
        <mesh position={[-0.3, -0.06, 0]}>
          <sphereGeometry args={[0.28, 16, 16]} />
          <meshStandardMaterial color={cloudColor} roughness={0.5} transparent opacity={cloudOpacity} />
        </mesh>
      </group>

      {/* Cloud 2 (Upper Right) */}
      <group position={[1.9, 0.55, -1.3]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.46, 16, 16]} />
          <meshStandardMaterial color={cloudColor} roughness={0.5} transparent opacity={cloudOpacity} />
        </mesh>
        <mesh position={[-0.34, -0.06, 0]}>
          <sphereGeometry args={[0.32, 16, 16]} />
          <meshStandardMaterial color={cloudColor} roughness={0.5} transparent opacity={cloudOpacity} />
        </mesh>
        <mesh position={[0.38, -0.05, 0]}>
          <sphereGeometry args={[0.34, 16, 16]} />
          <meshStandardMaterial color={cloudColor} roughness={0.5} transparent opacity={cloudOpacity} />
        </mesh>
      </group>
    </group>
  )
}

// 6. Dynamic Natural Lighting: Daylight vs Moonlit Blue-Hour
function NaturalWorldLighting({ isDark }) {
  return (
    <>
      {/* Ambient Lighting */}
      <ambientLight
        intensity={isDark ? 0.85 : 1.3}
        color={isDark ? '#1E2838' : '#FFF9F0'}
      />

      {/* Key Sun / Moon Light */}
      <directionalLight
        position={[6, 9, 6]}
        intensity={isDark ? 1.8 : 2.7}
        color={isDark ? '#76B7FF' : '#FFF3E0'}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Sky Fill Light */}
      <directionalLight
        position={[-6, 4, 3]}
        intensity={isDark ? 0.9 : 1.2}
        color={isDark ? '#1A354E' : '#D4EEFF'}
      />

      {/* Mountain Rim / Horizon Light */}
      <directionalLight
        position={[0, 6, -8]}
        intensity={isDark ? 1.2 : 1.4}
        color={isDark ? '#3A315F' : '#E8DCFF'}
      />
    </>
  )
}

// 7. Cinematic Camera Drift & Cursor Parallax
function CameraController() {
  useFrame((state) => {
    const { x, y } = state.pointer
    const t = state.clock.getElapsedTime()
    // Smooth cinematic camera tilt & cursor parallax
    const targetX = x * 0.45 + Math.sin(t * 0.2) * 0.08
    const targetY = 1.9 + y * 0.22 + Math.cos(t * 0.25) * 0.06
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.04)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.04)
    state.camera.lookAt(0.15, 0.15, 0)
  })
  return null
}

export default function MiniatureWorld() {
  const { isDark } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkDimensions = () => {
        const w = window.innerWidth
        setIsMobile(w < 640)
        setIsTablet(w >= 640 && w < 1024)
      }
      checkDimensions()
      window.addEventListener('resize', checkDimensions)
      return () => window.removeEventListener('resize', checkDimensions)
    }
  }, [])

  return (
    <div
      className="relative w-full h-[360px] sm:h-[480px] lg:h-[660px] flex items-center justify-center pointer-events-auto touch-pan-y"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{
          position: isMobile ? [0, 2.1, 5.2] : isTablet ? [0, 2.0, 4.9] : [0, 1.9, 4.8],
          fov: isMobile ? 46 : 42,
        }}
        dpr={[1, isMobile ? 1.15 : isTablet ? 1.3 : 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        className="w-full h-full cursor-pointer"
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={[isDark ? '#0B0E12' : '#F7F8F4', 4.5, 9.8]} />
          <CameraController />
          <NaturalWorldLighting isDark={isDark} />
          <group position={[isMobile ? 0 : 0.2, -0.05, 0]} scale={isMobile ? [0.92, 0.92, 0.92] : [1, 1, 1]}>
            <RealisticMountain isDark={isDark} />
            <RealisticWater isDark={isDark} />
            <SubtleTechElements isDark={isDark} />
            <ExplorerRobot isHovered={isHovered} isDark={isDark} />
            <CyberDinosaur isHovered={isHovered} isDark={isDark} />
            <Clouds isDark={isDark} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}
