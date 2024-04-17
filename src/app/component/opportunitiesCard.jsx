"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const OpportunitiesCard = () => {
  return (
    <>
    <div className="flex justify-end mb-6 mr-7">
    <Button className="bg-sky-50 rounded-full">
        <h4 className="text-blue-700">Opportunities near you</h4>
        <span className="ml-2 text-orange-400 text-xl">⟶</span>
      </Button>
    </div>
      
      <motion.div
        className="flex justify-evenly width-1/2 border-3 border-red-600"
        // variants={fadeAnimationVariants}
        // initial="initial"
        // whileInView="animate"
      >
        <motion.div className="hover:scale-105 transition duration-700 ease-in-out shadow-lg px-12 py-4 h-max w-96 rounded-xl"
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{dauration: 0.6}}
        >
        <h4 className="font-semibold text-2xl"> I want to learn !</h4>
        <h5 className="text-xl mt-3">Skill Courses</h5>
        <Image
        className="mt-4"
            alt="banner"
            src="https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/services/discovery-service-icon1.svg"
            height={180}
            width={180}
            sizes="(min-width: 808px) 50vw, 100vw"
          />
          <Input 
          className="mt-4 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500"
          type="input" 
          placeholder="Select Interest Area" />
          <p className="mt-2 text-xs">Interest areas like Automotive, Electronics etc. </p>
          <Button className="text-white bg-orange-200 mt-4 rounded-lg">FIND SKILL COURSES</Button>
        </motion.div>
    
        <motion.div 
        className="hover:scale-105 transition duration-700 ease-in-out shadow-lg px-12 py-4 h-max w-96 rounded-xl"
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{dauration: 0.5}}
        >
        <h4 className="font-semibold text-2xl"> I want to learn !</h4>
        <h5 className="text-xl mt-3">Skill Courses</h5>
        <Image
        className="mt-4"
            alt="banner"
            src="https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/services/discovery-service-icon1.svg"
            height={180}
            width={180}
            sizes="(min-width: 808px) 50vw, 100vw"
          />
          <Input 
          className="mt-4 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500"
          type="input" 
          placeholder="Select Interest Area" />
          <p className="mt-2 text-xs">Interest areas like Automotive, Electronics etc. </p>
          <Button className="text-white bg-orange-200 mt-4 rounded-lg">FIND SKILL COURSES</Button>
        </motion.div>

        <motion.div className="hover:scale-105 transition duration-700 ease-in-out shadow-lg px-12 py-4 h-max w-96 rounded-xl bg-orange-500"
         initial={{opacity: 0, x: 100}}
         whileInView={{opacity: 1, x: 0}}
         transition={{dauration: 0.6}}
        >
        <h4 className="font-semibold text-2xl"> I want to learn !</h4>
        <h5 className="text-xl mt-3">Skill Courses</h5>
        <Image
        className="mt-4"
            alt="banner"
            src="https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/services/service-img-4.svg"
            height={180}
            width={180}
            sizes="(min-width: 808px) 50vw, 100vw"
          />
          <Input 
          className="mt-4 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500"
          type="input" 
          placeholder="Select Interest Area" />
          <p className="mt-2 text-xs">Interest areas like Automotive, Electronics etc. </p>
          <Button className="text-white bg-orange-200 mt-4 rounded-lg">FIND SKILL COURSES</Button>
        </motion.div>

      </motion.div>
     
    </>
  )
}

export default OpportunitiesCard;