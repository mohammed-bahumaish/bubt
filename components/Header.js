import { motion } from "framer-motion";

const Header = ({ show }) => {
  return (
    <motion.div
      className="fixed top-9 w-full z-50"
      initial={{ y: -200 }}
      animate={{
        y: show ? 0 : 0 - 200,
        transition: { duration: 0.7, ease: "easeInOut", delay: 0.5 },
      }}
    >
      <div className="flex justify-around items-centers w-full font-extrabold text-xl">
        <div className="flex-1 text-center  font-extrabold lg:text-xl md:text-lg text-base">
          PRODUCTS
        </div>
        <div className="flex-1 text-center font-extrabold lg:text-xl md:text-lg text-base">
          ABOUT US
        </div>
        <div className="flex-auto text-center">
          <motion.div
            className=" flex justify-center items-center"
            style={{ marginTop: -70 }}
          >
            <img src="/logo.svg" alt="" className="lg:w-36 w-32" />
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
