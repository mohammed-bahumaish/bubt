import { motion, AnimatePresence } from "framer-motion";

const Intro = ({ step, transitions, introExited, setintroExited }) => {
  return (
    <motion.div
      className="h-full w-full flex justify-center items-center flex-col"
      exit={{ x: -1000, opacity: 0 }}
      transition={{ duration: 0.5, ease: "anticipate" }}
      key="milkShake"
      onAnimationComplete={() => {
        if (!introExited) setintroExited(true);
      }}
    >
      <div className="flex-" style={{ flex: 3 }}></div>
      <div className="flex-auto w-screen justify-center items-center flex flex-row">
        <AnimatePresence>
          {step == 1 && (
            <motion.p
              className="absolute left-5 w-96 z-10 lg:ml-16 "
              initial={{ x: -700 }}
              animate={{ x: 0 }}
              exit={{ x: -700 }}
              transition={{
                duration: 0.5,
                ease: "anticipate",
                // delay: 0.2,
              }}
              key="1"
            >
              MAYBE IT'S THE CHEWY, ADDICTIVE TEXTURE OF THE TAPIOCA BALLS, THE
              CREAMINESS OF THE MILKY TEA, OR THE SIMPLE SATISFACTION OF POPPING
              THE STRAW INTO THE SEALED PLASTIC TOP-PEOPLE CAN'T GET ENOUGH OF
              BUBBLE TEA (A.K.A BOBA).
            </motion.p>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {step == 2 && (
            <motion.div
              className="text-gray-900 lg:text-8xl md:text-7xl text-6xl absolute z-20 font-extrabold"
              initial={
                transitions.previousStep == 1
                  ? { x: 1000, opacity: 0 }
                  : { x: -1000, opacity: 0 }
              }
              animate={{ x: -100, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "anticipate",
                delay: transitions.previousStep == 3 ? 0.4 : 0.2,
              }}
              exit={{
                x: 1000,
                opacity: 0,
                transition: { delay: 0, duration: 0.5 },
              }}
              key="2"
            >
              <motion.p
                initial={{ rotateZ: -3 }}
                animate={{ rotateZ: [-7, -5, -7], y: [0, 2, 0] }}
                transition={{
                  duration: 10,
                  y: [],
                  repeat: Infinity,
                }}
              >
                BUB-T
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          className="lg:w-1/4 w-80 md:w-80 z-10 max-h-screen md:ml-20"
          initial={
            !introExited
              ? { y: 700 }
              : transitions.previousStep == 3
              ? { x: -1000, opacity: 0 }
              : { x: 1000, opacity: 0 }
          }
          animate={
            transitions.introInitial == true
              ? { y: step != 1 ? -20 : 0 }
              : { x: 0, y: step != 1 ? -20 : 0, opacity: 1 }
          }
          transition={{
            duration: 0.8,
            ease: "anticipate",
            // delay: 0.2,
          }}
          key="12"
        >
          <motion.img
            src="/bubt.png"
            alt=""
            style={{}}
            animate={{
              y: [0, 6, 3, 0],
              rotateZ: [0, 1, -0.5, 0],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
            className=" max-h-screen"
          />
        </motion.div>
      </div>
      <div className="flex-1"></div>
    </motion.div>
  );
};

export default Intro;
