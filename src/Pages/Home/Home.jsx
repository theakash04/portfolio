import React from "react";
import CommingSoon from "../../components/CommingSoon";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function start(){
    navigate("/start")
  }
  return (
    <>
    <div className="w-full h-screen flex items-center justify-center flex-col gap-20">
      <CommingSoon />
      <Button onClick={start} variant="contained" size="medium" >see Start page</Button>
    </div>
    </>
  );
}

export default Home;
