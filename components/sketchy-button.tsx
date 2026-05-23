'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface SketchyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function SketchyButton({ children, onClick, className = '' }: SketchyButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-sketch-900 shadow-sketch border-hand border-sketch-900 ${className}`}
      whileHover={{
        rotate: [0, 0.8, -0.7, 0.4, 0],
        skewX: [0, 0.8, -0.8, 0.5, 0],
        skewY: [0, -0.5, 0.5, -0.3, 0],
        scale: 1.02,
        transition: {
          duration: 0.35,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        },
      }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
