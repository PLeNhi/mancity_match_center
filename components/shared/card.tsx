'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white border-hand border-sketch-900 p-6 shadow-sketch ${className}`}>
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
      className={`bg-sketch-50 rounded-md border-hand border-sketch-900 p-5 shadow-sketch ${className}`}
    >
      {children}
    </div>
  );
}
