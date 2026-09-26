import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// 1. Stylized Mountains (Soft Lavender / Periwinkle Blue / Mint)
function Mountains() {
  return (
    <group position={[0, 0, -2.2]}>
      {/* Tall Main Peak (Center-Left) */}
      <mesh position={[-1.2, 1.4, -0.6]} rotation={[0, 0.4, 0]}>
        <coneGeometry args={[1.5, 3.2, 5]} />
        <meshStandardMaterial
          color="#B8C8E8"
          roughness={0.65}
          metalness={0.1}
          flatShading
        />
      </mesh>

      {/* Snow / Light Summit Cap for Main Peak */}
      <mesh position={[-1.2, 2.4, -0.58]} rotation={[0, 0.4, 0]}>
        <coneGeometry args={[0.55, 1.2, 5]} />
        <meshStandardMaterial
          color="#FAFAF7"
          roughness={0.4}
          metalness={0.05}
          flatShading
        />
      </mesh>

      {/* Secondary Peak (Center-Right, Behind Waterfall) */}
      <mesh position={[0.7, 1.1, -1.0]} rotation={[0, -0.6, 0]}>
        <coneGeometry args={[1.4, 2.6, 6]} />
        <meshStandardMaterial
          color="#C9D6ED"
          roughness={0.7}
          metalness={0.1}
          flatShading
        />
      </mesh>

      {/* Distant Ridge Peak (Right, Atmospheric Lavender Fade) */}
      <mesh position={[2.2, 0.7, -1.8]} rotation={[0, 0.2, 0]}>
        <coneGeometry args={[1.6, 2.2, 5]} />
        <meshStandardMaterial
          color="#D7E0F2"
          roughness={0.8}
          metalness={0.05}
          flatShading
        />
      </mesh>

      {/* Distant Ridge Peak (Far Left) */}
      <mesh position={[-2.6, 0.6, -1.5]} rotation={[0, -0.3, 0]}>
        <coneGeometry args={[1.3, 2.0, 5]} />
        <meshStandardMaterial
          color="#CCD7EC"
          roughness={0.8}
          metalness={0.05}
          flatShading
        />
      </mesh>
    </group>
  )
}

