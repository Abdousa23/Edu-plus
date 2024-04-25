import React from "react";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

export default function LessonsCard() {
  return (
    <div className="flex w-[85%] mx-auto justify-between border-2 rounded border-[#E9EAF0] h-[35px]">
      <p>Practice Design Like an Artist</p>
      <div className="flex justify-between">
        <AccessTimeRoundedIcon className="text-[#FF6636] text-[20px] mt-1 mb-1" />
        <h1 className="text-[#FF6636] ml-2 text-[16px]">51 m</h1>
      </div>
    </div>
  );
}
