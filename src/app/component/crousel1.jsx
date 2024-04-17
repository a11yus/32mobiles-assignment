"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Crousel1 = () => {
  return (
    <>
      <motion.div
        className="flex justify-center mt-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ dauration: 0.5 }}
      >
        <Carousel className="w-4xl max-w-2xl">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="h-60 w-full">
                    <CardContent className="flex aspect-square items-center justify-center -mt-48">
                      <div className="flex justify-between gap-10">
                        <Image
                          alt="banner"
                          src="https://www.skillindiadigital.gov.in/assets/new-ux-img/discovery-home/start-learn/learn-more-img2.svg"
                          height={180}
                          width={180}
                          sizes="(min-width: 808px) 50vw, 100vw"
                        />
                        <div>
                          <h4 className="text-2xl font-semibold">
                            Explore, learn and get Skilled satisfied
                          </h4>
                          <h4 className="text-md text-gray">
                            Find Skill courses around sector and location
                          </h4>
                          <Button className="text-white bg-orange-500 mt-4 rounded-lg">
                            LEARN MORE
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </>
  );
};

export default Crousel1;
