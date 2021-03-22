import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 500 },
    show: { opacity: 1, x: 0 },
    transition: { duration: 0.2, ease: "anticipate" },
  };
  return (
    <motion.div
      className="fixed top-0 w-full z-50"
      animate={isOpen ? { height: "100%", backgroundColor: "white" } : {}}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between w-full px-6 font-extrabold text-xl  h-24">
          <div>
            <motion.div className=" ">
              <Link href="/mobile" className="flex-1 flex justify-start">
                <a className=" flex justify-center items-center flex-col m-4 -mt-6">
                  <img src="/logo.svg" alt="" className="w-20" />
                  <p className="font-extrabold text-xs -mt-5">by ASHAAN FOOD</p>
                </a>
              </Link>
            </motion.div>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="w-8 mr-6 mt-7">
              <img
                src="/menu.svg"
                alt=""
                onClick={() => setIsOpen((v) => !v)}
              />
            </div>
          </div>
        </div>
        <AnimatePresence exitBeforeEnter>
          {isOpen && (
            <motion.div
              className="flex flex-col justify-around h-1/2 p-10"
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <motion.div
                className="flex-1 text-center  font-extrabold text-xl"
                variants={item}
              >
                <Link href="/products">
                  <a>PRODUCTS</a>
                </Link>
              </motion.div>
              <motion.div
                className="flex-1 text-center font-extrabold text-xl"
                variants={item}
              >
                <Link href="/franchise">
                  <a>FRANCHISE</a>
                </Link>
              </motion.div>
              <motion.div
                className="flex-1 text-center font-extrabold text-xl"
                variants={item}
              >
                SWIGGY
              </motion.div>
              <motion.div
                className="flex-1 text-center font-extrabold text-xl"
                variants={item}
              >
                ZOMATO
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Header;
