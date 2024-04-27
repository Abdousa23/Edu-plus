'use client'
import React, { useEffect, useState } from 'react'
 import Navbar from '../_components/Navbar'
 import Footer from '../_components/Footer'
import { openDB } from 'idb'

export default function page() {
    const [videoUrl, setVideoUrl] = useState('')
    const [downloadProgress, setDownloadProgress] = useState(0)

    useEffect(() => {
        if(videoUrl != ''){
            loadVideo()
        }else{
            console.log("no video provided ")
        }
    }, []);

    const downloadVideo = async () => {
        const response = await fetch('https://res.cloudinary.com/demo/video/upload/vc_auto/v1417443899/dog.mp4')

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
                db.createObjectStore('videos')
            }
        })
        await db.put('videos', blob, 'dogVideo');

        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
    }

    const loadVideo = async () => {
        const db = await openDB('VideosDb', 1);
        const blob = await db.get('videos', 'dogVideo');

        if (blob) {
            const url = URL.createObjectURL(blob);
            console.log(url)
            setVideoUrl(url);
        } else {
            await downloadVideo();
        }
    };

    return (
        <div>
            <Navbar />
            <div className='border border-black '>
                <video width="560" height="315" controls key={videoUrl}>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <button className='p-4 m-4 bg-green+ rounded' onClick={downloadVideo}>Download video</button>
            <p>Download progress: {downloadProgress}%</p>
            <p>test</p>
            <Footer />
        </div>
    )
}