import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowBigRightDash,
  GitForkIcon,
  Link2,
  Star,
  StarHalf,
} from "lucide-react";
import { Link } from "react-router-dom";

function ProjectCardDesign({ source, title, img, live, tech, about }) {
  return (
    <div className="bg-gray-100 flex justify-between items-center w-full h-full relative sm:py-0  py-5 sm:px-0 px-3 z-10">
      <div className="relative pr-20 h-full hidden sm:flex">
        <div className="bg-[#F17115]  w-[340px] h-[340px] rounded-tr-full rounded-br-full relative overflow-hidden">
          <img
            src={img}
            alt=""
            width={220}
            className="absolute -bottom-7 mx-auto translate-x-12 hover:-translate-y-5 transition-all ease-linear
          rounded-md"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col top-0 bottom-0 left-0 right-0 absolute -z-20">
        <div className="w-14 h-10 bg-red-500 absolute top-0 right-0 rounded-bl-full grid place-items-center">
          <Star className="animate-bounce" />
        </div>
        <div className="w-14 h-10 bg-red-500 absolute bottom-0 left-0 rounded-tr-full grid place-items-center sm:hidden">
          <Star className="animate-bounce" />
        </div>
      </div>
      <div className="w-full h-full grid  place-items-center px-2">
        <div className="grid gap-2 w-full">
          <div className="text-center pb-3 w-full">
            <p className="text-black text-5xl font-bold">{title}</p>
          </div>
          <div className="text-center text-md ">
            <p className="text-gray-700 font-semibold">{about}</p>
          </div>
          <div className="text-sm font-semibold pt-4 flex gap-2 justify-center items-center flex-wrap">
            <ArrowBigRightDash color="black"/>
            {tech &&
              tech.map((item, i) => (
                <div key={i} className="hover:bg-gray-200 px-2 py-1 rounded-md transition-all">
                  <p className="text-gray-600">
                    {item.toUpperCase()}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="flex sm:gap-5 gap-3 w-full justify-center items-center pt-4 flex-wrap">
          <Link to={`${source}`}>
            <Button className="gap-2">
              <GitForkIcon size={20} />
              Source Code
            </Button>
          </Link>

          {live && (
            <Link to={`${live}`}>
              <Button className="bg-gray-100 gap-2 hover:bg-gray-300 transition-all text-black">
                <Link2 />
                Live hosted
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCardDesign;
