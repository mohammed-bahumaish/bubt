import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import { useGesture } from "react-use-gesture";
import Head from "next/head";
import MobileHeader from "../components/MobileHeader";

const Products = ({ dimensions }) => {
  const _window = useRef(null);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    _window.current = window;
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
    <div>
      {dimensions.width > 768 ? <Header show={showHeader} /> : <MobileHeader />}
      <Head>
        <title>BUB-T by ASHAAN FOOD - Franchise</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mt-56 m-10 overflow-hidden">
        <div className="text-center text-5xl uppercase relative ">
          <p className="z-30">be part</p>
          <p className="z-30">of our</p>
          <p className="font-black z-30">family</p>
          <p
            className="font-black absolute text-center lg:w-full text-gray-50 invisible lg:visible"
            style={{
              zIndex: -100,
              top: -10,
              fontSize: "10rem",
            }}
          >
            our family
          </p>
          <p className="text-xl font-semibold mt-3">
            Team "BUB-T" @ Ashaan Foods.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-36">
          <div className="m-3 p-10 rounded-3xl font-bold shadow-sm bg-gradient-to-r from-gray-50  to-gray-100 ">
            <p className="text-xl font-extrabold mb-5">
              Our Products Categories 
            </p>
            <ul>
              <li>BUB-T Iced Teas with Milk</li>
              <li>BUB-T Iced Teas Without Milk</li>
              <li>BUB-T Wonder Shake</li>
              <li>BUB-T Fizz</li>
              <li>BUB-T Special</li>
              <li>BUB-T Special</li>
              <li>Waffles with Savories</li>
              <li>Waffles Deserts</li>
              <li>LIP Smackers - Shawarma/Burgers/Fries</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-gray-50  to-gray-100 m-3 p-10 rounded-3xl font-bold shadow-sm">
            <p className="text-xl font-extrabold mb-5">Brand Support</p>
            <ul>
              <li>Back End</li>
              <li>Digital Marketing</li>
              <li>Training</li>
              <li>Design for the Outlet</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-gray-50  to-gray-100 m-3 p-10 rounded-3xl font-bold shadow-sm">
            <p className="text-xl font-extrabold mb-5">
              Why BUB-T  Franchise ?
            </p>
            <ul>
              <li>Excellent profit margin.</li>
              <li>Standard Operating Procedures in all aspects of business.</li>
              <li>Healthy and Delicious taste to increase the foot falls.</li>
              <li>
                Regular Research and development with public opinion to provide
                new products.
              </li>
              <li>Investment starting from just 6 lac, A unique concept.</li>
              <li>Regional and local marketing programs drive.</li>
              <li>Continuous training for operations enhanced performance.</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-gray-50  to-gray-100 m-3 p-10 rounded-3xl font-bold shadow-sm">
            <p className="text-xl font-extrabold mb-5">
              Advantages of Brand Franchisee
            </p>
            <ul>
              <li>Low Cost & High Return Business</li>
              <li>24*7 Brand Support</li>
              <li>Established brand</li>
              <li>We believe in 100% transparency</li>
              <li>Unlimited Growth Opportunity</li>
              <li>Quick ROI.</li>
              <li>Staff Training and support by Brand</li>
              <li>Help in Marketing</li>
              <li>Brand is Offering Franchise Network Across South India.</li>
              <li>
                Let's Join Hands With Most Profitable Leading Food and Beverage
                " BUB-T " at Ashaan Foods and Earn More Profit.
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="font-bold text-2xl mb-5">FRANCHISE APPLICATION</p>
          <p className="lg:text-lg text-base  ">
            SEND YOUR REQUEST TO JOIN OUR TEAM OF FRANCHISEES BY COMPLETING THIS
            SHORT FORM. WE WILL GET IN TOUCH WITH YOU SOON.
          </p>
          <div className="flex flex-col  mt-10 items-center">
            <input
              type="text"
              name="name"
              id="name"
              class="px-4 py-3 rounded-full w-full mt-4"
              placeholder="NAME"
            />
            <input
              type="text"
              name="email"
              id="email"
              class="px-4 py-3 rounded-full  w-full mt-4"
              placeholder="EMAIL"
            />
            <input
              type="text"
              name="message"
              id="message"
              class="px-4 py-3 rounded-full  w-full mt-4"
              placeholder="MESSAGE"
            />
            <input
              type="text"
              name="location"
              id="location"
              class="px-4 py-3 rounded-full  w-full mt-4"
              placeholder="INTENDED LOCATION"
            />

            <button className="bg-gray-900 rounded-full text-white w-52 h-16 m-10">
              SEND
            </button>
          </div>
        </div>
        <div className="w-full text-center my-16">
          <p>📩info@ashaanfoods.in</p>
          <p>🌐www.ashaanfoods.in</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
