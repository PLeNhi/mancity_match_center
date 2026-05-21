'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-[32px] bg-[#EDF2F7] p-6 shadow-[5px_5px_10px_rgba(0,0,0,0.06)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.8)] ${className}`}
    >
      {children}
    </div>
  );
}

interface InnerCardProps {
  children: React.ReactNode;
  className?: string;
}

export function InnerCard({ children, className = '' }: InnerCardProps) {
  return (
    <div
      className={`rounded-[24px] bg-[#F4F8FF] p-5 shadow-[5px_5px_10px_rgba(0,0,0,0.04)] shadow-[-5px_-5px_10px_rgba(255,255,255,0.9)] ${className}`}
    >
      {children}
    </div>
  );
}
