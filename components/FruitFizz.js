import { motion, useCycle } from "framer-motion";
import { useEffect } from "react";
import { durations } from "../pages/index";

const FruitFizz = ({ transitions }) => {
  const [typeStep, nextType] = useCycle(1, 2, 3, 4, 5);
  useEffect(() => {
    const interval = setInterval(() => {
      nextType();
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      className="h-full w-full flex justify-center items-center flex-col"
      transition={{ duration: durations.exitDuration, ease: "anticipate" }}
      key="fruitFizz"
      exit={
        transitions.nextStep == 3
          ? { x: 1000, opacity: 0 }
          : { x: -1000, opacity: 0 }
      }
    >
      <div className="flex-" style={{ flex: 3 }}></div>
      <div className="flex-auto w-screen justify-center items-center flex flex-row">
        <motion.div
          className="text-gray-50 lg:text-8xl md:text-8xl text-7xl absolute z-20 font-extrabold"
          initial={
            transitions.previousStep == 3
              ? { x: 1000, opacity: 0 }
              : { x: -1000, opacity: 0 }
          }
          animate={{ x: -100, opacity: 1, y: 0 }}
          transition={{
            duration: durations.titleDuration,
            delay: durations.titleDelay,
            ease: "anticipate",
          }}
          key="41"
        >
          <motion.p
            initial={{ rotateZ: -3 }}
            animate={{ rotateZ: [-7, -5, -7], y: [0, 2, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          >
            FRUIT FIZZ
          </motion.p>
        </motion.div>

        <motion.div
          // className="lg:w-1/4 w-80 md:w-80 z-10 max-h-screen md:ml-20"
          className="cup"
          initial={
            transitions.previousStep == 3
              ? { x: 1000, opacity: 0 }
              : { x: -1000, opacity: 0 }
          }
          animate={{ x: 0, opacity: 1, y: 0 }}
          transition={{
            duration: durations.cupDuration,
            ease: "anticipate",
            delay: durations.cupDelay,
          }}
          key="42"
        >
          {typeStep == 1 ? (
            <Type title="STRAWBERRY" url="STRAWBERRY" />
          ) : typeStep == 2 ? (
            <Type title="BLACKBERRY" url="BLACKBERRY" />
          ) : typeStep == 3 ? (
            <Type title="GREE APPLE SWARBERRY" url="GREE APPLE SWARBERRY" />
          ) : typeStep == 4 ? (
            <Type title="KIWI GREEN APPLE" url="KIWI GREEN APPLE" />
          ) : (
            typeStep == 5 && (
              <Type title="PEACH GREEN APPLE" url="PEACH GREEN APPLE" />
            )
          )}
        </motion.div>
      </div>
      <div className="flex-1"></div>
    </motion.div>
  );
};

export default FruitFizz;

const Type = ({ url, title }) => {
  return (
    <>
      <motion.img
        src={`/fizz/${url}.png`}
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
