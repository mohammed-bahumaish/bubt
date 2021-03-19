import { motion } from "framer-motion";

const WonderShake = ({ step, transitions }) => {
  return (
    <motion.div
      className="h-full w-full flex justify-center items-center flex-col"
      transition={{ duration: 0.5, ease: "anticipate" }}
      key="milkShake"
      exit={
        transitions.nextStep == 2
          ? { x: 1000, opacity: 0 }
          : { x: -1000, opacity: 0 }
      }
    >
      <div className="flex-" style={{ flex: 3 }}></div>
      <div className="flex-auto w-screen justify-center items-center flex flex-row">
        <motion.div
          className="text-gray-50 lg:text-9xl md:text-8xl text-6xl absolute z-20 font-extrabold"
          initial={
            transitions.previousStep == 2
              ? { x: 1000, opacity: 0 }
              : { x: -1000, opacity: 0 }
          }
          animate={{ x: -100, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "anticipate",
          }}
          key="31"
        >
          <motion.p
            initial={{ rotateZ: -3 }}
            animate={{ rotateZ: [-7, -5, -7], y: [0, 2, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          >
            WONDER SHAKE
          </motion.p>
        </motion.div>

        <motion.div
          className="lg:w-1/4 w-80 md:w-80 z-10 max-h-screen md:ml-20"
          initial={
            transitions.previousStep == 2
              ? { x: 1000, opacity: 0 }
              : { x: -1000, opacity: 0 }
          }
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "anticipate",
            // delay: 0.2,
          }}
          key="32"
        >
          <motion.img
            src="/milkshake.png"
            alt=""
            style={{}}
            animate={{
              y: [0, 6, 3, 0],
              rotateZ: [0, 1, -0.5, 0],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
            className=" max-h-screen"
            key="321"
          />
        </motion.div>
      </div>
      <div className="flex-1"></div>
    </motion.div>
  );
};

export default WonderShake;
