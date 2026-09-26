import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Custom Procedural Ribbon Geometry Generator
// Creates a smooth, continuous folded architectural ribbon with variable twist and thickness
function createArchitecturalRibbonGeometry() {
  // Closed 3D Catmull-Rom spline with asymmetric architectural loops & negative space
  const controlPoints = [
    new THREE.Vector3(0.2, 1.9, 0.3),
    new THREE.Vector3(1.5, 1.3, -0.7),
    new THREE.Vector3(1.9, -0.2, 0.6),
    new THREE.Vector3(0.8, -1.6, -0.5),
    new THREE.Vector3(-0.7, -1.8, 0.5),
    new THREE.Vector3(-1.9, -0.4, -0.6),
    new THREE.Vector3(-1.3, 1.4, 0.6),
    new THREE.Vector3(0.3, 0.8, -0.9),
    new THREE.Vector3(1.2, 0.0, 0.8),
    new THREE.Vector3(0.2, -0.9, 0.1),
    new THREE.Vector3(-0.9, -0.6, -0.7),
    new THREE.Vector3(-0.4, 1.0, 0.4),
  ]

  const curve = new THREE.CatmullRomCurve3(controlPoints, true, 'centripetal')
  
  const segments = 240
  const profileSteps = 20
  const ribbonWidth = 0.52
  const ribbonThickness = 0.075

  const vertices = []
  const normals = []
  const uvs = []
  const indices = []

  // Sample Frenet frames along the curve
  const frames = curve.computeFrenetFrames(segments, true)

  for (let i = 0; i <= segments; i++) {
    const u = i / segments
    const pt = curve.getPointAt(u % 1)
    const N = frames.normals[i % segments].clone()
    const B = frames.binormals[i % segments].clone()

    // Smooth architectural twist angle along the continuous closed ribbon
    const twistAngle = u * Math.PI * 4 + Math.sin(u * Math.PI * 2) * 0.8
    const cosT = Math.cos(twistAngle)
    const sinT = Math.sin(twistAngle)

    const normal = N.clone().multiplyScalar(cosT).add(B.clone().multiplyScalar(sinT)).normalize()
    const binormal = N.clone().multiplyScalar(-sinT).add(B.clone().multiplyScalar(cosT)).normalize()

    // Create an aerodynamic, curved ribbon profile (flat elliptical with rounded edges)
    for (let j = 0; j <= profileSteps; j++) {
      const v = j / profileSteps
      const angle = v * Math.PI * 2

      // Flat curved profile equation
      const xOffset = Math.sin(angle) * (ribbonWidth * 0.5)
      const yOffset = Math.cos(angle) * (ribbonThickness * 0.5) * (1 - Math.pow(Math.abs(xOffset) / (ribbonWidth * 0.5), 2) * 0.3)

      const vertex = pt.clone()
        .add(normal.clone().multiplyScalar(xOffset))
        .add(binormal.clone().multiplyScalar(yOffset))

      vertices.push(vertex.x, vertex.y, vertex.z)

      const vertexNormal = normal.clone().multiplyScalar(Math.sin(angle))
        .add(binormal.clone().multiplyScalar(Math.cos(angle))).normalize()
      normals.push(vertexNormal.x, vertexNormal.y, vertexNormal.z)

      uvs.push(u, v)
    }
  }

  // Generate face indices
  for (let i = 0; i < segments; i++) {
    for (let j = 0; j < profileSteps; j++) {
      const a = i * (profileSteps + 1) + j
      const b = (i + 1) * (profileSteps + 1) + j
      const c = (i + 1) * (profileSteps + 1) + (j + 1)
      const d = i * (profileSteps + 1) + (j + 1)

      indices.push(a, b, d)
      indices.push(b, c, d)
    }
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3))
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()

  return geometry
}

// Single Hairline Secondary Curve
function createHairlinePath() {
  const pts = [
    new THREE.Vector3(-1.6, 1.8, -0.4),
    new THREE.Vector3(-0.4, 2.2, 0.8),
    new THREE.Vector3(1.6, 1.0, 0.3),
    new THREE.Vector3(1.8, -1.4, -0.6),
    new THREE.Vector3(0.0, -2.1, 0.4),
    new THREE.Vector3(-1.7, -1.0, 0.2),
  ]
  const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal')
  return new THREE.TubeGeometry(curve, 100, 0.009, 12, false)
}

