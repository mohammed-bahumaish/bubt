import { motion } from "framer-motion";

const FruitFizz = ({ step, transitions }) => {
  return (
    <motion.div
      className="h-full w-full flex justify-center items-center flex-col"
      transition={{ duration: 0.5, ease: "anticipate" }}
      key="Footer"
      exit={{ y: 1000, opacity: 0 }}
    >
      <motion.div
        className="w-36 h-36 bg-white rounded-full absolute top-1/2 left-1/2 z-30 flex justify-center items-center cursor-pointer"
        style={{ marginTop: "-3rem", marginLeft: "-4.5rem" }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3, ease: "anticipate" },
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: -1000, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 1, duration: 0.8, ease: "anticipate" },
        }}
        key="Footer1"
      >
        <p className="text-xl font-extrabold text-center ">CONTACT US</p>
      </motion.div>
      <div className=" flex-grow flex w-full" key="51footer">
        <div className="flex-1 ">
          <motion.div
            className="h-full w-full flex justify-center items-center"
            initial={{ y: 1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 0.8, ease: "anticipate" }}
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
              whileTap={{ scale: 0.9 }}
              key="Footer21"
            />
          </motion.div>
        </div>
        <div className="flex-1">
          <motion.div
            className="h-full w-full flex justify-center items-center"
            initial={{ y: 1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "anticipate" }}
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
          className="h-full w-full bg-white"
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "anticipate" }}
          key="Footer4"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default FruitFizz;
