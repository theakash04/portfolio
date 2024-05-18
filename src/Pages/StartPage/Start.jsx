import React from "react";
import cover from "../../assets/cover.png";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link, useLoaderData } from "react-router-dom";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

function Start() {
  const data = useLoaderData();

  const skills = [
    {
      skill: "html.svg",
      name: "html5",
    },
    {
      skill: "css.svg",
      name: "css3",
    },
    {
      skill: "js.svg",
      name: "javascript",
    },
    {
      skill: "react.svg",
      name: "react",
    },
    {
      skill: "tailwind.svg",
      name: "tailwind",
    },
    {
      skill: "redux.svg",
      name: "redux",
    },
    {
      skill: "git.svg",
      name: "git",
    },
    {
      skill: "linux.svg",
      name: "linux",
    },
    {
      skill: "Appwrite.svg",
      name: "Appwrite",
    },
    {
      skill: "mui.svg",
      name: "material UI",
    },
    {
      skill: "c.svg",
      name: "c",
    },
    {
      skill: "mongodb.svg",
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

          <div className="w-full h-12 flex items-center justify-center relative">
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
              <Button variant="contained" size="large">
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
              <div
                className={`py-3 flex flex-wrap items-center justify-center gap-3 px-3`}
              >
                {skills.map((skill, index) => (
                  <img
                    key={index}
                    src={"./SkillsLogos/" + skill.skill}
                    alt={skill.name}
                    title={skill.name}
                    className="transition-all cursor-pointer filter hover:drop-shadow-md hover:-translate-y-2 w-16"
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
