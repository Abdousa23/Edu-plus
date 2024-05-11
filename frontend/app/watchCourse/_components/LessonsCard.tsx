import React, { useEffect } from "react";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import LinearProgress from "@mui/material/LinearProgress";
import Box from '@mui/material/Box';
import { useState } from "react";
import { openDB } from 'idb'
import Success from "@/app/_components/Success";
type LessonCard = {
  lesson: LessonType,
  setSelectedLesson: (lesson: LessonType) => {},
  selectedLesson: any
}
export default function LessonsCard({ lesson, setSelectedLesson, selectedLesson }: LessonCard) {
  const [videoUrl, setVideoUrl] = useState('')
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [showProgress, setShowProgress] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('Download complete successfully' as string)

  const downloadVideo = async () => {
    const response = await fetch(lesson?.videoUrl as string)

    if (!response.body) {
      throw Error('ReadableStream not yet supported in this browser.');
    }

    const contentLength = response.headers.get('content-length');
    if (!contentLength) {
      throw Error('Content Length not available.');
    }

    const totalLength = parseInt(contentLength, 10);
    let totalRead = 0;

    const reader = response.body.getReader();
    let chunks = [];

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      chunks.push(value);
      totalRead += value.length;

      const progress = Math.round((totalRead / totalLength) * 100);
      setDownloadProgress(progress);
    }

    const blob = new Blob(chunks, { type: 'video/mp4' });

    // const db = await openDB('VideosDb', 1,);
    const db = await openDB('VideosDb', 1, {
      upgrade(db) {
        db.createObjectStore('downloadedCourses')
      }
    })
    let lessonTitle = lesson?.title as string;
    const existingLesson = await db.get('downloadedCourses', lessonTitle);
    if (existingLesson) {
      if (existingLesson._id === lesson._id) {
        setSuccessMessage('Lesson already downloaded');
        // The lesson is already downloaded, no need to download it again
        return;
      }
    }
    if (existingLesson && existingLesson._id !== lesson._id) {
      let suffix = 1;
      while (await db.get('downloadedCourses', `${lessonTitle}(${suffix})`)) {
        suffix++;
      }
      lessonTitle = `${lessonTitle}(${suffix})`;
    }
    console.log(lesson.title)
    // const lessonWithVideo = { ...lesson, videoUrl: URL.createObjectURL(blob) };
    // await db.put('downloadedCourses', lessonWithVideo, lessonTitle);

    const lessonWithVideo = { ...lesson, videoBlob: blob }; // Store the Blob instead of the Blob URL
    await db.put('downloadedCourses', lessonWithVideo, lessonTitle);
  
    const url = URL.createObjectURL(blob);
    setVideoUrl(url);
  }
  useEffect(() => {
    if (downloadProgress > 0 && downloadProgress < 100) {
      setShowProgress(true)
    }
    if (downloadProgress === 100) {
      setShowProgress(false);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }
    console.log(lesson)
  }, [downloadProgress]);

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
          <button onClick={downloadVideo}>
            <DownloadForOfflineIcon className="text-green+" />
          </button>
        </div>
      </div>
      {
        showSuccessMessage ? <Success successMessage={successMessage} />
          : showProgress && (
            <Box sx={{ width: '100%' }}>
              <LinearProgress variant="determinate" color="success" value={downloadProgress} />
            </Box>
          )
      }
    </div>
  );
}
