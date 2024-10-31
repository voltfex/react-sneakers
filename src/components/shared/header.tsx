import React from 'react';
import { Container } from '.';
import { Heart, ShoppingCart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('mt-[26px] border-b pb-[18px]', className)}>
      <Container>
        <div className="flex items-center justify-between">
          <img className="cursor-pointer" src={'/logo.svg'} width={99} height={36} alt="Logo" />
          <div className="flex items-center gap-8">
            <ShoppingCart className="cursor-pointer" size={24} />
            <Heart className="cursor-pointer" size={24} />
            <User className="cursor-pointer" size={24} />
          </div>
        </div>
      </Container>
    </header>
  );
};
