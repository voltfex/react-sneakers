import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return <div className={cn('max-w-[1344px] mx-auto px-[20px]', className)}>{children}</div>;
};
