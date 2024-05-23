import React from "react";
import cover from '../../assets/cover.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCardDesign from "./ProjectCardDesign";

function Crousel() {
  return (
    <div className="bg-gray-400 max-w-[1000px] w-full">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img src={cover} alt="" />
          </CarouselItem>
          {/* <CarouselItem>
            <ProjectCardDesign />
          </CarouselItem>
          <CarouselItem>Hello no 3</CarouselItem> */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Crousel;
