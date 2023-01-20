import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import caroselImages from "../images/cImages";
import Image from "next/image";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const carosel = useRef(null);
  useEffect(() => {}, []);

  return (
    <div>
      <motion.div className="cursor-grab overflow-hidden" ref={carosel}>
        <motion.div drag="x" dragConstraints={{ right: 0 }}>
          <motion.div className="pointer-events-none flex space-x-4 ">
            {caroselImages.map((image, index) => (
              <motion.div key={index}>
                <Image
                  src={image}
                  alt={"Why you should hire me"}
                  width={"700"}
                  className="w-full h-auto"
                ></Image>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
