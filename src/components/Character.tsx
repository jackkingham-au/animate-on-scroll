import { useAnimations, useFBX, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { degToRad } from "three/src/math/MathUtils.js";

const Character = () => {

    const scroll = useScroll();

    const model = useFBX('models/Dancing Model.fbx');
    const { actions, names: [animation] } = useAnimations(model.animations, model);

    useEffect(() => {
        if (actions && actions[animation]) {
            actions[animation].reset().play().paused = true;

            return () => {
                actions[animation]?.fadeOut(0.5);
            }
        }
    }, [actions])

    useEffect(() => {
        model.traverse((obj: any) => {
            if (obj.isMesh) {
                obj.castShadow = true;
                obj.receiveShadow = true;
            }
        })
    }, [])

    useFrame(() => {
        if (actions[animation]) {
            actions[animation].time = actions[animation].getClip().duration * scroll.offset;
        }
    })

    return (
        <primitive
            scale={0.0015}
            rotation-y={degToRad(25)}
            position-y={-0.1}
            object={model}
        />
    )
}

export default Character;