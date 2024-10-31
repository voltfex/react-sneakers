import React from 'react';

interface Props {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  className?: string;
}

export const CardItem: React.FC<Props> = ({ imageUrl, name, price }: Props) => {
  return (
    <div className="flex flex-col items-start">
      <div className="group">
        <img
          src={imageUrl}
          alt={name}
          className="bg-[#F5F5F5] cursor-pointer group transition-all group-hover:translate-y-[-4px]"
        />
        <div className="mt-6 text-[18px] font-medium cursor-pointer  group">{name}</div>
      </div>
      <div className="mt-2 text-[16px] font-medium text-[#595959] ">{price}</div>
    </div>
  );
};
