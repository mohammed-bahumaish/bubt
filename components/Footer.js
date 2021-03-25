import { motion } from "framer-motion";
import { durations } from "../pages/index";
import Link from "next/link";
import { memo, useState } from "react";
import axios from "axios";

const FruitFizz = ({ step, transitions }) => {
  const [email, setEmail] = useState("");
  const [submited, setSubmited] = useState({ submited: false, error: false });

  return (
    <motion.div
      className="h-full w-full flex justify-center items-center flex-col"
      transition={{ duration: 0.2 }}
      key="Footer"
      exit={{ y: 100, opacity: 0 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link href="/franchise">
        <a>
          <motion.div
            className="w-36 h-36 bg-white rounded-full absolute top-1/2 left-1/2 z-30 flex justify-center items-center cursor-pointer"
            style={{ marginTop: "-3rem", marginLeft: "-4.5rem" }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3, ease: "anticipate" },
            }}
            whileTap={{ scale: 1 }}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.2, duration: 0.2, ease: "anticipate" },
            }}
            key="Footer1"
          >
            <p className="text-xl font-extrabold text-center ">CONTACT US</p>
          </motion.div>
        </a>
      </Link>

      <div className=" flex-grow flex w-full" key="51footer">
        <div className="flex-1 ">
          <motion.div
            className="h-full w-full flex justify-center items-center"
            style={{ backgroundColor: "#e23642" }}
            key="Footer2"
          >
            <motion.img
              ani
              src="zomato.png"
              alt=""
              className="lg:w-72 md:w-64 w-44 cursor-pointer"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3, ease: "anticipate" },
              }}
              whileTap={{ scale: 1 }}
              key="Footer21"
            />
          </motion.div>
        </div>
        <div className="flex-1">
          <motion.div
            className="h-full w-full flex justify-center items-center"
            style={{ backgroundColor: "#f5851d" }}
            key="Footer3"
          >
            <motion.img
              ani
              src="swiggy.png"
              alt=""
              className="lg:w-72 md:w-64 w-44 cursor-pointer"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3, ease: "anticipate" },
              }}
              whileTap={{ scale: 0.9 }}
              key="Footer31"
            />
          </motion.div>
        </div>
      </div>
      <div className="h-36 w-full" key="52footer">
        <motion.div
          className="h-full w-full bg-white text-center flex flex-col justify-center items-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "anticipate" }}
          key="Footer4"
        >
          <p className="mb-3 text-lg font-bold">
            subscribe to our newsletter. you can always be up to date with our
            ashaanfood news!
          </p>
          <div className="flex w-96 h-10">
            <input
              type="text"
              name="email"
              id="email"
              class="rounded-full  w-full"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-gray-900 rounded-full text-white w-52  ml-3 font-bold uppercase"
              onClick={async () => {
                await axios
                  .post("https://bubt-ashaanfood.vercel.app/api/sendgrid", {
                    subject: "new letter subscription",
                    text: `
               EMAIL:${email}
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
              }}
            >
              subscribe
            </button>
          </div>
          {submited.error && (
            <p className="text-red-700">
              someting went wrong! please try again 🙁
            </p>
          )}
          {submited.submited && <p className="text-green-700">submited 😄</p>}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default memo(FruitFizz);
