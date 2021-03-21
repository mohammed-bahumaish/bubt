import "../styles/globals.css";
import { useState, useEffect } from "react";

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function MyApp({ Component, pageProps }) {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 100);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return <Component {...pageProps} dimensions={dimensions} />;
}

export default MyApp;
