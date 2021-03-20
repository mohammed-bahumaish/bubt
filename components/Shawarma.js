import { motion } from "framer-motion";

const Shawarma = ({ step, transitions }) => {
  return (
    <motion.div
      className="h-full w-full flex justify-center items-center flex-col"
      transition={{ duration: 0.5, ease: "anticipate" }}
      key="Shawarma"
      exit={
        transitions.nextStep == 5
          ? { x: 1000, opacity: 0 }
          : { y: -1000, opacity: 0 }
      }
    >
      <div className="flex-" style={{ flex: 3 }}></div>
      <div className="flex-auto w-screen justify-center items-center flex flex-row">
        <motion.div
          className="text-gray-900 lg:text-9xl md:text-8xl text-6xl absolute z-20 font-extrabold"
          initial={
            transitions.previousStep == 5
              ? { x: 1000, opacity: 0 }
              : { y: -1000, opacity: 0 }
          }
          animate={{ x: -100, opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "anticipate",
          }}
          key="61"
        >
          <motion.p
            initial={{ rotateZ: -3 }}
            animate={{ rotateZ: [-7, -5, -7], y: [0, 2, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          >
            SHAWARMA
          </motion.p>
        </motion.div>

        <motion.div
          className="lg:w-1/3 w-96 md:w-96 z-10 max-h-screen md:ml-20"
          initial={
            transitions.previousStep == 5
              ? { x: 1000, opacity: 0 }
              : { y: -1000, opacity: 0 }
          }
          animate={{ x: 0, opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "anticipate",
            // delay: 0.2,
          }}
          key="62"
        >
          <motion.img
            src="/shawarma.png"
            alt=""
            style={{}}
            animate={{
              y: [0, 6, 3, 0],
              rotateZ: [0, 1, -0.5, 0],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
            className=" max-h-screen"
            key="621"
          />
        </motion.div>
      </div>
      <div className="flex-1"></div>
    </motion.div>
  );
};

export default Shawarma;
