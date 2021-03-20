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
      <div className="mt-52 m-10 text-center text-lg  flex flex-col justify-center items-center">
        <div className="m-5">
          <p className="text-5xl font-extrabold" style={{ color: "#7FBD26" }}>
            PAMPER YOUR TASTE BUDS
          </p>
        </div>
        <div className="m-5">
          <p className="text-2xl font-black uppercase">
            ASHAAN FOOD Under their brand Name BUB-T
          </p>
          <p className="text-xl font-bold uppercase">
            Happy to present true, authentic Taiwanese BOBA (Bubble) Tea… In
            SOUTH INDIA.
          </p>
        </div>
        <div className="w-3/4 uppercase">
          <p>
            BOBA (Bubble Tea) is the name given to the wide variety of
            refreshing fruit teas and milk teas served ice cold with natural
            tapioca balls that you suck up through a big straw!  The origins of
            BOBA tea are found in Taiwan, invented in the early 1980’s. India
            appreciate good taste, our counterparts in Taiwan were busy chewing
            and slurping the new craze that was already starting to take the
            country and the rest of the world by storm. The next step in
            tea-revolution had begun!
          </p>
          <p className="text-xl font-bold mt-5 uppercase">Now mixed with</p>
          <p>
            Natural Fruit Pulps mixed along with our Products BUB-T makes them
            not only delicious, but also healthy and most enjoyable drinks with
            promise to leave your varied taste-buds as gratified. Being healthy
            is of prime importance in today's world, we at Ashaan Foods
            understand this and thus our Fruit based products which provides
            healthy and nutritive lifestyle.. We are also committed in bringing
            you fruits in a manifestation closest to the Quality that Nature's
            intended.
          </p>
          <p className="text-xl font-bold m-5">
            SO WHY WAIT ORDER NOW AND GET DELIVERED THE BEST OF BUB-T
          </p>
        </div>
        <div className="mt-20">
          <div className="relative">
            <p
              className="text-5xl font-normal uppercase z-10"
              style={{ color: "#7FBD26" }}
            >
              discover our
            </p>
            <p
              className="text-6xl font-extrabold uppercase z-10"
              style={{ color: "#7FBD26" }}
            >
              products
            </p>
          </div>

          

          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
            MILK TEA WITH BUBBLE (BOBA) BLACK PEARL
            </p>
            <div class="grid grid-flow-row grid-cols-3 gap-4 ">
              <GridNode
                bgColor="#D22819"
                url="STRAWBERRY"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
            </div>
          </div>
          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              BLACK NATURAL TEA WITH BUB-T (BOBA) BLACK PEARL
            </p>
            <div class="grid grid-flow-row grid-cols-3 gap-4 ">
              <GridNode
                bgColor="#D22819"
                url="STRAWBERRY"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
            </div>
          </div>
          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              BUB-T WONDER MILKSHAKES WITH (BOBA) FRUIT PEARLS
            </p>
            <div class="grid grid-flow-row grid-cols-3 gap-4 ">
              <GridNode
                bgColor="#D22819"
                url="STRAWBERRY"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
            </div>
          </div>

          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              bub fizz with bubble fruit pearls
            </p>
            <div class="grid grid-flow-row grid-cols-3 gap-4 ">
              <GridNode
                bgColor="#D22819"
                url="STRAWBERRY"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode
                bgColor="#D22819"
                url="STRAWBERRY"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
            </div>
          </div>
          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              MOJITO SPL WITH FRUIT PEARL
            </p>
            <div class="grid grid-flow-row grid-cols-3 gap-4 ">
              <GridNode
                bgColor="#D22819"
                url="STRAWBERRY"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
            </div>
          </div>

          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              WAFFLES WITH SAVORIES
            </p>
            <div class="grid grid-flow-row grid-cols-3 gap-4 ">
              <GridNode
                bgColor="#D22819"
                url="STRAWBERRY"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode
                bgColor="#D22819"
                url="STRAWBERRY"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
            </div>
          </div>

          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">LIP SMACKERS</p>
            <div class="grid grid-flow-row grid-cols-3 gap-4 ">
              <GridNode
                bgColor="#D22819"
                url="STRAWBERRY"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
            </div>
          </div>

          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              WAFFLES ICE CREAM WITH HONEY BASE & CHOCOLATE SAUSE
            </p>
            <div class="grid grid-flow-row grid-cols-3 gap-4 ">
              <GridNode
                bgColor="#D22819"
                url="STRAWBERRY"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
              <GridNode bgColor="#D22819" url="STRAWBERRY" name="STRAWBERRY" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

const GridNode = ({ url, bgColor, content }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <motion.div
      className="w-60 h-60 relative m-10"
      onHoverStart={() => setOnHover(true)}
      onHoverEnd={() => setOnHover(false)}
    >
      <motion.div
        className="w-full h-full z-0"
        transition={{ duration: 0.6, ease: "easeInOut" }}
        animate={onHover ? { scale: 1.2 } : { scale: 1 }}
      >
        <motion.img
          src={`/fizz/${url}.png`}
          animate={onHover ? { rotateZ: [0, -3, 0], y: [0, 5, 0] } : {}}
          transition={
            onHover
              ? {
                  duration: 5,
                  repeat: Infinity,
                }
              : {}
          }
        />
      </motion.div>
      <motion.div
        className="w-40 h-40 absolute rounded-full origin-top z-10 "
        animate={onHover ? { scale: 1 } : { scale: 0 }}
        style={{ backgroundColor: bgColor, bottom: -100, right: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="h-full w-full flex justify-center items-center">
          {content}
        </div>
      </motion.div>
    </motion.div>
  );
};

const DrinksContent = ({ name, price1, price2 }) => {
  return (
    <div className="text-gray-50 ">
      <p className="text-sm font-bold uppercase  mb-3">{name}</p>
      <div>
        <p>
          <p className="text-sm">🥤250ML {price1} RS</p>
        </p>
        <p>
          <p className="text-sm">🥤350ML {price2} RS</p>
        </p>
      </div>
    </div>
  );
};