// 2. Floating Island Terrain with Riverbed & Shoreline
function IslandTerrain() {
  return (
    <group position={[0, -0.4, 0]}>
      {/* Top Grass / Moss Plate (Soft Mint & Pastel Green) */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <cylinderGeometry args={[2.7, 2.85, 0.35, 32]} />
        <meshStandardMaterial
          color="#D6F0E0"
          roughness={0.8}
          metalness={0.05}
        />
      </mesh>

      {/* Rocky Sub-surface / Layered Cliff Base (Warm Clay / Soft Gray-Blue) */}
      <mesh position={[0, -0.65, 0]} receiveShadow>
        <cylinderGeometry args={[2.85, 1.2, 1.1, 16]} />
        <meshStandardMaterial
          color="#C8CFDE"
          roughness={0.85}
          metalness={0.1}
          flatShading
        />
      </mesh>

      {/* Bottom Floating Island Rock Tip */}
      <mesh position={[0, -1.5, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[1.2, 0.9, 12]} />
        <meshStandardMaterial
          color="#B0B9CC"
          roughness={0.9}
          metalness={0.1}
          flatShading
        />
      </mesh>

      {/* Riverbank Decorative Boulders */}
      {[
        { pos: [-0.65, 0.26, -0.1], s: 0.22, color: '#A0ABC0' },
        { pos: [-0.45, 0.24, 0.6], s: 0.18, color: '#A8B3C8' },
        { pos: [0.55, 0.24, 0.4], s: 0.24, color: '#9AA7BF' },
        { pos: [0.75, 0.23, -0.5], s: 0.2, color: '#A8B3C8' },
        { pos: [-0.2, 0.22, 1.4], s: 0.16, color: '#B5C0D4' },
        { pos: [0.3, 0.22, -1.2], s: 0.25, color: '#9AA7BF' },
      ].map((rock, idx) => (
        <mesh key={idx} position={rock.pos} scale={[rock.s, rock.s * 0.7, rock.s]}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={rock.color} roughness={0.7} flatShading />
        </mesh>
      ))}

      {/* Stylized Low-Poly Pine / Crystal Trees */}
      {[
        { pos: [-1.8, 0.5, -0.8], h: 0.9, r: 0.35 },
        { pos: [-2.1, 0.45, -0.2], h: 0.75, r: 0.3 },
        { pos: [-1.5, 0.45, 0.5], h: 0.7, r: 0.28 },
        { pos: [1.8, 0.5, -0.7], h: 0.85, r: 0.35 },
        { pos: [2.1, 0.42, 0.1], h: 0.65, r: 0.28 },
        { pos: [1.6, 0.45, 0.8], h: 0.75, r: 0.3 },
      ].map((tree, idx) => (
        <group key={idx} position={tree.pos}>
          {/* Trunk */}
          <mesh position={[0, 0.1, 0]}>
            <cylinderGeometry args={[0.04, 0.06, 0.25, 6]} />
            <meshStandardMaterial color="#8A92A6" roughness={0.9} />
          </mesh>
          {/* Foliage Cones */}
          <mesh position={[0, 0.35, 0]}>
            <coneGeometry args={[tree.r, tree.h * 0.55, 6]} />
            <meshStandardMaterial color="#78E5B1" roughness={0.65} flatShading />
          </mesh>
          <mesh position={[0, 0.52, 0]}>
            <coneGeometry args={[tree.r * 0.75, tree.h * 0.45, 6]} />
            <meshStandardMaterial color="#A3F2CD" roughness={0.65} flatShading />
          </mesh>
        </group>
      ))}
    </group>
  )
}

// 3. Flowing Water & Waterfall with Animated Ripples & Mist Particles
function WaterfallAndRiver() {
  const waterfallRef = useRef()
  const riverRef = useRef()
  const mistPointsRef = useRef()

  // Mist particles near the waterfall pool
  const particleCount = 45
  const [mistPositions, initialY] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const initY = new Float32Array(particleCount)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.65
      pos[i * 3 + 1] = -0.15 + Math.random() * 0.4
      pos[i * 3 + 2] = -0.75 + (Math.random() - 0.5) * 0.4
      initY[i] = pos[i * 3 + 1]
    }
    return [pos, initY]
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Waterfall shimmering wave offset
    if (waterfallRef.current) {
      waterfallRef.current.position.y = 0.55 + Math.sin(t * 8) * 0.015
    }

    // River gentle wave pulsing
    if (riverRef.current) {
      riverRef.current.position.y = -0.16 + Math.sin(t * 3) * 0.008
    }

    // Mist particle upward drift & loop
    if (mistPointsRef.current) {
      const positions = mistPointsRef.current.geometry.attributes.position.array
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += 0.006
        if (positions[i * 3 + 1] > 0.45) {
          positions[i * 3 + 1] = initialY[i]
        }
      }
      mistPointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group>
      {/* Waterfall: Cascading down from mountain plateau to river */}
      <mesh
        ref={waterfallRef}
        position={[0.05, 0.55, -1.05]}
        rotation={[0.32, 0, 0]}
      >
        <planeGeometry args={[0.55, 1.45, 12, 12]} />
        <meshPhysicalMaterial
          color="#35D6D0"
          emissive="#78E5B1"
          emissiveIntensity={0.25}
          transmission={0.7}
          roughness={0.15}
          ior={1.33}
          transparent
          opacity={0.85}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Waterfall Splash Basin Pool */}
      <mesh position={[0.05, -0.14, -0.75]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.42, 24]} />
        <meshStandardMaterial
          color="#78E5B1"
          roughness={0.1}
          metalness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Main Flowing River: Meanders across island towards viewer */}
      <mesh
        ref={riverRef}
        position={[0.08, -0.16, 0.35]}
        rotation={[-Math.PI / 2, 0, -0.15]}
      >
        <planeGeometry args={[0.7, 2.3, 16, 16]} />
        <meshPhysicalMaterial
          color="#35D6D0"
          transmission={0.65}
          roughness={0.12}
          ior={1.33}
          reflectivity={0.9}
          transparent
          opacity={0.88}
        />
      </mesh>

      {/* Waterfall Mist Particles */}
      <points ref={mistPointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={mistPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#E8FAF8"
          transparent
          opacity={0.6}
          depthWrite={false}
        />
      </points>
    </group>
  )
}

