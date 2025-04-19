'use client';

import { motion, MotionProps } from 'framer-motion';
import { PropsWithChildren } from 'react';

interface FadeInUpProps extends MotionProps {
  delay?: number;
  className?: string;
}

export default function FadeInUp({
  children,
  delay = 0,
  className,
  ...rest
}: PropsWithChildren<FadeInUpProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: delay * 0.3, ease: 'easeOut' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
