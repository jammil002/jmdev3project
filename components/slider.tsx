import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import caroselImages from "../images/cImages";
import Image from "next/image";

const slider = () => {
  return (
    <div>
      <motion.div className="carousel cursor-grab overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0 }}
          className="inner-carousel flex"
        >
          <motion.div className="pointer-events-none">
            {caroselImages.map((image) => {
              return (
                <motion.div>
                  <Image
                    src={image}
                    height={"50"}
                    alt={"caroselImages"}
                    className="pointer-events-none"
                  ></Image>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default slider;
