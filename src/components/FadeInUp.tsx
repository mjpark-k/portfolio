'use client';

import { motion, MotionProps } from 'framer-motion';
import { PropsWithChildren } from 'react';

interface FadeInUpProps extends MotionProps {
  delay?: number;
  duration?: number;
}

export default function FadeInUp({
  children,
  delay = 0,
  duration = 0.6,
  ...rest
}: PropsWithChildren<FadeInUpProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay: delay * 0.3, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
