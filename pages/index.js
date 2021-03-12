import { useGesture } from "react-use-gesture";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useCycle } from "framer-motion";
import Particles from "react-particles-js";

export default function Home({ dimensions }) {
  console.log(dimensions.height);
  return (
    <>
      <div className="bg-yellow-600 h-screen w-screen fixed">
        <motion.div
          initial={{ y: 277, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 2.5 }}
        >
          <motion.div
            animate={{ x: [0, 3, 0], transition: { loop: Infinity } }}
          >
            <Particles
              params={{
                particles: {
                  number: {
                    value: 100,
                    density: {
                      enable: false,
                    },
                  },
                  size: {
                    value: 10,
                    random: true,
                    anim: {
                      speed: 0.7,
                      size_min: 0.3,
                      startValue: "max",
                      enable: true,
                      destroy: "max",
                    },
                  },
                  line_linked: {
                    enable: false,
                  },
                  move: {
                    enable: true,
                    speed: 1.5,
                    direction: "top",
                    out_mode: "out",
                    random: true,
                    collisions: false,
                    straight: true,
                    angle: {
                      value: 50,
                      offset: 50,
                    },
                  },
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: false,
                      mode: "bubble",
                    },
                    onclick: {
                      enable: false,
                      mode: "repulse",
                    },
                  },
                  // modes: {
                  //   bubble: {
                  //     distance: 250,
                  //     duration: 2,
                  //     size: 10,
                  //     opacity: 0,
                  //   },
                  //   repulse: {
                  //     distance: 400,
                  //     duration: 4,
                  //   },
                  // },
                },
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