// 4. Explorer Robot (Cute, Sophisticated Research Rover with Camera Eye & Antenna)
function ExplorerRobot({ isHovered }) {
  const robotGroupRef = useRef()
  const headRef = useRef()
  const antennaRef = useRef()
  const eyeLightRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const { x, y } = state.pointer

    // Gentle robot breathing & idle curiosity
    if (robotGroupRef.current) {
      robotGroupRef.current.position.y = 0.08 + Math.sin(t * 1.8) * 0.02
    }

    // Head smooth tracking toward cursor & periodic curiosity look-around
    if (headRef.current) {
      const targetRotY = THREE.MathUtils.clamp(x * 0.7 + Math.sin(t * 0.5) * 0.25, -0.8, 0.8)
      const targetRotX = THREE.MathUtils.clamp(-y * 0.4 + Math.sin(t * 0.8) * 0.1, -0.4, 0.4)

      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetRotY, 0.05)
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetRotX, 0.05)
    }

    // Antenna subtle twitch
    if (antennaRef.current) {
      antennaRef.current.rotation.z = Math.sin(t * 4) * 0.08
    }

    // Eye pulse
    if (eyeLightRef.current) {
      eyeLightRef.current.intensity = 0.9 + Math.sin(t * 3) * 0.3 + (isHovered ? 0.6 : 0)
    }
  })

  return (
    // Perched curiously on the left riverbank looking toward the water & mountain
    <group ref={robotGroupRef} position={[-0.85, 0.08, 0.45]} rotation={[0, 0.65, 0]}>
      {/* Robot Chassis Body (Pearl White & Soft Silver) */}
      <mesh position={[0, 0.28, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.26, 0.32, 24]} />
        <meshStandardMaterial
          color="#FAFAF7"
          metalness={0.3}
          roughness={0.2}
        />
      </mesh>

      {/* Energy Core Belt / Chassis Accent Ring */}
      <mesh position={[0, 0.24, 0]}>
        <cylinderGeometry args={[0.27, 0.27, 0.05, 24]} />
        <meshStandardMaterial
          color="#35D6D0"
          emissive="#35D6D0"
          emissiveIntensity={0.6}
          roughness={0.15}
        />
      </mesh>

      {/* Research Backpack / Battery Unit */}
      <mesh position={[0, 0.28, -0.22]} castShadow>
        <boxGeometry args={[0.24, 0.26, 0.12]} />
        <meshStandardMaterial
          color="#D4DAE8"
          metalness={0.5}
          roughness={0.25}
        />
      </mesh>

      {/* Swivel Head Group */}
      <group ref={headRef} position={[0, 0.5, 0]}>
        {/* Head Shell */}
        <mesh castShadow>
          <sphereGeometry args={[0.2, 24, 24]} />
          <meshStandardMaterial
            color="#FAFAF7"
            metalness={0.25}
            roughness={0.15}
          />
        </mesh>

        {/* Camera / Eye Bezel */}
        <mesh position={[0, 0.02, 0.17]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.06, 24]} />
          <meshStandardMaterial
            color="#232731"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Luminous Optical Lens (Glowing Aqua Eye) */}
        <mesh position={[0, 0.02, 0.21]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#35D6D0" />
        </mesh>

        <pointLight
          ref={eyeLightRef}
          position={[0, 0.02, 0.3]}
          distance={1.5}
          color="#35D6D0"
          intensity={1.0}
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
              color="#A994FF"
              emissive="#A994FF"
              emissiveIntensity={0.8}
            />
          </mesh>
        </group>
      </group>

      {/* Mechanical Articulated Legs / Wheels Platform */}
      {/* Left Leg */}
      <group position={[-0.15, 0.05, 0]}>
        <mesh position={[0, 0.06, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.18, 8]} />
          <meshStandardMaterial color="#8A92A6" metalness={0.6} />
        </mesh>
        {/* Foot Pad */}
        <mesh position={[0, -0.02, 0.03]}>
          <boxGeometry args={[0.1, 0.04, 0.16]} />
          <meshStandardMaterial color="#5D626D" metalness={0.5} roughness={0.3} />
        </mesh>
      </group>

      {/* Right Leg */}
      <group position={[0.15, 0.05, 0]}>
        <mesh position={[0, 0.06, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.18, 8]} />
          <meshStandardMaterial color="#8A92A6" metalness={0.6} />
        </mesh>
        {/* Foot Pad */}
        <mesh position={[0, -0.02, 0.03]}>
          <boxGeometry args={[0.1, 0.04, 0.16]} />
          <meshStandardMaterial color="#5D626D" metalness={0.5} roughness={0.3} />
        </mesh>
      </group>
    </group>
  )
}

