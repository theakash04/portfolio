import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCardDesign from "./ProjectCardDesign";
import img2 from "../../assets/ProjectImg/DoBlogs.png";

function Crousel() {
  const projects = [
    {
      Title: "Do Blogs",
      source: "https://github.com/theakash04/Do-blogs",
      img: img2,
      about: "Do-Blogs is a ReactJs project using Appwrite for the backend, featuring user authentication, CRUD operations on posts, a user-friendly interface, and responsive design.",
      live: "https://doblogs.vercel.app/",
      tech: ['Vite ReactJS','Tailwind CSS', 'MUI', 'Appwrite', ]
    },
  ];

  return (
    <div className="w-full h-full shadow-sm">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {projects.map((project, i) => (
            <CarouselItem key={i}>
              <ProjectCardDesign source={project.source} img={project.img} title={project.Title} about={project.about} live={project.live} tech={project.tech}/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Crousel;
