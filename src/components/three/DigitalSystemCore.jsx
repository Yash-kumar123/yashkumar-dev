import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Iridescent Digital Core with Pearl, Ice, Aqua, and Lavender materials
function IridescentCore({ isHovered }) {
  const outerRingRef = useRef()
  const midRingRef = useRef()
  const innerRingRef = useRef()
  const glassIcosaRef = useRef()
  const centralCoreRef = useRef()
  const nodesGroupRef = useRef()
  const floatGroupRef = useRef()

  // Generate satellite computational nodes on a spherical coordinate shell
  const nodePositions = useMemo(() => {
    const coords = []
    const count = 12
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      const r = 2.3
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

  // Spoke lines connecting central origin to peripheral nodes
  const spokeGeometry = useMemo(() => {
    const points = []
    nodePositions.forEach((pos) => {
      points.push(new THREE.Vector3(0, 0, 0))
      points.push(pos)
    })
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [nodePositions])

  // Floating iridescent shards
  const shards = useMemo(() => {
    const arr = []
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2
      const r = 1.8
      arr.push({
        pos: [Math.cos(angle) * r, (i % 2 === 0 ? 0.4 : -0.4), Math.sin(angle) * r],
        rot: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        scale: 0.16 + (i % 2) * 0.06,
      })
    }
    return arr
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const { x, y } = state.pointer

    // Gentle float wave
    if (floatGroupRef.current) {
      floatGroupRef.current.position.y = Math.sin(t * 1.2) * 0.1
    }

    // Outer Frosted Ice/Pearl Ring
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = t * 0.1 + y * 0.25
      outerRingRef.current.rotation.y = t * 0.14 + x * 0.25
    }

    // Middle Soft Aqua Gimbal Ring
    if (midRingRef.current) {
      midRingRef.current.rotation.x = -t * 0.15 - y * 0.2
      midRingRef.current.rotation.z = t * 0.12 + x * 0.2
    }

    // Inner Lavender Gyro Ring
    if (innerRingRef.current) {
      innerRingRef.current.rotation.y = t * 0.22 + x * 0.3
      innerRingRef.current.rotation.x = t * 0.18
    }

    // Glass Geometric Core
    if (glassIcosaRef.current) {
      glassIcosaRef.current.rotation.y = -t * 0.25
      glassIcosaRef.current.rotation.z = Math.sin(t * 0.5) * 0.1
    }

    // Central Singularity
    if (centralCoreRef.current) {
      const s = 1 + Math.sin(t * 2.5) * 0.06 + (isHovered ? 0.12 : 0)
      centralCoreRef.current.scale.set(s, s, s)
    }

    if (nodesGroupRef.current) {
      nodesGroupRef.current.rotation.y = t * 0.06
    }
  })

  return (
    <group ref={floatGroupRef}>
      {/* Outer Frosted Pearl Ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[2.55, 0.04, 24, 100]} />
        <meshStandardMaterial
          color="#FFFFFF"
          roughness={0.15}
          metalness={0.4}
          emissive="#E6FAF9"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Middle Bright Aqua Translucent Ring */}
      <mesh ref={midRingRef}>
        <torusGeometry args={[2.15, 0.025, 24, 90]} />
        <meshStandardMaterial
          color="#35D6D0"
          roughness={0.2}
          metalness={0.5}
          emissive="#35D6D0"
          emissiveIntensity={isHovered ? 0.8 : 0.4}
        />
      </mesh>

      {/* Inner Lavender Accent Ring */}
      <mesh ref={innerRingRef} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[1.75, 0.02, 24, 80]} />
        <meshStandardMaterial
          color="#A994FF"
          roughness={0.25}
          metalness={0.3}
          emissive="#A994FF"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Translucent Glass Computational Polyhedron (Apple Glass Look) */}
      <mesh ref={glassIcosaRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshPhysicalMaterial
          roughness={0.1}
          transmission={0.85}
          thickness={1.2}
          ior={1.45}
          color="#FFFFFF"
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Fine Connection Wireframe Spokes */}
      <lineSegments geometry={spokeGeometry}>
        <lineBasicMaterial color="#35D6D0" transparent opacity={0.35} />
      </lineSegments>

      {/* Peripheral Pearl/Mint Computational Nodes */}
      <group ref={nodesGroupRef}>
        {nodePositions.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.075, 20, 20]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#35D6D0' : '#78E5B1'}
              roughness={0.1}
              metalness={0.6}
              emissive={i % 2 === 0 ? '#35D6D0' : '#78E5B1'}
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}
      </group>

      {/* Floating Shards (Ice Crystals / Polished Metal) */}
      {shards.map((sh, idx) => (
        <mesh
          key={idx}
          position={sh.pos}
          rotation={sh.rot}
          scale={sh.scale}
        >
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#FFFFFF"
            metalness={0.6}
            roughness={0.1}
            wireframe={idx % 2 === 0}
          />
        </mesh>
      ))}

      {/* Central Luminous Energy Core (Iridescent Mint / Aqua) */}
      <mesh ref={centralCoreRef}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive="#35D6D0"
          emissiveIntensity={isHovered ? 1.5 : 1.0}
          roughness={0.15}
          metalness={0.2}
        />
      </mesh>

      {/* Soft Luminous Outer Corona */}
      <mesh>
        <sphereGeometry args={[0.72, 24, 24]} />
        <meshBasicMaterial
          color="#78E5B1"
          transparent
          opacity={isHovered ? 0.22 : 0.12}
          wireframe
        />
      </mesh>
    </group>
  )
}

function StudioLighting({ isHovered }) {
  return (
    <>
      {/* Soft Ambient Fill */}
      <ambientLight intensity={0.9} color="#FAFAF7" />

      {/* Key Studio Light (Warm Product Highlight) */}
      <directionalLight position={[6, 9, 7]} intensity={1.8} color="#FFFFFF" />

      {/* Cool Rim Light (Aqua/Sky Reflection) */}
      <directionalLight position={[-6, -4, -5]} intensity={1.2} color="#5BA8FF" />

      {/* Soft Lavender Under-Bounce Light */}
      <directionalLight position={[0, -6, 5]} intensity={0.8} color="#A994FF" />

      {/* Central Core Point Glow */}
      <pointLight position={[0, 0, 0]} intensity={isHovered ? 3.0 : 1.8} color="#35D6D0" distance={8} />
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
        <div className="relative w-64 h-64 rounded-full border border-aqua/40 flex items-center justify-center animate-spin-slow bg-white/40 backdrop-blur-md">
          <div className="w-48 h-48 rounded-full border border-dashed border-sky/30" />
          <div className="absolute w-24 h-24 rounded-full bg-aqua/20 blur-xl" />
          <div className="w-14 h-14 rounded-full bg-white shadow-soft-md flex items-center justify-center">
            <span className="w-3.5 h-3.5 rounded-full bg-aqua" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative w-full h-[380px] sm:h-[480px] lg:h-[620px] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, isMobile ? 1.2 : 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <StudioLighting isHovered={isHovered} />
          <IridescentCore isHovered={isHovered} />
        </Suspense>
      </Canvas>
    </div>
  )
}
