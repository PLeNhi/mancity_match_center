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
      <motion.svg
        viewBox="0 0 184 56"
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 8 4 H 176 C 180 4 180 52 176 52 H 8 C 4 52 4 4 8 4 Z"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0 1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1, transition: { duration: 0.9, ease: 'easeInOut' } }}
        />
      </motion.svg>

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