function LiquidSculpture({ isHovered }) {
  const sculptureGroupRef = useRef()
  const ribbonMeshRef = useRef()
  const innerCoreRef = useRef()
  const hairlineRef = useRef()

  const ribbonGeometry = useMemo(() => createArchitecturalRibbonGeometry(), [])
  const hairlineGeometry = useMemo(() => createHairlinePath(), [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const { x, y } = state.pointer

    // Extremely slow, dignified breathing motion — NOT an aggressive spin
    if (sculptureGroupRef.current) {
      // Gentle buoyancy
      sculptureGroupRef.current.position.y = Math.sin(t * 0.7) * 0.08
      
      // Smooth damped parallax responding to mouse
      sculptureGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        sculptureGroupRef.current.rotation.y,
        t * 0.05 + x * 0.35,
        0.04
      )
      sculptureGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        sculptureGroupRef.current.rotation.x,
        -y * 0.25 + Math.sin(t * 0.4) * 0.04,
        0.04
      )
    }

    // Refined inner core subtle luminous pulse
    if (innerCoreRef.current) {
      const s = 1 + Math.sin(t * 2.2) * 0.04 + (isHovered ? 0.08 : 0)
      innerCoreRef.current.scale.set(s, s, s)
    }

    if (hairlineRef.current) {
      hairlineRef.current.rotation.y = -t * 0.03
    }
  })

  return (
    <group ref={sculptureGroupRef} position={[0.2, 0, 0]}>
      {/* Primary Folded Liquid Ribbon Sculpture */}
      <mesh ref={ribbonMeshRef} geometry={ribbonGeometry}>
        {/* Pearl / Liquid Glass / Soft Chrome Material */}
        <meshPhysicalMaterial
          color="#FFFFFF"
          metalness={0.22}
          roughness={0.12}
          transmission={0.42}
          thickness={1.4}
          ior={1.48}
          clearcoat={1.0}
          clearcoatRoughness={0.06}
          iridescence={0.88}
          iridescenceIOR={1.35}
          iridescenceThicknessRange={[100, 380]}
          reflectivity={0.95}
          specularIntensity={1.0}
          specularColor="#FFFFFF"
        />
      </mesh>

      {/* Internal Architectural Luminous Core (Refined Capsule/Crystal) */}
      <group position={[0.08, -0.05, 0]}>
        <mesh ref={innerCoreRef}>
          <capsuleGeometry args={[0.16, 0.65, 24, 32]} />
          <meshStandardMaterial
            color="#FAFAF7"
            emissive="#E0F7F8"
            emissiveIntensity={isHovered ? 1.4 : 0.9}
            roughness={0.1}
            metalness={0.1}
          />
        </mesh>

        {/* Soft internal core glow shell */}
        <mesh>
          <capsuleGeometry args={[0.24, 0.72, 16, 16]} />
          <meshBasicMaterial
            color="#5BA8FF"
            transparent
            opacity={0.14}
            wireframe
          />
        </mesh>

        {/* Internal Core Local Lighting */}
        <pointLight intensity={1.8} distance={3.5} color="#E0F8FA" />
      </group>

      {/* Single Hairline Secondary Architectural Path */}
      <mesh ref={hairlineRef} geometry={hairlineGeometry}>
        <meshStandardMaterial
          color="#D4D9E2"
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.65}
        />
      </mesh>
    </group>
  )
}

// Studio Product Lighting & Soft Contact Shadow
function StudioEnvironment({ isHovered }) {
  return (
    <>
      {/* Soft Ambient Fill */}
      <ambientLight intensity={1.1} color="#FAFAF7" />

      {/* Main Studio Key Light (Pure Soft White) */}
      <directionalLight
        position={[6, 8, 6]}
        intensity={2.2}
        color="#FFFFFF"
      />

      {/* Soft Cool Fill Light (Icy Sky) */}
      <directionalLight
        position={[-6, 3, -4]}
        intensity={1.2}
        color="#E8F2FF"
      />

      {/* Warm Rim Highlight (Soft Peach / Gold) */}
      <directionalLight
        position={[3, -5, -4]}
        intensity={0.9}
        color="#FFF4EC"
      />

      {/* Subtle Lavender Back-Rim */}
      <directionalLight
        position={[-2, 6, -6]}
        intensity={0.8}
        color="#F0E8FF"
      />

      {/* Soft Contact Shadow beneath the sculpture */}
      <mesh position={[0.2, -2.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4.2, 4.2]} />
        <meshBasicMaterial
          color="#111318"
          transparent
          opacity={0.065}
        />
      </mesh>
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
        <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-white to-sky-light border border-black/[0.06] shadow-soft-xl flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-white shadow-soft-md" />
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative w-full h-[400px] sm:h-[500px] lg:h-[640px] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0.1, 0, 5.8], fov: 40 }}
        dpr={[1, isMobile ? 1.2 : 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <StudioEnvironment isHovered={isHovered} />
          <LiquidSculpture isHovered={isHovered} />
        </Suspense>
      </Canvas>
    </div>
  )
}
