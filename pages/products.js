import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import { useGesture } from "react-use-gesture";
import {pushBubble} from '../components/Bub'

const Products = () => {
  const _window = useRef(null);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    _window.current = window;
   const interval = setInterval(() => {
      pushBubble({
        quantity: 2,
        duration: 7,
        color:"#7FBD26"
      });
    }, 1500);
    return ()=>clearInterval(interval)
  }, []);
  useGesture(
    {
      onWheel: ({ vxvy: [, vy], movement: [x, y] }) => {
        if (y >1) setShowHeader(false);
        else if (y < -1) setShowHeader(true);
      },
    },
    {
      domTarget: _window,
    }
  );

  return (
    <div id="container">
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
                bgColor="#64C31B"
                url="10"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="GREEN TEA		
                  " price1="150" price2="170" />
                }
              />
              <GridNode bgColor="#D7A549" url="11" 
              content={
                <DrinksContent name="ORININAL INDIA TEA		
                " price1="150" price2="170" />
              } />
              <GridNode bgColor="#D6C13C" url="12"  
              content={
                <DrinksContent name="GINGER TEA		
                " price1="150" price2="170" />
              }/>
              <GridNode bgColor="#DC5100" url="13"  
              content={
                <DrinksContent name="PEACH TEA		
                " price1="150" price2="170" />
              }/>
              <GridNode bgColor="#32C616" url="14"  
              content={
                <DrinksContent name="GREEN APPLE TEA		
                " price1="150" price2="170" />
              }/>
              <GridNode bgColor="#67CC19" url="15"  
              content={
                <DrinksContent name="MINT TEA		
                " price1="150" price2="170" />
              }/>
            </div>
          </div>
          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              BLACK NATURAL TEA WITH BUB-T (BOBA) BLACK PEARL
            </p>
            <div class="grid grid-flow-row grid-cols-3 gap-4 ">
              <GridNode
                bgColor="#64C31B"
                url="20"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="GREEN TEA		
                  " price1="150" price2="170" />
                }
              />
              <GridNode bgColor="#D7A549" url="21" 
              content={
                <DrinksContent name="ORININAL INDIA TEA		
                " price1="150" price2="170" />
              } />
              <GridNode bgColor="#D6C13C" url="22"  
              content={
                <DrinksContent name="GINGER TEA		
                " price1="150" price2="170" />
              }/>
              <GridNode bgColor="#DC5100" url="23"  
              content={
                <DrinksContent name="PEACH TEA		
                " price1="150" price2="170" />
              }/>
              <GridNode bgColor="#32C616" url="24"  
              content={
                <DrinksContent name="GREEN APPLE TEA		
                " price1="150" price2="170" />
              }/>
              <GridNode bgColor="#67CC19" url="25"  
              content={
                <DrinksContent name="MINT TEA		
                " price1="150" price2="170" />
              }/>
            </div>
          </div>
          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
            BUB-T WONDER MILKSHAKES WITH  (BOBA) FRUIT PEARLS 
            </p>
            <div class="grid grid-flow-row grid-cols-3 gap-4 ">
              <GridNode
                bgColor="#D22819"
                url="40"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode
                bgColor="#B016C8"
                url="41"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode bgColor="#7CBD1A" url="42" name="STR]AWBERRY" />
              <GridNode bgColor="#D85C31" url="43" name="STRAWBERRY" />
              <GridNode bgColor="#D7140A" url="44" name="STRAWBERRY" />
              <GridNode bgColor="#D7140A" url="45" name="STRAWBERRY" />

            </div>
          </div>
          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              bub fizz with bubble fruit pearls
            </p>
            <div class="grid grid-flow-row grid-cols-3 gap-4 ">
              <GridNode
                bgColor="#D22819"
                url="30"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode
                bgColor="#B016C8"
                url="31"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode bgColor="#7CBD1A" url="32" name="STR]AWBERRY" />
              <GridNode bgColor="#D85C31" url="33" name="STRAWBERRY" />
              <GridNode bgColor="#D7140A" url="34" name="STRAWBERRY" />
            </div>
          </div>

          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              MOJITO SPL WITH FRUIT PEARL
            </p>
            <div class="grid grid-flow-row grid-cols-3 gap-4 ">
              <GridNode
                bgColor="#D2D2D2"
                url="50"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" color = "#4D5345" />
                }
              />
              <GridNode bgColor="#D2D2D2" url="51" name="STRAWBERRY" />
              <GridNode bgColor="#3E30D8" url="52" name="STRAWBERRY" />
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

const DrinksContent = ({ name, price1, price2 ,color = "#ffffff" }) => {
  return (
    <div className="text-gray-50 ">
      <p className="text-sm font-bold uppercase  mb-3"
      style={{ color: color }}
      >{name}
      </p>
      <div>
        <p>
          <p className="text-sm"
          style={{ color: color }}
          >🥤250ML {price1} RS
          </p>
        </p>
        <p>
          <p className="text-sm"
          style={{ color: color}}
          >🥤350ML {price2} RSX
          </p>
        </p>
      </div>
    </div>
  );
};
