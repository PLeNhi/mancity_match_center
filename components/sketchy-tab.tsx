'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface SketchyTabButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function SketchyTabButton({
  children,
  active = false,
  onClick,
  className = '',
}: SketchyTabButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      role="tab"
      aria-selected={active}
      className={`relative rounded-full border-hand border-sketch-900 px-5 py-2 text-sm font-semibold transition ${
        active
          ? 'bg-sketch-900 text-white shadow-sketch'
          : 'bg-white text-sketch-900 shadow-sketch hover:bg-sketch-100'
      } ${className}`}
      whileHover={{
        rotate: [0, 0.8, -0.8, 0.5, 0],
        y: [0, -1.5, 1.2, -0.8, 0],
        scale: [1, 1.01, 1.02, 1.01, 1],
        transition: {
          duration: 0.45,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        },
      }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.32, ease: 'easeOut' } }}
    >
      {children}
    </motion.button>
  );
}
