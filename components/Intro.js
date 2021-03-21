import { motion, AnimatePresence, useCycle } from "framer-motion";
import { durations } from "../pages/index";
import { useEffect } from "react";

const Intro = ({ step, transitions, introExited, setintroExited }) => {
  const [typeStep, nextType] = useCycle(1, 2, 3, 4, 5, 6);
  useEffect(() => {
    const interval = setInterval(() => {
      nextType();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="h-full w-full flex justify-center items-center flex-col"
      exit={{ x: -1000, opacity: 0 }}
      transition={{ duration: durations.exitDuration, ease: "anticipate" }}
      key="milkShake"
    >
      <div className="flex-" style={{ flex: 3 }}></div>
      <div className="flex-auto w-screen justify-center items-center flex flex-row">
        <AnimatePresence>
          {step == 0 ? (
            <motion.div
              className="absolute left-5 w-96 z-10 lg:ml-16 "
              initial={{ y: 700 }}
              animate={{ y: 0 }}
              exit={{ y: 700 }}
              transition={{
                duration: 0.5,
                ease: "anticipate",
              }}
              key="1-1"
            >
              <p className="font-black text-3xl">BUB-T by ASHAAN FOOD</p>
              <p>
                Happy to present true, authentic Taiwanese BOBA (Bubble) Tea… In
                SOUTH INDIA.
              </p>
              <p className="font-bold text-lg mt-5">
                Bubble Tea is the name given to the wide variety of refreshing
                fruit teas and milk teas served ice cold with natural tapioca
                balls.
              </p>
              <p>
                Being healthy is of prime importance in today's world, we at
                Ashaan Foods understand this and thus our Fruit based products
                which provides healthy and nutritive lifestyle.
              </p>
            </motion.div>
          ) : (
            step == 1 && (
              <motion.p
                className="absolute left-5 w-96 z-10 lg:ml-16 "
                initial={
                  transitions.previousStep == 2 ? { x: -700 } : { y: -700 }
                }
                animate={{ y: 0, x: 0 }}
                exit={transitions.nextStep == 2 ? { x: -700 } : { y: -700 }}
                transition={{
                  duration: 0.5,
                  ease: "anticipate",
                }}
                key="1-2"
              >
                MAYBE IT'S THE CHEWY, ADDICTIVE TEXTURE OF THE TAPIOCA BALLS,
                THE CREAMINESS OF THE MILKY TEA, OR THE SIMPLE SATISFACTION OF
                POPPING THE STRAW INTO THE SEALED PLASTIC TOP-PEOPLE CAN'T GET
                ENOUGH OF BUBBLE TEA (A.K.A BOBA).
              </motion.p>
            )
          )}
        </AnimatePresence>
        <AnimatePresence>
          {step == 2 && (
            <motion.div
              className="text-gray-900 lg:text-8xl md:text-8xl text-7xl absolute z-20 font-extrabold"
              initial={
                transitions.previousStep == 1
                  ? { x: 1000, opacity: 0 }
                  : { x: -1000, opacity: 0 }
              }
              animate={{ x: -100, opacity: 1 }}
              transition={{
                duration: durations.titleDuration,
                ease: "anticipate",
                delay:
                  transitions.previousStep == 3 ? durations.titleDelay : 0.2,
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
          className="h-full w-full flex items-center"
          style={
            [0, 1].includes(step)
              ? { justifyContent: "flex-end" }
              : { justifyContent: "center" }
          }
        >
          <motion.div
            className="cup"
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
              duration: durations.cupDuration,
              ease: "anticipate",
              delay: durations.cupDelay,
            }}
            style={
              [0, 1].includes(step) ? { marginRight: 100 } : { marginRight: 0 }
            }
            key="12"
            layout
            onAnimationComplete={() => {
              if (!introExited) setintroExited(true);
            }}
          >
            {step < 2 ? (
              <Type title="." url="BUBt-min" />
            ) : typeStep == 1 ? (
              <Type title="BUB-T" url="BUBt-min" />
            ) : typeStep == 2 ? (
              <Type title="GINGER TEA" url="GINGER TEA-min" />
            ) : typeStep == 3 ? (
              <Type title="GREEN APPLE TEA" url="GREEN APPLE TEA-min" />
            ) : typeStep == 4 ? (
              <Type title="ORININAL INDIA TEA" url="ORININAL INDIA TEA-min" />
            ) : typeStep == 5 ? (
              <Type title="MINT TEA" url="MINT TEA-min" />
            ) : (
              typeStep == 6 && <Type title="PEACH TEA" url="PEACH TEA-min" />
            )}
          </motion.div>
        </motion.div>
      </div>
      <div className="flex-1"></div>
    </motion.div>
  );
};

export default Intro;

const Type = ({ url, title }) => {
  return (
    <>
      <motion.img
        src={`/bubt/${url}.png`}
        alt=""
        animate={{
          y: [0, 6, 3, 0],
          rotateZ: [0, 1, -0.5, 0],
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        className=" max-h-screen "
        key="421"
      />
      {/* <p className="text-xl font-extrabold text-gray-50 m-3">{title}</p> */}
    </>
  );
};
