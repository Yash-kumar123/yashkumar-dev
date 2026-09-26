import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Inner Core, Gyro Rings & Geometric Fragments
function DigitalCoreMesh({ isHovered }) {
  const outerRingRef = useRef()
  const midRingRef = useRef()
  const innerGyroRef = useRef()
  const coreRef = useRef()
  const fragmentsGroupRef = useRef()
  const nodesGroupRef = useRef()

  // Generate satellite computational nodes on a spherical coordinate shell
  const nodePositions = useMemo(() => {
    const coords = []
    const count = 14
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      const r = 2.25
      coords.push(
        new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        )
      )
    }
    return coords
  }, [])

  // Spoke lines from origin to node positions
  const spokeGeometry = useMemo(() => {
    const points = []
    nodePositions.forEach((pos) => {
      points.push(new THREE.Vector3(0, 0, 0))
      points.push(pos)
    })
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [nodePositions])

  // Floating geometric computation fragments orbiting the core
  const fragments = useMemo(() => {
    const frags = []
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const radius = 1.7 + (i % 3) * 0.2
      frags.push({
        position: [Math.cos(angle) * radius, (i % 2 === 0 ? 0.35 : -0.35), Math.sin(angle) * radius],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        scale: 0.18 + Math.random() * 0.1,
      })
    }
    return frags
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const { x, y } = state.pointer

    // Outer Precision Titanium Ring
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = t * 0.12 + y * 0.35
      outerRingRef.current.rotation.y = t * 0.18 + x * 0.35
    }

    // Middle Cyan Gyro Gimbal Ring
    if (midRingRef.current) {
      midRingRef.current.rotation.x = -t * 0.2 - y * 0.25
      midRingRef.current.rotation.z = t * 0.16 + x * 0.25
    }

    // Inner Gyro Lattice
    if (innerGyroRef.current) {
      innerGyroRef.current.rotation.y = t * 0.3 + x * 0.5
      innerGyroRef.current.rotation.x = t * 0.2
    }

    // Central Energy Pulsing Singularity
    if (coreRef.current) {
      const scale = 1 + Math.sin(t * 3) * 0.05 + (isHovered ? 0.15 : 0)
      coreRef.current.scale.set(scale, scale, scale)
    }

    // Orbiting Geometric Fragments
    if (fragmentsGroupRef.current) {
      fragmentsGroupRef.current.rotation.y = -t * 0.15
      fragmentsGroupRef.current.rotation.z = Math.sin(t * 0.2) * 0.1
    }

    if (nodesGroupRef.current) {
      nodesGroupRef.current.rotation.y = t * 0.08
    }
  })

  return (
    <group>
      {/* Outer Precision Ring: Dark Matte Titanium */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2.55, 0.03, 16, 120]} />
        <meshStandardMaterial
          color="#1E293B"
          metalness={0.92}
          roughness={0.18}
          emissive="#0B132B"
        />
      </mesh>

      {/* Middle Gyro Gimbal Ring: Technical Cyan Precision */}
      <mesh ref={midRingRef}>
        <torusGeometry args={[2.15, 0.022, 16, 100]} />
        <meshStandardMaterial
          color="#00F0FF"
          metalness={0.85}
          roughness={0.25}
          emissive="#004753"
          emissiveIntensity={isHovered ? 1.0 : 0.5}
        />
      </mesh>

      {/* Third Internal Gimbal Ring: Deep Ultraviolet Accent */}
      <mesh rotation={[Math.PI / 3, 0, Math.PI / 4]}>
        <torusGeometry args={[1.75, 0.018, 16, 80]} />
        <meshStandardMaterial
          color="#7000FF"
          metalness={0.8}
          roughness={0.3}
          emissive="#3B0764"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Inner Wireframe Computational Polyhedron */}
      <mesh ref={innerGyroRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshStandardMaterial
          wireframe
          color="#F5F3EE"
          emissive="#00F0FF"
          emissiveIntensity={isHovered ? 0.6 : 0.25}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Spoke Lines connecting Center to Peripheral Nodes */}
      <lineSegments geometry={spokeGeometry}>
        <lineBasicMaterial color="#00F0FF" transparent opacity={0.22} />
      </lineSegments>

      {/* Satellite Computational Nodes */}
      <group ref={nodesGroupRef}>
        {nodePositions.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.065, 16, 16]} />
            <meshStandardMaterial
              color="#00F0FF"
              emissive="#00F0FF"
              emissiveIntensity={1.0}
              metalness={0.9}
            />
          </mesh>
        ))}
      </group>

      {/* Floating Geometric Fragments (Prisms & Plates) */}
      <group ref={fragmentsGroupRef}>
        {fragments.map((frag, idx) => (
          <mesh
            key={idx}
            position={frag.position}
            rotation={frag.rotation}
            scale={frag.scale}
          >
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#1E222D"
              metalness={0.9}
              roughness={0.15}
              emissive="#00F0FF"
              emissiveIntensity={0.3}
              wireframe={idx % 2 === 0}
            />
          </mesh>
        ))}
      </group>

      {/* Central High-Density Singularity Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#070707"
          emissive="#00F0FF"
          emissiveIntensity={isHovered ? 1.6 : 0.95}
          roughness={0.1}
          metalness={0.98}
        />
      </mesh>

      {/* Outer Holographic Halo Shell */}
      <mesh>
        <sphereGeometry args={[0.72, 32, 32]} />
        <meshBasicMaterial
          color="#00F0FF"
          transparent
          opacity={isHovered ? 0.25 : 0.09}
          wireframe
        />
      </mesh>
    </group>
  )
}

// Orbiting Computational Particles
function DataParticles() {
  const pointsRef = useRef()
  const particleCount = 220

  const [positions] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 1.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)
    }
    return [pos]
  }, [particleCount])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.035
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.018
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00F0FF"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function SceneContent({ isHovered }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 8, 5]} intensity={1.4} color="#F5F3EE" />
      <directionalLight position={[-6, -6, -4]} intensity={0.9} color="#00F0FF" />
      <directionalLight position={[0, -5, 6]} intensity={0.5} color="#7000FF" />
      <pointLight position={[0, 0, 0]} intensity={isHovered ? 2.8 : 1.6} color="#00F0FF" distance={9} />

      <DigitalCoreMesh isHovered={isHovered} />
      <DataParticles />
    </>
  )
}

export default function DigitalSystemCore() {
  const [isHovered, setIsHovered] = useState(false)
  const [hasWebGL, setHasWebGL] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

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

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-64 h-64 rounded-full border border-cyan/30 flex items-center justify-center animate-spin-slow">
          <div className="w-48 h-48 rounded-full border border-dashed border-white/20" />
          <div className="absolute w-24 h-24 rounded-full bg-cyan/10 blur-xl" />
          <div className="w-12 h-12 rounded-full bg-cyan/20 border border-cyan flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-cyan" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative w-full h-[360px] sm:h-[480px] lg:h-[600px] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 6.4], fov: 42 }}
        dpr={[1, isMobile ? 1.2 : 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          <SceneContent isHovered={isHovered} />
        </Suspense>
      </Canvas>
    </div>
  )
}
