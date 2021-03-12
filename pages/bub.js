import { useGesture } from "react-use-gesture";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useCycle,
  useViewportScroll,
} from "framer-motion";
import clamp from "lodash/clamp";

export default function Home({ dimensions }) {
  const _window = useRef(null);
  const div = useRef(null);
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState([0, 0, 0, 0]);

  useEffect(() => {
    _window.current = window;
  }, []);
  useGesture(
    {
      onScroll: ({ vxvy: [, vy], movement: [x, y] }) => {},
    },
    {
      domTarget: _window,
    }
  );
  return (
    <div className="overflow-hidden" ref={div} id="container">
      {show ? arr.map((i) => <Bubble dimensions={dimensions} />) : ""}

      <button onClick={() => setShow((v) => !v)}> show{show}</button>
      <button
        onClick={() =>
          setArr((v) => {
            const a = [...v];
            a.push(0);
            return a;
          })
        }
      >
        push{arr.length}
      </button>
      <div className="bg-yellow-600 h-screen w-screen"></div>
      <div className="bg-yellow-700 h-screen w-screen"></div>
      <div className="bg-yellow-800 h-screen w-screen"></div>
    </div>
  );
}

const Bubble = ({ dimensions }) => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    setX(getRandomInt(0, dimensions.width));
    setY(
      getRandomInt(
        (window.scrollY + dimensions.height) / 2,
        window.scrollY + dimensions.height + 100
      )
    );
    // console.log(y / 100 / 5);
    setTimeout(() => {
      ref.current?.remove();
    }, getRandomInt(2000, 10000));
  }, [dimensions.width]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="bubble"
    >
      {x ? (
        <motion.div
          initial={{ y, x: x, scale: getRandomInt(5, 15) / 10 }}
          animate={{
            y: -50,
            transition: {
              ease: "easeOut",
              duration: getRandomInt(2, 5) + y / 100 / 5,
            },
          }}
          className=" bottom-0 h-0"
        >
          <motion.div
            animate={{ x: [0, 10, 0], transition: { loop: Infinity } }}
            className="w-5 h-5 bg-white rounded-full"
          ></motion.div>
        </motion.div>
      ) : null}
    </motion.div>
  );
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
