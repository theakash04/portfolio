import React from "react";
import EnterAnim from "../EnterAnim";


type ExpDataType = {
  role: string;
  startDate: string;
  endDate: string;
  company: string;
  type: string;
  location: string;
  points: string[];
}

const ExperiencesData: ExpDataType[] = [
  {
    role: "Frontend Developer",
    startDate: "Jul 2025",
    endDate: "",
    company: "PyxisBlu Solutions Pvt. Ltd.",
    type: "Internship",
    location: "Hybrid",
    points: [
      // "Built a company management platform for user and website control",
      // "Worked on backend access control (RBAC, PBAC, device/session limits)",
    ],
  }
]

export default function Experience() {
  return (
    <EnterAnim>
      <div className="flex flex-col items-start w-full gap-3">
        <h1 className="text-[#EEEEEE] font-medium">Experience</h1>

        {ExperiencesData.map((exp, idx) => (
          <div className="flex flex-col items-start gap-1 w-full" key={idx}>
            <div className="flex justify-between w-full text-[#EEEEEE] font-medium">
              <span>{exp.role}</span>
              <span className="text-[#B4B4B4] font-light">{exp.startDate} – {exp.endDate !== "" ? exp.endDate : "Present"}</span>
            </div>
            <span className="text-[#B4B4B4] text-sm font-light">
              {exp.company} · {exp.type} · {exp.location}
            </span>
            {exp.points.length > 0 &&
              <div className="border-l-4 border-[#6AB0F3] pl-4 mt-2 space-y-2 px-4 py-2 text-wrap max-w-md">
                {exp.points.map((point, idx) => (
                  <p key={idx} className="text-[#B4B4B4] text-sm font-semibold text-wrap">
                    {point}
                  </p>
                ))}
              </div>
            }
          </div>
        ))}
      </div>
    </EnterAnim>
  );
}
