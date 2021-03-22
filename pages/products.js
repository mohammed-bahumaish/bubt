import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import { useGesture } from "react-use-gesture";
import { pushBubble } from "../components/Bub";
import Head from "next/head";

const Products = ({ dimensions }) => {
  const _window = useRef(null);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    _window.current = window;
    const interval = setInterval(() => {
      pushBubble({
        quantity: 2,
        duration: 7,
        color: "#7FBD26",
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  useGesture(
    {
      onWheel: ({ vxvy: [, vy], movement: [x, y] }) => {
        if (y > 1) setShowHeader(false);
        else if (y < -1) setShowHeader(true);
      },
    },
    {
      domTarget: _window,
    }
  );

  return (
    <div id="container">
      {dimensions.width > 768 ? <Header show={showHeader} /> : <MobileHeader />}
      <Head>
        <title>BUB-T by ASHAAN FOOD - Products</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
        <div className=" uppercase ">
          <div className="flex flex-row-reverse justify-between items-center ">
            <div className=" w-full flex justify-center items-center">
              <p style={{ maxWidth: 800 }}>
                BOBA (Bubble Tea) is the name given to the wide variety of
                refreshing fruit teas and milk teas served ice cold with natural
                tapioca balls that you suck up through a big straw!  The origins
                of BOBA tea are found in Taiwan, invented in the early 1980’s.
                India appreciate good taste, our counterparts in Taiwan were
                busy chewing and slurping the new craze that was already
                starting to take the country and the rest of the world by storm.
                The next step in tea-revolution had begun!
              </p>
            </div>
            {dimensions.width > 640 && (
              <motion.img
                className="md:w-96"
                src="/fizz/60.png"
                alt=""
                style={{ marginLeft: -150 }}
                animate={{
                  y: [0, 6, 3, 0],
                  rotateZ: [0, 1, -0.5, 0],
                }}
                transition={{ repeat: Infinity, duration: 5 }}
              />
            )}
          </div>

          <div className="flex flex-row justify-between items-center ">
            <div className=" w-full flex justify-center items-center">
              <div style={{ maxWidth: 800 }}>
                <p className="text-xl font-bold mt-5 uppercase">
                  Now mixed with
                </p>
                <p>
                  Natural Fruit Pulps mixed along with our Products BUB-T makes
                  them not only delicious, but also healthy and most enjoyable
                  drinks with promise to leave your varied taste-buds as
                  gratified. Being healthy is of prime importance in today's
                  world, we at Ashaan Foods understand this and thus our Fruit
                  based products which provides healthy and nutritive
                  lifestyle.. We are also committed in bringing you fruits in a
                  manifestation closest to the Quality that Nature's intended.
                </p>
              </div>
            </div>
            {dimensions.width > 640 && (
              <motion.img
                className="md:w-96"
                src="/fizz/41.png"
                alt=""
                style={{ marginRight: -150 }}
                animate={{
                  y: [0, 6, 3, 0],
                  rotateZ: [0, 1, -0.5, 0],
                }}
                transition={{ repeat: Infinity, duration: 5 }}
              />
            )}
          </div>
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
            <div class="flex flex-wrap justify-center">
              <GridNode
                bgColor="#64C31B"
                url="10"
                name="STRAWBERRY"
                content={
                  <DrinksContent
                    name="GREEN TEA		
                  "
                    price1="150"
                    price2="170"
                  />
                }
                mobile={dimensions.width <= 786}
              />
              <GridNode
                bgColor="#D7A549"
                url="11"
                content={
                  <DrinksContent
                    name="ORININAL INDIA TEA		
                "
                    price1="150"
                    price2="170"
                  />
                }
                mobile={dimensions.width <= 786}
              />
              <GridNode
                bgColor="#D6C13C"
                url="12"
                content={
                  <DrinksContent
                    name="GINGER TEA		
                "
                    price1="150"
                    price2="170"
                  />
                }
                mobile={dimensions.width <= 786}
              />
              <GridNode
                bgColor="#DC5100"
                url="13"
                content={
                  <DrinksContent
                    name="PEACH TEA		
                "
                    price1="150"
                    price2="170"
                  />
                }
                mobile={dimensions.width <= 786}
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#32C616"
                url="14"
                content={
                  <DrinksContent
                    name="GREEN APPLE TEA		
                "
                    price1="150"
                    price2="170"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#67CC19"
                url="15"
                content={
                  <DrinksContent
                    name="MINT TEA		
                "
                    price1="150"
                    price2="170"
                  />
                }
              />
            </div>
          </div>
          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              BLACK NATURAL TEA WITH BUB-T (BOBA) BLACK PEARL
            </p>
            <div class="flex flex-wrap justify-center">
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#64C31B"
                url="20"
                name="STRAWBERRY"
                content={
                  <DrinksContent
                    name="GREEN TEA		
                  "
                    price1="150"
                    price2="170"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#D7A549"
                url="21"
                content={
                  <DrinksContent
                    name="ORININAL INDIA TEA		
                "
                    price1="150"
                    price2="170"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#D6C13C"
                url="22"
                content={
                  <DrinksContent
                    name="GINGER LIME TEA		
                "
                    price1="150"
                    price2="170"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#DC5100"
                url="23"
                content={
                  <DrinksContent
                    name="PEACH TEA		
                "
                    price1="150"
                    price2="170"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#32C616"
                url="24"
                content={
                  <DrinksContent
                    name="GREEN APPLE TEA		
                "
                    price1="150"
                    price2="170"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#67CC19"
                url="25"
                content={
                  <DrinksContent
                    name="MINT TEA		
                "
                    price1="150"
                    price2="170"
                  />
                }
              />
            </div>
          </div>
          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              BUB-T WONDER MILKSHAKES WITH (BOBA) FRUIT PEARLS
            </p>
            <div class="flex flex-wrap justify-center">
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#F0F0F0"
                url="40"
                name="STRAWBERRY"
                content={
                  <DrinksContent
                    name="VANILA		
                  "
                    price1="150"
                    price2="170"
                    color="#3C3C3C"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#3D1503"
                url="41"
                name="CHOCOLATE"
                content={
                  <DrinksContent
                    name="CHOCOLATE
                  "
                    price1="150"
                    price2="170"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#671F2A"
                url="42"
                name="STR]AWBERRY"
                content={
                  <DrinksContent
                    name="STRAWBERRY				
                "
                    price1="150"
                    price2="170"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#74245E"
                url="43"
                name="STRAWBERRY"
                content={
                  <DrinksContent
                    name="BLACKBERRY				
                "
                    price1="150"
                    price2="170"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#3E530C"
                url="44"
                name="STRAWBERRY"
                content={
                  <DrinksContent
                    name="KIWI 		
                "
                    price1="150"
                    price2="170"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#93802F"
                url="45"
                name="STRAWBERRY"
                content={
                  <DrinksContent
                    name="BUTTER SCOTCH		
                "
                    price1="150"
                    price2="170"
                  />
                }
              />
            </div>
          </div>
          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              bub fizz with bubble fruit pearls
            </p>
            <div class="flex flex-wrap justify-center">
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#D22819"
                url="30"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="strawberry" price1="150" price2="170" />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#B016C8"
                url="31"
                name="STRAWBERRY"
                content={
                  <DrinksContent name="BLACKBERRY" price1="150" price2="170" />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#7CBD1A"
                url="32"
                name="STR]AWBERRY"
                content={
                  <DrinksContent
                    name="KIWI/GREEN APPLE"
                    price1="150"
                    price2="170"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#D85C31"
                url="33"
                name="STRAWBERRY"
                content={
                  <DrinksContent
                    name="GREEN APPLE /SWARBERRY"
                    price1="150"
                    price2="170"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#D7140A"
                url="34"
                name="STRAWBERRY"
                content={
                  <DrinksContent
                    name="PEACH/GREEN APPLE"
                    price1="150"
                    price2="170"
                  />
                }
              />
            </div>
          </div>

          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              MOJITO SPL WITH FRUIT PEARL
            </p>
            <div class="flex flex-wrap justify-center">
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#D2D2D2"
                url="50"
                name="STRAWBERRY"
                content={
                  <DrinksContent
                    name="ORIGINAL		
                  "
                    price1="170"
                    price2="190"
                    color="#4D5345"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#D2D2D2"
                url="51"
                name="STRAWBERRY"
                content={
                  <DrinksContent
                    name="MINT & LIME"
                    price1="170"
                    price2="190"
                    color="#4D5345"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#3E30D8"
                url="52"
                name="STRAWBERRY"
                content={
                  <DrinksContent
                    name="BLUE CURACAO"
                    price1="170"
                    price2="190"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#3E30D8"
                url="53"
                name="STRAWBERRY"
                content={
                  <DrinksContent
                    name="RED BULL MIX"
                    price1="200"
                    price2="250"
                  />
                }
              />
            </div>
          </div>

          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              WAFFLES WITH SAVORIES
            </p>
            <div class="flex flex-wrap justify-center ">
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#C37325"
                url="60"
                name="STRAWBERRY"
                content={<FoodContent name="PERI PERI  CHICKEN" price1="170" />}
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#E6CE80"
                url="61"
                name="STRAWBERRY"
                content={
                  <FoodContent
                    name="SCRAMMBLED EGG WITH CRUNCHY VEG"
                    price1="125"
                    color="#3C3C3C"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#6D760B"
                url="62"
                name="STRAWBERRY"
                content={
                  <FoodContent
                    name="PURE AND FUN VEGGY"
                    price1="150"
                    price2="170"
                  />
                }
              />
            </div>
          </div>

          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">
              WAFFLES ICE CREAM WITH HONEY BASE & CHOCOLATE SAUSE
            </p>
            <div class="flex flex-wrap justify-center ">
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#D1CBC0"
                url="70"
                name="STRAWBERRY"
                content={
                  <FoodContent name="VANILA" price1="150" color="#3C3C3C" />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#34251D"
                url="71"
                name="STRAWBERRY"
                content={<FoodContent name="CHOCOLATE" price1="150" />}
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#D22819"
                url="72"
                name="STRAWBERRY"
                content={<FoodContent name="STRAWBERRY" price1="150" />}
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#A36148"
                url="73"
                name="STRAWBERRY"
                content={
                  <FoodContent name="FRUIT SALAD & ICE CREAM" price1="150" />
                }
              />
            </div>
          </div>
          <div className="m-5 mt-16">
            <p className="uppercase text-xl font-extrabold">LIP SMACKERS</p>
            <div class="flex flex-wrap justify-center">
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#C18F3F"
                url="80"
                name="STRAWBERRY"
                content={
                  <FoodContent
                    name="SHAWARMA 2nos platter		
                  "
                    price1="180"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#AD4720"
                url="81"
                nXame="STRAWBERRY"
                content={
                  <FoodContent
                    name="CHICKEN GRILL BURGERS		
                "
                    price1="200"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#F69F33"
                url="82"
                name="STRAWBERRY"
                content={
                  <FoodContent
                    name="CRUNCHY CHICKEN BURGER
                "
                    price1="200"
                  />
                }
              />
              <GridNode
                mobile={dimensions.width <= 786}
                bgColor="#C87D06"
                url="83"
                name="STRAWBERRY"
                content={
                  <FoodContent
                    name="FRENCH FRIES		
                "
                    price1="80"
                  />
                }
              />
            </div>
          </div>
          <div className="h-60"></div>
        </div>
      </div>
    </div>
  );
};

export default Products;

const GridNode = ({ url, bgColor, content, mobile }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <motion.div
      className="w-60 h-60 relative m-10 mb-16"
      onHoverStart={() => setOnHover(true)}
      onHoverEnd={() => setOnHover(false)}
    >
      <motion.div
        className="w-full h-full z-0"
        transition={{ duration: 0.6, ease: "easeInOut" }}
        animate={onHover || mobile ? { scale: 1.2 } : { scale: 1 }}
      >
        <motion.img
          src={`/fizz/${url}.png`}
          animate={
            onHover || mobile ? { rotateZ: [0, -3, 0], y: [0, 5, 0] } : {}
          }
          transition={
            onHover || mobile
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
        initial={{ scale: 0 }}
        animate={onHover || mobile ? { scale: 1 } : { scale: 0 }}
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

const DrinksContent = ({ name, price1, price2, color = "#ffffff" }) => {
  return (
    <div className="text-gray-50 ">
      <p className="text-sm font-bold uppercase  mb-3" style={{ color: color }}>
        {name}
      </p>
      <div>
        <p>
          <p className="text-sm" style={{ color: color }}>
            🥤250ML {price1} RS
          </p>
        </p>
        <p>
          <p className="text-sm" style={{ color: color }}>
            🥤350ML {price2} RS
          </p>
        </p>
      </div>
    </div>
  );
};

const FoodContent = ({ name, price1, color = "#ffffff" }) => {
  return (
    <div className="text-gray-50 ">
      <p className="text-sm font-bold uppercase  mb-3" style={{ color: color }}>
        {name}
      </p>
      <div>
        <p>
          <p className="text-sm " style={{ color: color }}>
            {price1} RS
          </p>
        </p>
      </div>
    </div>
  );
};
