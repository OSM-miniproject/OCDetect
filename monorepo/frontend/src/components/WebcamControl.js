// frontend/VideoFeed.js
'use client';
import React, { useEffect, useRef } from 'react';

const WebcamControl = () => {
    const imgRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;
        img.src = 'http://localhost:5000/video_feed';
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">Meditation</h1>
            <div className="border-4 border-[#ff4b2b] p-2">
                <img ref={imgRef} alt="Video feed" className="block" />
            </div>
        </div>
    );
};

export default WebcamControl;