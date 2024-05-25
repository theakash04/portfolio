import React from "react";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <div className="w-full h-full flex items-center justify-center pb-3">
      <p className="font-semibold">
        Copyright &copy;{" "}
        <Link to={"https://github.com/theakash04"} target="blank" className="hover:underline transition-all text-blue-300 visited:text-violet-400">
          Akash kumar
        </Link>
      </p>
    </div>
  );
}

export default Copyright;
