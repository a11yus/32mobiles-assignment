"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const fadeAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'ease-in',
      delay: 0.6,
    },
  },
};

const CoursesTabs = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <Tabs
        defaultValue="Courses"
        className=" w-svm h-52 rounded-xl flex justify-center flex-col pt-0 -mt-20 bg-white px-4"
      >
        <motion.div
          variants={fadeAnimationVariants}
          initial="initial"
          whileInView="animate"
        >
          <TabsList>
            <TabsTrigger value="Skill Courses">
              <div className="flex justify-evenly gap-7 p-5">
                <h2 className="text-2xl font-medium text-gray">
                  Skill Courses
                </h2>
                <h1 className="text-4xl font-bold text-blue-500">586+</h1>
              </div>
            </TabsTrigger>
            <TabsTrigger value="Job Exchange">
              <div className="flex justify-evenly gap-7 p-5">
                <h2 className="text-2xl font-medium text-gray">Job Exchange</h2>
                <h1 className="text-4xl font-bold text-blue-500">9742+</h1>
              </div>
            </TabsTrigger>
            <TabsTrigger value="Skill Centre">
              {" "}
              <div className="flex justify-evenly gap-7 p-5">
                <h2 className="text-2xl font-medium text-gray">Skill Centre</h2>
                <h1 className="text-4xl font-bold text-blue-500">42645+</h1>
              </div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Skill Courses">Skill Courses</TabsContent>
          <TabsContent value="Job Exchange">Job Exchange</TabsContent>
          <TabsContent value="Skill Centre">Skill Centre</TabsContent>
        </motion.div>
      </Tabs>
    </div>
  );
};

export default CoursesTabs;
