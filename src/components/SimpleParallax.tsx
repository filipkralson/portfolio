'use client';

import React, { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SimpleParallax({
  color,
  children,
}: {
  color: string;
  children: ReactNode;
}) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.4]);

  return (
    <motion.div
      style={{
        scale,
      }}
      ref={targetRef}
      className={`md:h-[125vh] min-h-screen ${color} max-w-screen`}>
      <motion.div
        style={{
          opacity,
        }}
        className="flex md:h-3/4 w-full flex-col items-center justify-center overflow-hidden">
        <div className="m-10">{children}</div>
      </motion.div>
    </motion.div>
  );
}
