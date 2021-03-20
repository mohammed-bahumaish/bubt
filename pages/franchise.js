import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import { useGesture } from "react-use-gesture";

const Products = () => {
  const _window = useRef(null);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    _window.current = window;
  }, []);
  useGesture(
    {
      onWheel: ({ vxvy: [, vy], movement: [x, y] }) => {
        if (y > 125 && vy > 0) setShowHeader(false);
        else if (y < -125 && vy < 0) setShowHeader(true);
      },
    },
    {
      domTarget: _window,
    }
  );

  return (
    <div>
      <Header show={showHeader} />
      <div className="mt-56">kjsdklj</div>
    </div>
  );
};

export default Products;
