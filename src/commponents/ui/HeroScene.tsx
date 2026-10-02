import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Core = () => {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current || !innerRef.current) return;

    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.35) * 0.08;

    innerRef.current.rotation.x += delta * 0.25;
    innerRef.current.rotation.y -= delta * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* OUTER WIREFRAME */}
      <Float
        speed={1.5}
        rotationIntensity={0.35}
        floatIntensity={0.45}
      >
        <mesh>
          <icosahedronGeometry args={[2.05, 1]} />

          <meshBasicMaterial
            color="#8B72FF"
            wireframe
            transparent
            opacity={0.28}
          />
        </mesh>
      </Float>

      {/* SECOND LAYER */}
      <mesh rotation={[0.4, 0.2, 0.5]}>
        <torusGeometry args={[1.55, 0.015, 8, 100]} />

        <meshBasicMaterial
          color="#22D3EE"
          transparent
          opacity={0.65}
        />
      </mesh>

      <mesh rotation={[1.2, 0.3, -0.5]}>
        <torusGeometry args={[1.75, 0.012, 8, 100]} />

        <meshBasicMaterial
          color="#8B72FF"
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* INNER CORE */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.75, 0]} />

        <meshStandardMaterial
          color="#8B72FF"
          roughness={0.18}
          metalness={0.55}
          emissive="#6D4AFF"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* CENTER */}
      <mesh>
        <sphereGeometry args={[0.22, 32, 32]} />

        <meshBasicMaterial color="#22D3EE" />
      </mesh>

      {/* ORBIT POINTS */}

      <mesh position={[2.1, 0.15, 0]}>
        <sphereGeometry args={[0.075, 16, 16]} />
        <meshBasicMaterial color="#22D3EE" />
      </mesh>

      <mesh position={[-1.55, 1.3, 0.3]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial color="#8B72FF" />
      </mesh>

      <mesh position={[0.8, -1.75, 0.5]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#22D3EE" />
      </mesh>
    </group>
  );
};

const HeroScene = () => {
  return (
    <div className="relative h-full min-h-[420px] w-full">
      {/* SUBTLE GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[65%]
          w-[65%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[90px]
        "
        style={{
          background: "var(--glow-primary)",
          opacity: 0.55,
        }}
      />

      <Canvas
        dpr={[1, 1.6]}
        camera={{
          position: [0, 0, 6.4],
          fov: 42,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <ambientLight intensity={1.1} />

        <pointLight
          position={[4, 4, 4]}
          intensity={10}
          color="#8B72FF"
        />

        <pointLight
          position={[-4, -2, 3]}
          intensity={7}
          color="#22D3EE"
        />

        <Sparkles
          count={35}
          scale={5}
          size={1.7}
          speed={0.25}
          opacity={0.4}
          color="#8B72FF"
        />

        <Core />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.35}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.65}
        />
      </Canvas>

      {/* VISUAL LABELS */}

      <div
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-[18%]
          hidden
          items-center
          gap-2
          xl:flex
        "
      >
        <span
          className="h-px w-8"
          style={{
            background: "var(--border)",
          }}
        />

        <span
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.18em]
          "
          style={{
            color: "var(--text-tertiary)",
          }}
        >
          Frontend
        </span>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-[20%]
          right-[3%]
          hidden
          items-center
          gap-2
          xl:flex
        "
      >
        <span
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.18em]
          "
          style={{
            color: "var(--text-tertiary)",
          }}
        >
          Backend
        </span>

        <span
          className="h-px w-8"
          style={{
            background: "var(--border)",
          }}
        />
      </div>
    </div>
  );
};

export default HeroScene;