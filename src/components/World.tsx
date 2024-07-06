import { Environment, MeshReflectorMaterial } from "@react-three/drei";

const World = () => {

    return (
        <>
            <mesh rotation-x={-Math.PI / 2} position-y={-0.1}>
                <planeGeometry args={[50, 50]} />
                <MeshReflectorMaterial
                    color="#171720"
                    blur={[500, 500]}
                    resolution={1024}
                    roughness={0.6}
                    metalness={0.5}
                    mixStrength={3}
                    mirror={0.5}
                />
            </mesh>

            <Environment preset="forest" />

            <pointLight
                color={"#fffbeb"}
                distance={1}
                decay={2}
                position={[0.2, 0.2, 0]}
                intensity={0.35}
            />

            <ambientLight intensity={0.75} />
            <fog attach="fog" args={["#171720", 0, 5]} />

            <color attach={"background"} args={["#171720"]} />
        </>
    )
}

export default World;