// 4b. Tiny Futuristic Explorer Beacon & Mini Holographic Display Panel
function FuturisticElements() {
  const holoRef = useRef()
  const beaconRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (holoRef.current) {
      holoRef.current.position.y = 0.58 + Math.sin(t * 2.2) * 0.04
      holoRef.current.rotation.y = t * 0.4
    }
    if (beaconRef.current) {
      beaconRef.current.rotation.y = t * 0.6
    }
  })

  return (
    <group>
      {/* Tiny floating translucent holographic data panel floating near robot */}
      <group ref={holoRef} position={[-0.48, 0.58, 0.6]}>
        <mesh>
          <planeGeometry args={[0.22, 0.14]} />
          <meshPhysicalMaterial
            color="#35D6D0"
            transmission={0.8}
            roughness={0.1}
            transparent
            opacity={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Subtle glowing marker dot on holo wafer */}
        <mesh position={[0, 0, 0.005]}>
          <circleGeometry args={[0.02, 12]} />
          <meshBasicMaterial color="#FAFAF7" />
        </mesh>
      </group>

      {/* Tiny energy beacon marker on riverbank rock */}
      <group ref={beaconRef} position={[0.55, 0.42, 0.4]}>
        <mesh>
          <octahedronGeometry args={[0.06, 0]} />
          <meshStandardMaterial
            color="#35D6D0"
            emissive="#35D6D0"
            emissiveIntensity={1.2}
            roughness={0.2}
          />
        </mesh>
        <pointLight distance={1.2} color="#35D6D0" intensity={0.6} />
      </group>
    </group>
  )
}

// 5. Stylized Floating Cumulus Clouds
function Clouds() {
  const cloudsRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (cloudsRef.current) {
      cloudsRef.current.position.x = Math.sin(t * 0.1) * 0.3
    }
  })

  return (
    <group ref={cloudsRef} position={[0, 1.8, 0]}>
      {/* Cloud 1 (Left-Mid) */}
      <group position={[-1.6, 0.3, -0.5]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.38, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.5} transparent opacity={0.88} />
        </mesh>
        <mesh position={[0.3, -0.05, 0]}>
          <sphereGeometry args={[0.28, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.5} transparent opacity={0.88} />
        </mesh>
        <mesh position={[-0.28, -0.06, 0]}>
          <sphereGeometry args={[0.26, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.5} transparent opacity={0.88} />
        </mesh>
      </group>

      {/* Cloud 2 (Upper Right) */}
      <group position={[1.8, 0.6, -1.2]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.42, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.5} transparent opacity={0.88} />
        </mesh>
        <mesh position={[-0.32, -0.06, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.5} transparent opacity={0.88} />
        </mesh>
        <mesh position={[0.35, -0.05, 0]}>
          <sphereGeometry args={[0.32, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.5} transparent opacity={0.88} />
        </mesh>
      </group>
    </group>
  )
}

// 6. Studio & Natural Golden Daylight Lighting
function WorldLighting() {
  return (
    <>
      {/* Soft Luminous Daylight Ambient */}
      <ambientLight intensity={1.2} color="#F5F8FF" />

      {/* Warm Morning Sunlight Key (Peach / Pale Yellow) */}
      <directionalLight
        position={[5, 8, 6]}
        intensity={2.4}
        color="#FFF4E6"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Cool Sky / Aqua Fill Light */}
      <directionalLight
        position={[-6, 4, 3]}
        intensity={1.1}
        color="#D6F4FF"
      />

      {/* Lavender Soft Mountain Rim Light */}
      <directionalLight
        position={[0, 5, -7]}
        intensity={1.4}
        color="#EAD9FF"
      />

      {/* Soft Contact Shadow beneath island */}
      <mesh position={[0, -2.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5.5, 5.5]} />
        <meshBasicMaterial color="#111318" transparent opacity={0.06} />
      </mesh>
    </>
  )
}

// 7. Cinematic Camera Drift & Parallax Controller
function CameraController() {
  useFrame((state) => {
    const { x, y } = state.pointer
    const t = state.clock.getElapsedTime()
    // Gentle cinematic camera drift + cursor parallax
    const targetX = x * 0.4 + Math.sin(t * 0.2) * 0.08
    const targetY = 1.8 + y * 0.22 + Math.cos(t * 0.25) * 0.06
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.04)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.04)
    state.camera.lookAt(0.15, 0.1, 0)
  })
  return null
}

export default function MiniatureWorld() {
  const [isHovered, setIsHovered] = useState(false)
  const [hasWebGL, setHasWebGL] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const worldGroupRef = useRef()

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) setHasWebGL(false)
    } catch {
      setHasWebGL(false)
    }

    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768)
      const handleResize = () => setIsMobile(window.innerWidth < 768)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      className="relative w-full h-[440px] sm:h-[540px] lg:h-[660px] flex items-center justify-center pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 1.8, 4.6], fov: 42 }}
        dpr={[1, isMobile ? 1.2 : 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        className="w-full h-full cursor-pointer"
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={['#F5F8FF', 4.5, 9.5]} />
          <CameraController />
          <WorldLighting />
          <group ref={worldGroupRef} position={[0.25, -0.1, 0]}>
            <Mountains />
            <IslandTerrain />
            <WaterfallAndRiver />
            <FuturisticElements />
            <ExplorerRobot isHovered={isHovered} />
            <Clouds />
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}
