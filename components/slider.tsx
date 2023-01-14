import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import caroselImages from "../images/cImages";
import Image from "next/image";

const Slider = () => {
  return (
    <div>
      <motion.div className="cursor-grab overflow-hidden">
        <motion.div drag="x" dragConstraints={{ right: 0 }}>
          <motion.div className="pointer-events-none flex">
            {caroselImages.map((image) => (
              <motion.div>
                <Image src={image} height={"500"} alt={"caroselImages"}></Image>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
