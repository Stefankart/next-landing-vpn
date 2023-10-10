import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";



const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
        <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
    Hey there! Struggling with China's Complex Legal System? 
  </h3>
  <p className="mt-4 text-black-500">
   <b>I understand the challenge. </b> 
    With over 18 years of experience, I'm your go-to expert for demystifying Chinese law. 😊👨‍⚖️<br/><br/>
    My deep understanding of both Chinese and Western cultures ensures I can assist you with tasks such as drafting contracts, composing legal letters, or simply answering your legal queries. 💼📝❓<br/><br/>
    Say goodbye to confusion and hello to legal clarity. Let's connect and find the solutions you need! 🤝💡
  </p>

          
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
