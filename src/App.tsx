import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Character from "./components/Character";
import World from "./components/World";

const App = () => {
    return (
        <Canvas camera={{
            position: [0.25, 0.15, 0.25],
            fov: 60
        }}>
            <ScrollControls pages={2} damping={0.5} maxSpeed={0.3}>
                <Character />
            </ScrollControls>

            <World />
        </Canvas>
    )
}

export default App;