import React from "react";
import cover from "../../assets/cover.png";
import Avatar from "@mui/material/Avatar";
import Profile from "../../assets/Avtar.webp";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

function Start() {

  const skills = [
    {
      skill: "https://skillicons.dev/icons?i=html",
      name: "html5"
    },
    {
      skill: "https://skillicons.dev/icons?i=css",
      name: "css3"
    },
    {
      skill: "https://skillicons.dev/icons?i=js",
      name: "javascript"
    },
    {
      skill: "https://skillicons.dev/icons?i=react",
      name: "react"
    },
    {
      skill: "https://skillicons.dev/icons?i=tailwind",
      name: "tailwind"
    },
    {
      skill: "https://skillicons.dev/icons?i=redux",
      name: "redux"
    },
    {
      skill: "https://skillicons.dev/icons?i=git",
      name: "git"
    },
    {
      skill: "https://skillicons.dev/icons?i=linux",
      name: "linux"
    },
    {
      skill: "https://skillicons.dev/icons?i=appwrite",
      name: "Appwrite"
    },
    {
      skill: "https://skillicons.dev/icons?i=c",
      name: "c"
    },
  ]


  return (
    <div className="w-screen h-screen bg-[#ced4da] px-2">
      <div className="flex w-full overflow-auto py-5 items-center justify-center">
        <div className="w-[780px] flex items-center flex-col justify-center relative">
          <div>
            <img src={cover} className="w-full rounded-md shadow-sm" />
          </div>

          <div className="w-full h-12 flex items-center justify-center">
            <Avatar
              alt="Remy Sharp"
              src={Profile}
              sx={{ width: 100, height: 100 }}
              className="sm:-top-10 shadow-md"
            />
          </div>

          <div className="w-full pt-8 sm:pt-0">
            <span className="flex flex-col items-center justify-center">
              <p className="pt-3 font-bold text-3xl">Akash kumar</p>
              <p className="text-black/55 font-semibold">Frontend Developer</p>
            </span>
          </div>

          <div className="flex gap-7 pt-5">
            <Link to={"https://dexdevs.vercel.app/"} target="_blank">
              <Button variant="contained" size="large" startIcon={<AutoFixHighIcon />}>
                Visit me
              </Button>
            </Link>
            <Link to={"https://www.instagram.com/theakash04/"} target="_blank">
              <Button variant="outlined" size="large" endIcon={<SendRoundedIcon />}>Message</Button>
            </Link>
          </div>

          <div className="py-10 flex gap-3 flex-col w-full items-center"> 
              <p className="font-bold text-2xl">Tech stack 🧑‍💻</p>
              <div className={`py-3 flex flex-wrap px-5 w-full items-center justify-center gap-3`}>
                {skills.map((skill, index) => (
                  <img key={index} src={skill.skill} alt={skill.name} title={skill.name} className="hover:scale-110 transition-all cursor-pointer filter hover:drop-shadow-md" width={60}/>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
