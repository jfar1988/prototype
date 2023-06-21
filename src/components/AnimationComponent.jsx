import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import CharacterFSM from "../utils/CharacterFSM";
import RunState from "../utils/RunState";
import BasicCharacterControllerProxy from "../utils/Proxy";
import Footer from "./Footer";

const AnimationComponent = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationTime, setAnimationTime] = useState(0);

  const mountRef = useRef(null);
  const controlsRef = useRef(null);
  const mixerRef = useRef(null);
  const animateRef = useRef(null);
  let scene, camera, renderer, controls, character, characterFSM;

  useEffect(() => {
    const init = async () => {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);

      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1.0,
        1000
      );
      camera.position.set(20, 10, 50);

      const size = 100;
      const divisions = 100;
      const plane = new THREE.GridHelper(size, divisions);
      plane.castShadow = false;
      plane.receiveShadow = true;
      scene.add(plane);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controlsRef.current = controls;

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(1, 1, 1);
      scene.add(light);

      const loader = new FBXLoader();
      loader.setPath("../../assets/");

      character = await new Promise((resolve, reject) => {
        loader.load(
          "robot1.fbx",
          (fbx) => {
            fbx.scale.setScalar(0.1);
            fbx.traverse((c) => {
              if (c.isMesh) {
                c.castShadow = true;
                c.receiveShadow = true;
              }
            });

            scene.add(fbx);
            resolve(fbx);
          },
          undefined,
          reject
        );
      });

      mixerRef.current = new THREE.AnimationMixer(character);

      const clip = character.animations[0];
      const action = mixerRef.current.clipAction(clip);
      action.play();

      characterFSM = new CharacterFSM(
        new BasicCharacterControllerProxy(character)
      );
      characterFSM._AddState(new RunState(characterFSM));

      animateRef.current = () => {
        const delta = 0.01;

        if (!isPaused && mixerRef.current) {
          mixerRef.current.update(delta);
          setAnimationTime(mixerRef.current.time);
          setIsPlaying(true);
        }

        controlsRef.current.update();
        characterFSM.Update(delta);

        renderer.render(scene, camera);

        requestAnimationFrame(animateRef.current);
      };

      animateRef.current();
    };

    init();

    return () => {
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  const resumeAnimation = () => {
    setIsPaused(false);
    setIsPlaying(true);
    console.log(camera); // Verificar si camera está definido

    if (camera && camera.position) {
      setIsPaused(false);
      mixerRef.current.timeScale = 1.0;
    }
    // Reiniciar el tiempo de animación
    setAnimationTime(0);
    mixerRef.current.setTime(0);

    // Reiniciar el estado del controlador de personaje
    if (characterFSM) {
      characterFSM.Reset();
    }

    // Reiniciar cualquier otro estado o valores relevantes de la escena
    // ...

    // Reiniciar la posición de la cámara
    camera.position.set(20, 10, 50);

    // Reiniciar los controles de órbita
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const reverseAnimation = () => {
    if (isPlaying) {
      setIsPaused(!isPaused);
      mixerRef.current.timeScale = isPaused ? -1.0 : 0.0;
    }
  };

  const toggleAnimation = () => {
    if (isPlaying) {
      setIsPaused(!isPaused);
      mixerRef.current.timeScale = isPaused ? 1.0 : 0.0;
    }
  };

  const stopAnimation = () => {
    setIsPaused(false);
    setIsPlaying(false);
    mixerRef.current.stopAllAction();
  };

  //TODO falta mejorar estos botones
  const back_Frame = (backward) => {
    const increment = backward ? -0.1 : 0.1;
    const newTime = Math.max(0, animationTime + increment);
    setAnimationTime(newTime);
    mixerRef.current.setTime(newTime);
  };
  const forward_Frame = (forward) => {
    const increment = forward ? 0.1 : -0.1;
    let newTime = animationTime + increment;

    if (!isPlaying && forward) {
      newTime += 0.1;
      console.log("esta en pausa");
    }

    const clampedTime = Math.max(0, newTime);
    setAnimationTime(clampedTime);
    mixerRef.current.setTime(clampedTime);
  };

  return (
    <>
      <div ref={mountRef} />
      <Footer
        resumeAnimation={resumeAnimation}
        reverseAnimation={reverseAnimation}
        stopAnimation={stopAnimation}
        toggleAnimation={toggleAnimation}
        back_Frame={back_Frame}
        forward_Frame={forward_Frame}
      />
    </>
  );
};

export default AnimationComponent;
