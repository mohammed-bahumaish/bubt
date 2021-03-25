import { motion } from "framer-motion";
import { durations } from "../pages/index";
import { memo } from "react";

const Waffles = ({ step, transitions }) => {
  return (
    <motion.div
      className="h-full w-full flex justify-center items-center flex-col"
      transition={{ duration: durations.exitDuration, ease: "anticipate" }}
      key="Waffles"
      exit={
        transitions.nextStep == 4
          ? { x: 1000, opacity: 0 }
          : { x: -1000, opacity: 0 }
      }
    >
      <div className="flex-" style={{ flex: 3 }}></div>
      <div className="flex-auto w-screen justify-center items-center flex flex-row">
        <motion.div
          className="text-white lg:text-8xl md:text-7xl text-7xl absolute z-20 font-extrabold -mt-7"
          initial={
            transitions.previousStep == 4
              ? { x: 1000, opacity: 0 }
              : { x: -1000, opacity: 0 }
          }
          animate={{ x: -100, opacity: 1 }}
          transition={{
            duration: durations.titleDuration,
            delay: durations.titleDelay,
            ease: "anticipate",
          }}
          key="51"
        >
          <motion.p
            initial={{ rotateZ: -3 }}
            animate={{ rotateZ: [-7, -5, -7], y: [0, 2, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          >
            WAFFLES
          </motion.p>
        </motion.div>

        <motion.div
          className="cup"
          initial={
            transitions.previousStep == 4
              ? { x: 1000, opacity: 0 }
              : { x: -1000, opacity: 0 }
          }
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: durations.cupDuration,
            ease: "anticipate",
            delay: durations.cupDelay,
          }}
          key="52"
        >
          <motion.img
            src="/waffles.png"
            alt=""
            style={{}}
            animate={{
              y: [0, 6, 3, 0],
              rotateZ: [0, 1, -0.5, 0],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
            className=" max-h-screen"
            key="521"
          />
        </motion.div>
      </div>
      <div className="flex-1"></div>
    </motion.div>
  );
};

export default memo(Waffles);
