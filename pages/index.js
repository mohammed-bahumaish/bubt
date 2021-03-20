import { useGesture } from "react-use-gesture";
import { useRef, useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clamp from "lodash/clamp";
import throttle from "lodash/throttle";
import ReactDom from "react-dom";
import Header from "../components/Header";
import WonderShake from "../components/WonderShake";
import Intro from "../components/Intro";
import FruitFizz from "../components/FruitFizz";
import Waffles from "../components/Waffles";
import Shawarma from "../components/Shawarma";
import Footer from "../components/Footer";

export default function Home() {
  const _window = useRef(null);
  const div = useRef(null);
  const [transitions, setTransation] = useState({
    nextStep: 0,
    previousStep: 0,
  });
  const [introExited, setintroExited] = useState(false);
  const [step, setStep] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    _window.current = window;
    fastBubs();

    setInterval(() => {
      pushBubble({
        quantity: 2,
        duration: 7,
      });
    }, 1500);
  }, []);

  useGesture(
    {
      onWheel: ({ vxvy: [, vy], movement: [x, y] }) => {
        if (y > 125 && vy > 0 && step < 7) nextStep.current(1);
        else if (y < -125 && vy < 0 && step > 0) nextStep.current(-1);
      },
    },
    {
      domTarget: _window,
    }
  );

  const nextStep = useRef(
    throttle(
      (a) => {
        if (a == 1) {
          setStep((v) => {
            setTransation({ ...transitions, previousStep: v, nextStep: v + 1 });
            setShowHeader(false);

            return v;
          });
          setTimeout(() => {
            setStep((v) => {
              if ([0, 6].includes(v)) fastBubs();
              return v + 1;
            });
          }, 10);
        } else if (a == -1) {
          setStep((v) => {
            setTransation({ ...transitions, previousStep: v, nextStep: v - 1 });
            setShowHeader(true);

            return v;
          });
          setTimeout(() => {
            setStep((v) => {
              if ([2, 7].includes(v)) fastBubs();
              return v - 1;
            });
          }, 10);
        }
      },
      1200,
      { leading: true, trailing: false }
    )
  );

  return (
    <div
      className="overflow-hidden block relative m-0 p-0 z-0"
      ref={div}
      id="container"
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0.3337710084033614) 0%, rgba(89,199,115,0) 39%, rgba(0,0,0,0.3477766106442577) 100%)",
      }}
    >
      <Header show={showHeader} />
      <motion.div
        className="h-screen w-screen"
        animate={
          step == 0
            ? {
                backgroundColor: "rgb(0,255,235)",
              }
            : [1, 2].includes(step)
            ? {
                backgroundColor: "rgb(111,253,118)",
              }
            : step == 3
            ? {
                backgroundColor: "#f27d1d",
              }
            : step == 4
            ? {
                backgroundColor: "#ea1c39",
              }
            : step == 5
            ? {
                backgroundColor: "#f96400",
              }
            : step >= 6 && {
                backgroundColor: "#f5e0c3",
              }
        }
        transition={{ duration: 1 }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(89,199,115,0) 39%, rgba(0,0,0,0.15) 100%)",
        }}
      >
        <AnimatePresence exitBeforeEnter>
          {[0, 1, 2].includes(step) ? (
            <Intro
              step={step}
              key="012"
              transitions={transitions}
              setintroExited={setintroExited}
              introExited={introExited}
            />
          ) : step == 3 ? (
            <WonderShake step={step} key="3" transitions={transitions} />
          ) : step == 4 ? (
            <FruitFizz step={step} key="4" transitions={transitions} />
          ) : step == 5 ? (
            <Waffles step={step} key="5" transitions={transitions} />
          ) : step == 6 ? (
            <Shawarma step={step} key="6" transitions={transitions} />
          ) : (
            step == 7 && (
              <Footer step={step} key="7" transitions={transitions} />
            )
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

const Bubble = ({ props: { x, y, duration } }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: Math.random() * 10 }}
      id="bubble"
      className="absolute top-0 z-0"
    >
      <motion.div
        initial={{
          y,
          x: clamp(x, 25, innerWidth - 25),
          scale: getRandomInt(5, 15) / 10,
        }}
        animate={{
          y: -50,
          transition: {
            ease: "linear",
            duration: duration * clamp(Math.random(), 0.5, 1),
          },
        }}
        className=" bottom-0 h-0 "
      >
        <motion.div
          animate={{ x: [0, 5, 0], transition: { repeat: Infinity } }}
          className="w-5 h-5 bg-white rounded-full"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

const BubleMemoized = memo(Bubble);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const pushBubble = ({ quantity, duration }) => {
  for (let index = 0; index < quantity; index++) {
    const bub = document.createElement("div");
    const container = document.getElementById("container");
    container.appendChild(bub);
    ReactDom.render(
      <BubleMemoized
        props={{
          x: innerWidth * Math.random(),
          y: innerHeight + 100,
          duration,
        }}
      />,
      bub
    );
    setTimeout(() => {
      bub?.remove();
    }, getRandomInt(2000, 4000));
  }
};

const fastBubs = () => {
  pushBubble({
    quantity: 20,
    duration: 2,
  });
  pushBubble({
    quantity: 5,
    duration: 10,
  });
  setTimeout(() => {
    pushBubble({
      quantity: 10,
      duration: 3,
    });
  }, 500);
};
