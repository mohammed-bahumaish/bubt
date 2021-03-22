import { useGesture } from "react-use-gesture";
import { useRef, useState, useEffect, memo } from "react";
import {
  motion,
  AnimatePresence,
  useCycle,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { fastBubs, pushBubble } from "../components/Bub";
import Head from "next/head";
import { useRouter } from "next/router";
import MHeader from "../components/MobileHeader";

export default function Home({ dimensions }) {
  const _window = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useViewportScroll();
  const color = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "rgb(0,255,235)",
      "rgb(111,253,118)",
      "#f27d1d",
      "#f27d1d",
      "#ea1c39",
      "#ea1c39",
    ]
  );

  useEffect(() => {
    if (dimensions.width > 768) router.push("/");
  }, [dimensions.width]);

  useEffect(() => {
    _window.current = window;
    fastBubs();

    const interval = setInterval(() => {
      pushBubble({
        quantity: 2,
        duration: 7,
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  scrollYProgress.onChange((v) => {
    console.log(color.get());
  });

  console.log(color.get());
  return (
    <motion.div
      id="container"
      className="overflow-hidden block relative m-0 p-0 z-0 pt-28"
      style={{ backgroundColor: color }}
    >
      <Head>
        <title>BUB-T by ASHAAN FOODS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MHeader />
      <motion.div className="w-screen">
        <div className="m-10">
          <p className="font-black text-3xl">BUB-T by ASHAAN FOODS</p>
          <p>
            Happy to present true, authentic Taiwanese BOBA (Bubble) Tea… In
            SOUTH INDIA.
          </p>
          <p className="font-bold text-lg mt-5">
            Bubble Tea is the name given to the wide variety of refreshing fruit
            teas and milk teas served ice cold with natural tapioca balls.
          </p>
          <p>
            Being healthy is of prime importance in today's world, we at Ashaan
            Foods understand this and thus our Fruit based products which
            provides healthy and nutritive lifestyle.
          </p>
        </div>
        <div className="my-20 flex flex-col justify-center items-center">
          <div key="12" className="flex items-center justify-center">
            <BubtCup />
          </div>
          <motion.p
            initial={{ rotateZ: -3 }}
            animate={{ rotateZ: [-7, -5, -7], y: [0, 2, 0] }}
            transition={{
              duration: 10,
              y: [],
              repeat: Infinity,
            }}
            className="text-3xl text-center font-extrabold m-5"
          >
            BUB-T
          </motion.p>
          <p className="m-10">
            MAYBE IT'S THE CHEWY, ADDICTIVE TEXTURE OF THE TAPIOCA BALLS, THE
            CREAMINESS OF THE MILKY TEA, OR THE SIMPLE SATISFACTION OF POPPING
            THE STRAW INTO THE SEALED PLASTIC TOP-PEOPLE CAN'T GET ENOUGH OF
            BUBBLE TEA (A.K.A BOBA).
          </p>
        </div>

        <div className="my-20 flex flex-col justify-center items-center">
          <FruitFizzCup />
          <motion.p
            initial={{ rotateZ: -3 }}
            animate={{ rotateZ: [-7, -5, -7], y: [0, 2, 0] }}
            transition={{
              duration: 10,
              y: [],
              repeat: Infinity,
            }}
            className="text-3xl text-center font-extrabold m-5"
          >
            FRUIT FIZZ
          </motion.p>
        </div>
        <div className="my-20 flex flex-col justify-center items-center">
          <WonderShakeCup />
          <motion.p
            initial={{ rotateZ: -3 }}
            animate={{ rotateZ: [-7, -5, -7], y: [0, 2, 0] }}
            transition={{
              duration: 10,
              y: [],
              repeat: Infinity,
            }}
            className="text-3xl text-center font-extrabold m-5"
          >
            WONDER SHAKE
          </motion.p>
        </div>

        <div className="my-20 flex flex-col justify-center items-center">
          <motion.img
            src="/waffles.png"
            alt=""
            style={{}}
            animate={{
              y: [0, 6, 3, 0],
              rotateZ: [0, 1, -0.5, 0],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
            className=" h-80"
            key="521"
          />

          <motion.p
            initial={{ rotateZ: -3 }}
            animate={{ rotateZ: [-7, -5, -7], y: [0, 2, 0] }}
            transition={{
              duration: 10,
              y: [],
              repeat: Infinity,
            }}
            className="text-3xl text-center font-extrabold m-5"
          >
            WAFFLES
          </motion.p>
        </div>
        <div className="my-20 flex flex-col justify-center items-center">
          <motion.img
            src="/shawarma.png"
            alt=""
            style={{}}
            animate={{
              y: [0, 6, 3, 0],
              rotateZ: [0, 1, -0.5, 0],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
            className=" h-80"
            key="621"
          />
          <motion.p
            initial={{ rotateZ: -3 }}
            animate={{ rotateZ: [-7, -5, -7], y: [0, 2, 0] }}
            transition={{
              duration: 10,
              y: [],
              repeat: Infinity,
            }}
            className="text-3xl text-center font-extrabold m-5"
          >
            SHAWARMA
          </motion.p>
        </div>
        <div>
          <motion.div
            className="h-52 w-full flex justify-center items-center"
            style={{ backgroundColor: "#f5851d" }}
            key="Footer3"
          >
            <motion.img
              ani
              src="swiggy.png"
              alt=""
              className=" w-40 cursor-pointer"
              whileTap={{ scale: 0.9 }}
              key="Footer31"
            />
          </motion.div>
          <motion.div
            className="h-52 w-full flex justify-center items-center"
            style={{ backgroundColor: "#e23642" }}
            key="Footer2"
          >
            <motion.img
              ani
              src="zomato.png"
              alt=""
              className="w-40 cursor-pointer"
              whileTap={{ scale: 0.9 }}
              key="Footer21"
            />
          </motion.div>
          <motion.div
            className="h-52 w-full bg-white text-center flex flex-col justify-center items-center pb-20"
            key="Footer4"
          >
            <p className="mb-3 text-base font-bold mx-5">
              subscribe to out newsletter. you can always be up to date with our
              ashaanfood news!
            </p>
            <div className="w-full h-10 max-w-lg px-5">
              <input
                type="text"
                name="email"
                id="email"
                class="rounded-full w-full "
                placeholder="EMAIL"
              />
              <button className="bg-gray-900 rounded-full text-white w-52  ml-3 font-bold uppercase h-14 mt-5">
                subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const BubtType = ({ url, title }) => {
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
        className=" h-80"
        key="421"
      />
    </>
  );
};

const FruitFizzType = ({ url, title }) => {
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
        className=" h-80"
        key="421"
      />
    </>
  );
};

const FruitFizzCup = () => {
  const [typeStep, nextType] = useCycle(1, 2, 3, 4, 5);
  useEffect(() => {
    const interval = setInterval(() => {
      nextType();
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {typeStep == 1 ? (
        <FruitFizzType title="STRAWBERRY" url="STRAWBERRY" />
      ) : typeStep == 2 ? (
        <FruitFizzType title="BLACKBERRY" url="BLACKBERRY" />
      ) : typeStep == 3 ? (
        <FruitFizzType
          title="GREE APPLE SWARBERRY"
          url="GREE APPLE SWARBERRY"
        />
      ) : typeStep == 4 ? (
        <FruitFizzType title="KIWI GREEN APPLE" url="KIWI GREEN APPLE" />
      ) : (
        typeStep == 5 && (
          <FruitFizzType title="PEACH GREEN APPLE" url="PEACH GREEN APPLE" />
        )
      )}
    </>
  );
};

const BubtCup = () => {
  const [typeStep, nextType] = useCycle(1, 2, 3, 4, 5, 6);
  useEffect(() => {
    const interval = setInterval(() => {
      nextType();
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {typeStep == 1 ? (
        <BubtType title="BUB-T" url="BUBt-min" />
      ) : typeStep == 2 ? (
        <BubtType title="GINGER TEA" url="GINGER TEA-min" />
      ) : typeStep == 3 ? (
        <BubtType title="GREEN APPLE TEA" url="GREEN APPLE TEA-min" />
      ) : typeStep == 4 ? (
        <BubtType title="ORININAL INDIA TEA" url="ORININAL INDIA TEA-min" />
      ) : typeStep == 5 ? (
        <BubtType title="MINT TEA" url="MINT TEA-min" />
      ) : (
        typeStep == 6 && <BubtType title="PEACH TEA" url="PEACH TEA-min" />
      )}
    </>
  );
};

const WonderShakeType = ({ url, title }) => {
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
        className=" h-80"
        key="421"
      />
    </>
  );
};

const WonderShakeCup = () => {
  const [typeStep, nextType] = useCycle(1, 2, 3, 4, 5);
  useEffect(() => {
    const interval = setInterval(() => {
      nextType();
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {typeStep == 1 ? (
        <WonderShakeType title="BLACKBERRY" url="BLACKBERRY-min" />
      ) : typeStep == 2 ? (
        <WonderShakeType title="BUTTER SCOTCH" url="BUTTER SCOTCH-min" />
      ) : typeStep == 3 ? (
        <WonderShakeType title="CHOCOLATE" url="CHOCOLATE-min" />
      ) : typeStep == 4 ? (
        <WonderShakeType title="KIWI" url="KIWI-min" />
      ) : typeStep == 5 ? (
        <WonderShakeType title="STRAWBERY" url="STRAWBERY-min" />
      ) : (
        typeStep == 6 && <WonderShakeType title="VANILA" url="VANILA-min" />
      )}
    </>
  );
};
