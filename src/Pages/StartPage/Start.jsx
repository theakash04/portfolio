import React from "react";
import cover from "../../assets/cover.png";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link, useLoaderData } from "react-router-dom";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

function Start() {
  const data = useLoaderData();

  const skills = [
    {
      skill: "https://skillicons.dev/icons?i=html",
      name: "html5",
    },
    {
      skill: "https://skillicons.dev/icons?i=css",
      name: "css3",
    },
    {
      skill: "https://skillicons.dev/icons?i=js",
      name: "javascript",
    },
    {
      skill: "https://skillicons.dev/icons?i=react",
      name: "react",
    },
    {
      skill: "https://skillicons.dev/icons?i=tailwind",
      name: "tailwind",
    },
    {
      skill: "https://skillicons.dev/icons?i=redux",
      name: "redux",
    },
    {
      skill: "https://skillicons.dev/icons?i=git",
      name: "git",
    },
    {
      skill: "https://skillicons.dev/icons?i=linux",
      name: "linux",
    },
    {
      skill: "https://skillicons.dev/icons?i=appwrite",
      name: "Appwrite",
    },
    {
      skill: "https://skillicons.dev/icons?i=materialui",
      name: "material UI",
    },
    {
      skill: "https://skillicons.dev/icons?i=c",
      name: "c",
    },
    {
      skill: "https://skillicons.dev/icons?i=mongodb",
      name: "Mongo DB",
    },
  ];

  return (
    <div className="w-screen px-2">
      <div className="flex w-full overflow-auto py-5 items-center justify-center">
        <div className="w-[780px] flex items-center flex-col justify-center relative">
          <div>
            <img src={cover} className="w-full rounded-md shadow-sm" />
          </div>

          <div className="w-full h-12 flex items-center justify-center">
            <Avatar
              alt="Remy Sharp"
              src={data.avatar_url}
              sx={{ width: 100, height: 100 }}
              className="sm:-top-10 shadow-md"
            />
          </div>

          <div className="w-full pt-8 sm:pt-0">
            <span className="flex flex-col items-center justify-center">
              <p className="pt-3 font-bold text-3xl">{data.name}</p>
              <p className="text-black/55 font-semibold">Developer</p>
            </span>
          </div>

          <div className="flex gap-7 pt-5">
            <Link to={"/"}>
              <Button
                variant="contained"
                size="large"
              >
                Visit me
              </Button>
            </Link>
            <Link to={"https://www.twitter.com/theakash04/"} target="_blank">
              <Button
                variant="outlined"
                size="large"
                endIcon={<SendRoundedIcon />}
              >
                Message
              </Button>
            </Link>
          </div>

          <div className="py-10 flex gap-3 flex-col w-full items-center">
            <p className="font-bold text-2xl">Tech stack 🧑‍💻</p>
            <div className="w-full flex item-center justify-center">
              <div className={`py-3 flex flex-wrap items-center justify-center gap-3 px-3`}>
                {skills.map((skill, index) => (
                  <img
                    key={index}
                    src={skill.skill}
                    alt={skill.name}
                    title={skill.name}
                    className="transition-all cursor-pointer filter hover:drop-shadow-md hover:-translate-y-2"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
