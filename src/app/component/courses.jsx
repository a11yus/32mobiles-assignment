import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image";
import React from "react";

const Courses = async () => {
  const res = await fetch(`http://localhost:8081/courses/`);
  const data = await res.json();


  return (
    <>
      <h1 className="font-bold text-xl order-2 rounded-xl ml-4">Courses</h1>
      <div className="flex gap-6 ml-4 mb-6">
      <Input 
      className="w-[300px]"
      type="text" placeholder="search by course name" />
       <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select mode of class" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>mode</SelectLabel>
          <SelectItem value="online">Online</SelectItem>
          <SelectItem value="offline">Offline</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 mb-6">
      {data?.map((itm) => {
        return (
          <div 
          key={itm.id}>
            <div className="ml-4">
              <div className="hover:scale-105 transition duration-700 ease-in-out shadow-lg px-12 py-4 h-max w-96 rounded-xl">
                <h4 className="font-semibold text-2xl">{itm.course}</h4>

                <Image
                  className="mt-4"
                  alt="banner"
                  src="https://learn.microsoft.com/en-us/training/achievements/csharp-if-elseif-else.svg"
                  height={180}
                  width={180}
                  sizes="(min-width: 808px) 50vw, 100vw"
                />
                <div className="flex justify-between mt-3">
                  <h5 className="text-xl text-orange-500">{itm.mode}</h5>
                  <p className="text-sm text-gray-400 mt-2">00: 02 Hours</p>
                </div>
                <p className="mt-2 text-xs">{itm.description} </p>
              </div>
            </div>
          </div>
        );
      })}
      </div>
      
    </>
  );
};

export default Courses;
