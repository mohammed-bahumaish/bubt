import { useGesture } from "react-use-gesture";
import { useRef, useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clamp from "lodash/clamp";
import throttle from "lodash/throttle";
import ReactDom from "react-dom";

const Bubble = ({ props: { x, y, duration, color = "white" } }) => {
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
          y: scrollY - 50,
          transition: {
            ease: "linear",
            duration: duration * clamp(Math.random(), 0.5, 1),
          },
        }}
        className=" bottom-0 h-0 "
      >
        <motion.div
          animate={{ x: [0, 5, 0], transition: { repeat: Infinity } }}
          className="w-5 h-5 rounded-full"
          style={{ backgroundColor: color }}
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

export const pushBubble = ({ quantity, duration, color }) => {
  for (let index = 0; index < quantity; index++) {
    const bub = document.createElement("div");
    const container = document.getElementById("container");
    container?.appendChild(bub);
    ReactDom.render(
      <BubleMemoized
        props={{
          x: innerWidth * Math.random(),
          y: scrollY + innerHeight + 100,
          duration,
          color,
        }}
      />,
      bub
    );
    setTimeout(() => {
      bub?.remove();
    }, getRandomInt(2000, 4000));
  }
};

export const fastBubs = () => {
  pushBubble({
    quantity: 15,
    duration: 2,
  });
  pushBubble({
    quantity: 3,
    duration: 10,
  });
  setTimeout(() => {
    pushBubble({
      quantity: 10,
      duration: 3,
    });
  }, 500);
};
