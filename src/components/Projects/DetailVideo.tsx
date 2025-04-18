'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DetailVideo({ video }: { video: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const vidCurrent = videoRef.current;
    if (vidCurrent) {
      vidCurrent.currentTime = 0;
      vidCurrent.play().catch((err) => console.warn('자동 재생 실패:', err));
    }
    return () => {
      if (vidCurrent && !vidCurrent.paused) {
        vidCurrent.pause();
        vidCurrent.currentTime = 0;
      }
    };
  }, [video]);

  const togglePlayPause = () => {
    const vidCurrent = videoRef.current;
    if (!vidCurrent) return;

    if (vidCurrent.paused) {
      vidCurrent.play();
      setIsPlaying(true);
    } else {
      vidCurrent.pause();
      setIsPlaying(false);
    }
    setShowIcon(true);
    setTimeout(() => setShowIcon(false), 800);
  };

  return (
    <div className='relative'>
      <div className='relative w-full aspect-video rounded-2xl overflow-hidden'>
        <video
          src={video}
          ref={videoRef}
          className='absolute inset-0 w-full h-full object-cover cursor-pointer'
          muted
          playsInline
          preload='metadata'
          onClick={togglePlayPause}
        />
      </div>

      <AnimatePresence>
        {showIcon && (
          <motion.div
            key='icon'
            className='absolute inset-0 flex items-center justify-center'
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className='bg-[color:var(--highlight)] rounded-full p-2'>
              {isPlaying ? <Play /> : <Pause />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
