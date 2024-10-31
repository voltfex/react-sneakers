import React from 'react';
import { Title } from '.';

interface Props {
  toggleSize: (size: string) => void;
  selectedSize: Set<string>;
  className?: string;
}

export const SizesFilter: React.FC<Props> = ({ selectedSize, toggleSize }) => {
  const sizes = ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'];

  const handleSize = (item: string) => {
    toggleSize(item);
  };

  return (
    <div className="flex flex-col max-w-[250px]">
      <Title text={'Size'} size="xs" className={'font-bold'} />
      <div className="flex items-center gap-3 flex-wrap mt-[18px]">
        {sizes.map((item, index) => (
          <button
            className={`flex items-center justify-center px-[15px] py-[12px] border border-[#D9D9D9] rounded-[8px]
         bg-white text-[16px] font-bold transition-all ${
           selectedSize.has(item) ? 'bg-[#000000] text-white' : 'text-[#595959] hover:bg-[#f7f7f7]'
         }`}
            key={index}
            onClick={() => handleSize(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
