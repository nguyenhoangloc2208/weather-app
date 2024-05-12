import React from 'react';
import { twMerge } from 'tailwind-merge';

type Prop = {
  children: React.ReactNode;
  className?: string;
  level?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

export default function Paper({ children, className, level = 'md' }: Prop) {
  return (
    <div
    className={twMerge(
      `w-full rounded-lg bg-white dark:bg-dblack p-4 shadow-${level}`,
      className,
    )}
    >
      {children}
    </div>
  );
}