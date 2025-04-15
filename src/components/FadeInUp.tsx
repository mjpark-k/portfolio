'use client';

import { motion, MotionProps } from 'framer-motion';
import { PropsWithChildren } from 'react';

interface FadeInUpProps extends MotionProps {
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeInUp({
  children,
  delay = 0,
  duration = 1,
  className,
  ...rest
}: PropsWithChildren<FadeInUpProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay: delay * 0.5, ease: 'easeOut' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
