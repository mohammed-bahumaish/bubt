import { motion } from "framer-motion";
import Link from "next/link";

const Header = ({ show }) => {
  return (
    <motion.div
      className="fixed top-9 w-full z-50"
      initial={{ y: -200 }}
      animate={{
        y: show ? 0 : 0 - 200,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
    >
      <div className="flex justify-around items-centers w-full font-extrabold text-xl">
        <div className="flex-1 text-center  font-extrabold lg:text-xl md:text-lg text-base">
          <Link href="/products">
            <a>PRODUCTS</a>
          </Link>
        </div>
        <div className="flex-1 text-center font-extrabold lg:text-xl md:text-lg text-base">
          <Link href="/franchise">
            <a>FRANCHISE</a>
          </Link>
        </div>
        <div className="flex-auto text-center">
          <motion.div
            className=" flex justify-center items-center flex-col"
            style={{ marginTop: -70 }}
          >
            <Link href="/">
              <a>
                <img src="/logo.svg" alt="" className="lg:w-44 w-32" />
                <p className="font-extrabold text-base -mt-9">by ASHAAN FOOD</p>
              </a>
            </Link>
          </motion.div>
        </div>
        <div className="flex-1 text-center font-extrabold lg:text-xl md:text-lg text-base">
          SWIGGY
        </div>
        <div className="flex-1 text-center font-extrabold lg:text-xl md:text-lg text-base">
          ZOMATO
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
