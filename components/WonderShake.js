import { motion, useCycle } from "framer-motion";
import { durations } from "../pages/index";
import { useEffect } from "react";

const WonderShake = ({ step, transitions }) => {
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
          className="text-gray-50 lg:text-8xl md:text-8xl text-7xl absolute z-20 font-extrabold"
          initial={
            transitions.previousStep == 2
              ? { x: 1000, opacity: 0 }
              : { x: -1000, opacity: 0 }
          }
          animate={{ x: -100, opacity: 1 }}
          transition={{
            duration: durations.titleDuration,
            delay: durations.titleDelay,
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
          className="cup"
          initial={
            transitions.previousStep == 2
              ? { x: 1000, opacity: 0 }
              : { x: -1000, opacity: 0 }
          }
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: durations.cupDuration,
            ease: "anticipate",
            delay: durations.cupDelay,
          }}
          key="32"
        >
          {typeStep == 1 ? (
            <Type title="BLACKBERRY" url="BLACKBERRY-min" />
          ) : typeStep == 2 ? (
            <Type title="BUTTER SCOTCH" url="BUTTER SCOTCH-min" />
          ) : typeStep == 3 ? (
            <Type title="CHOCOLATE" url="CHOCOLATE-min" />
          ) : typeStep == 4 ? (
            <Type title="KIWI" url="KIWI-min" />
          ) : typeStep == 5 ? (
            <Type title="STRAWBERY" url="STRAWBERY-min" />
          ) : (
            typeStep == 6 && <Type title="VANILA" url="VANILA-min" />
          )}
        </motion.div>
      </div>
      <div className="flex-1"></div>
    </motion.div>
  );
};

export default WonderShake;

const Type = ({ url, title }) => {
  return (
    <>
      <motion.img
        src={`/wonder/${url}.png`}
        alt=""
        animate={{
          y: [0, 6, 3, 0],
          rotateZ: [0, 1, -0.5, 0],
        }}
        transition={{ repeat: Infinity, duration: 5 }}
        className=" max-h-screen "
        key="421"
      />
      <p className="text-xl font-extrabold text-gray-50 m-3">{title}</p>
    </>
  );
};
