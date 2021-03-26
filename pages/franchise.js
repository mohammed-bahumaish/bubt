import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import { useGesture } from "react-use-gesture";
import Head from "next/head";
import MobileHeader from "../components/MobileHeader";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const Products = ({ dimensions }) => {
  const _window = useRef(null);
  const [name, setName] = useState("");
  const [email, set] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [submited, setSubmited] = useState({ submited: false, error: false });

  useEffect(() => {
    _window.current = window;
  }, []);

  function handleEvent(e) {
    if (["ArrowDown"].includes(e.code)) {
      setShowHeader(false);
    }
    if (["ArrowUp"].includes(e.code)) {
      setShowHeader(true);
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleEvent);
    return () => document.removeEventListener("keydown", handleEvent);
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
        <title>BUB-T by ASHAAN FOODS - Franchise</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mt-56 m-4 overflow-hidden">
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
        </div>

        <div className="text-center mt-36">
          <p className="font-bold text-2xl mb-5">FRANCHISE APPLICATION</p>
          <p className="lg:text-lg text-base  ">
            SEND YOUR REQUEST TO JOIN OUR TEAM OF FRANCHISEES BY COMPLETING THIS
            SHORT FORM. WE WILL GET IN TOUCH WITH YOU SOON.
          </p>
          <Formik
            initialValues={{ name: "", email: "", message: "", location: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Required";
              }
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(async () => {
                await axios
                  .post("https://bubt-ashaanfood.vercel.app/api/sendgrid", {
                    subject: "new franchise application Submited",
                    text: `
                  NAME:${values.name},<br/>
                  EMAIL:${values.email},<br/>
                  MESSAGE:${values.message},<br/>
                  INTENDED LOCATION:${values.location}<br/>
                  `,
                  })
                  .then(function (response) {
                    console.log(response);
                    setSubmited((v) => ({ ...v, submited: true }));
                  })
                  .catch(function (error) {
                    console.log(error);
                    setSubmited((v) => ({ ...v, error: true }));
                  });
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col justify-center items-center">
                <Field
                  type="text"
                  name="name"
                  class="px-4 py-3 rounded-full max-w-2xl  w-full mt-4"
                  placeholder="NAME"
                />
                <ErrorMessage name="name" component="div" />

                <Field
                  type="email"
                  name="email"
                  class="px-4 py-3 rounded-full max-w-2xl  w-full mt-4"
                  placeholder="EMAIL"
                />
                <ErrorMessage name="email" component="div" />
                <Field
                  type="text"
                  name="message"
                  class="px-4 py-3 rounded-full max-w-2xl  w-full mt-4"
                  placeholder="MESSAGE"
                />
                <ErrorMessage name="message" component="div" />
                <Field
                  type="text"
                  name="location"
                  class="px-4 py-3 rounded-full max-w-2xl  w-full mt-4"
                  placeholder="INTENDED LOCATION"
                />
                <ErrorMessage name="location" component="div" />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gray-900 rounded-full text-white w-52 h-16 m-10"
                >
                  Submit
                </button>
                {submited.error && (
                  <p className="text-red-700">
                    someting went wrong! please try again 🙁
                  </p>
                )}
                {submited.submited && (
                  <p className="text-green-700">application submited 😄</p>
                )}
              </Form>
            )}
          </Formik>
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

        <a
          className="flex justify-center md:m-20 cursor-pointer"
          href="/franchise-details.pdf"
        >
          <span className="font-semibold md:text-lg text-sm">
            Franchise start up cost
          </span>

          <img src="/file.svg" width={30} alt="" className="ml-1" />
        </a>

        <div className="w-full text-center my-16">
          <p>📩info@ashaanfoods.in</p>
          <p>🌐www.ashaanfoods.in</p>
          <p>📞+917406743743</p>
          <p className="text-xl font-semibold mt-3">
            Team "BUB-T" @ Ashaan Foods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;

async function postData(url, data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}
