'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface DetailMyPartImgProps {
  contributionImage: string[];
}

export default function DetailMyPartImg({
  contributionImage,
}: DetailMyPartImgProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const handelPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? contributionImage.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((next) =>
      next === contributionImage.length - 1 ? 0 : next + 1
    );
  };

  console.log(contributionImage);
  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
      <div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden'>
        <motion.div
          key={currentIndex}
          initial={{ x: direction > 0 ? 50 : -50, opacity: 0.6 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className='absolute inset-0'
        >
          <Image
            src={contributionImage[currentIndex]}
            alt={`내가 맡은 파트 이미지 ${currentIndex + 1}`}
            fill
            className='object-cover rounded-2xl'
          />
        </motion.div>
      </div>
      <div className='flex items-center gap-5'>
        <button onClick={handelPrev}>
          <ChevronLeft />
        </button>
        <span>
          {currentIndex + 1} / {contributionImage.length}
        </span>
        <button onClick={handleNext}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
