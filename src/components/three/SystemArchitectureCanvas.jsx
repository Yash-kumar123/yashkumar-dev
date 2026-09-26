import React, { useRef, useMemo, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ARCH_NODES = [
  { id: 'frontend', name: 'FRONTEND', tech: 'React 19 / Flutter', role: 'Reactive UX & Monaco Editor Client', color: '#00E5FF', angle: 0 },
  { id: 'backend', name: 'BACKEND', tech: 'Node.js / Express', role: 'High-Concurrency REST & Auth Gateway', color: '#38BDF8', angle: (Math.PI * 2) / 6 },
  { id: 'realtime', name: 'REALTIME', tech: 'WebSockets / Yjs CRDT', role: 'Sub-50ms Multi-User Document Sync', color: '#818CF8', angle: (Math.PI * 4) / 6 },
  { id: 'ai', name: 'AI ENGINE', tech: 'FastAPI / LangChain', role: 'Multi-Agent Pipeline & ChromaDB RAG', color: '#C084FC', angle: (Math.PI * 6) / 6 },
  { id: 'database', name: 'DATABASE', tech: 'PostgreSQL / MongoDB', role: '3NF Relational & GeoJSON Spatial Storage', color: '#34D399', angle: (Math.PI * 8) / 6 },
  { id: 'cloud', name: 'CLOUD INFRA', tech: 'Docker / Turborepo', role: 'Isolated Sandboxes & Monorepo Tooling', color: '#F59E0B', angle: (Math.PI * 10) / 6 },
]

function InteractiveSystemGraph({ activeNode, onSelectNode }) {
  const groupRef = useRef()
  const linesRef = useRef()

  const radius = 2.8

  const nodeCoords = useMemo(() => {
    return ARCH_NODES.map((node) => {
      const x = Math.cos(node.angle) * radius
      const y = Math.sin(node.angle) * radius * 0.75
      const z = (Math.sin(node.angle * 2) * 0.5)
      return { ...node, pos: new THREE.Vector3(x, y, z) }
    })
  }, [radius])

  // Connection geometry from center (0,0,0) to each node
  const connectionsGeometry = useMemo(() => {
    const points = []
    nodeCoords.forEach((node) => {
      points.push(new THREE.Vector3(0, 0, 0))
      points.push(node.pos)
    })
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [nodeCoords])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const { x, y } = state.pointer

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.35 + Math.sin(t * 0.15) * 0.1, 0.05)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.25, 0.05)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central Hub: SYSTEM CORE */}
      <mesh onClick={() => onSelectNode(null)}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#111827"
          emissive="#00E5FF"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>
      
      <mesh>
        <sphereGeometry args={[0.45, 24, 24]} />
        <meshStandardMaterial
          color="#050505"
          emissive="#00E5FF"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Central Orbital Pulse Ring */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[1.3, 0.015, 16, 64]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.3} />
      </mesh>

      {/* Connecting Network Bus Lines */}
      <lineSegments ref={linesRef} geometry={connectionsGeometry}>
        <lineBasicMaterial color="#00E5FF" transparent opacity={0.35} />
      </lineSegments>

      {/* Satellite System Nodes */}
      {nodeCoords.map((node) => {
        const isSelected = activeNode?.id === node.id
        return (
          <group key={node.id} position={node.pos}>
            <mesh
              onClick={(e) => {
                e.stopPropagation()
                onSelectNode(node)
              }}
              onPointerOver={(e) => {
                e.stopPropagation()
                onSelectNode(node)
              }}
            >
              <sphereGeometry args={[isSelected ? 0.32 : 0.22, 24, 24]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={isSelected ? 1.5 : 0.7}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>

            {/* Subtle outer halo on selected/active */}
            {isSelected && (
              <mesh>
                <sphereGeometry args={[0.42, 16, 16]} />
                <meshBasicMaterial color={node.color} wireframe transparent opacity={0.4} />
              </mesh>
            )}
          </group>
        )
      })}
    </group>
  )
}

export default function SystemArchitectureCanvas({ activeNode, onSelectNode }) {
  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px]">
      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full cursor-pointer"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 4]} intensity={1.2} />
        <pointLight position={[0, 0, 0]} intensity={2.0} color="#00E5FF" distance={9} />

        <Suspense fallback={null}>
          <InteractiveSystemGraph activeNode={activeNode} onSelectNode={onSelectNode} />
        </Suspense>
      </Canvas>
    </div>
  )
}
