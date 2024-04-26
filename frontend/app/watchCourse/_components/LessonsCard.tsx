import React from "react";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import  LinearProgress  from "@mui/material/LinearProgress";
import Box from '@mui/material/Box';
type LessonCard = {
  lesson: LessonType,
  setSelectedLesson:(lesson : LessonType)=>{},
  selectedLesson:any
}
export default function LessonsCard({ lesson , setSelectedLesson,selectedLesson }: LessonCard) {
  const progress = 0
  return (
    <div onClick={() => setSelectedLesson(lesson)} className={`flex flex-col w-full py-4 mx-auto justify-between items-center border-y rounded border-[#E9EAF0] ${selectedLesson === lesson ? 'bg-[#f5f7fa]' : ''}`}>
      <div className="flex w-full mx-auto justify-between items-center rounded">
      <div>
        <p>{lesson.title}</p>
        <p className="text-base text-[#6E7485]">{lesson.description}</p>
      </div>
      <div className="flex justify-between items-center">
       <div> <AccessTimeRoundedIcon className="text-[#FF6636] text-[20px] mt-1 mb-1" /></div>
        {/* <h1 className="text-[#FF6636] ml-2 text-[16px]">51 m</h1> */}
        <button>
          <DownloadForOfflineIcon className="text-green+" />
        </button>
      </div>
    </div>
    {
      progress > 0 ? 
      <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" color="success" value={progress} />
      </Box>
      : null
    }
      </div>
  );
}
