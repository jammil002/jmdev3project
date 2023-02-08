import React from "react";
import { motion, MotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import caroselImages from "../images/cImages";
import Image from "next/image";

const ImageSlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div ref={carousel} className="cursor-grab overflow-hidden">
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }}>
          <motion.div className="pointer-events-none flex space-x-4 ">
            {caroselImages.map((image, index) => (
              <motion.div key={index}>
                <Image
                  src={image}
                  alt={"Why you should hire me"}
                  width={"700"}
                  className="min-w-[11rem]"
                ></Image>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageSlider;
