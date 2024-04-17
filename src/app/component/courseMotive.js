"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "ease-in-out",
      delay: 1,
    },
  },
};


const CourseMotive = () => {
  return (
    <>
      <h1 className="font-bold text-2xl text-center mb-4">
        Building a Skilled India
      </h1>
      <motion.div
        className="flex justify-evenly width-1/2 border-3 border-red-600"
        variants={fadeAnimationVariants}
        initial="initial"
        whileInView="animate"
      >
        <div className="hover:scale-105 transition duration-700 ease-in-out">
          <Image
            alt="banner"
            src="https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/start-learn/citizen-centric.svg"
            height={100}
            width={100}
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              width: "100%",
            }}
          />
          <div className="flex-col text-center mt-4 justify-center">
            <h4 className="font-semibold text-2xl">Citizen Centric</h4>
            <p className="text-wrap w-60 text-sm text-slate-700 ml-6">
              Designed to meet the skilling needs of India’s diverse and
              aspirational population
            </p>
          </div>
        </div>

        <div className="hover:scale-105 transition duration-700 ease-in-out">
          <Image
            alt="banner"
            src="https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/start-learn/career-focussed.svg"
            height={100}
            width={100}
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              width: "100%",
            }}
          />
          <div className="flex-col text-center mt-4 justify-center">
            <h4 className="font-semibold text-2xl">Career Focussed</h4>
            <p className="text-wrap w-60 text-sm text-slate-700 ml-6">
              Relevant skill courses, certification, jobs and apprenticeships
            </p>
          </div>
        </div>

        <div className="hover:scale-105 transition duration-700 ease-in-out">
          <Image
            alt="banner"
            src="https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/start-learn/multilingual.svg"
            height={100}
            width={100}
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              width: "100%",
            }}
          />
          <div className="flex-col text-center mt-4 justify-center">
            <h4 className="font-semibold text-2xl">Multilingual</h4>
            <p className="text-wrap w-52 text-sm text-slate-700 ml-6">
              Explore Skill India Digital Hub in Multiple Indian languages
            </p>
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center mt-4 hover:scale-105 transition duration-700 ease-in-out">
        <Button className="text-white bg-orange-600">REGISTER</Button>
      </div>
    </>
  );
};

export default CourseMotive;
