import React from "react";
import cover from "../../assets/cover.png";
import Avatar from "@mui/material/Avatar";
import Profile from "../../assets/Avtar.webp";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

function Start() {

  return (
    <div className="w-screen h-screen bg-[#ced4da] px-2">
      <div className="flex w-full overflow-auto py-10 items-center justify-center">
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
        </div>
      </div>
    </div>
  );
}

export default Start;
