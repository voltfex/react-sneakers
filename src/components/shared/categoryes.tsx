import React from 'react';

interface Props {
  className?: string;
}

export const Categoryes: React.FC<Props> = ({}) => {
  const cat = ['All', 'Sneakers', 'Boots', 'Slates', 'Backpacks', 'Accessories'];
  const [activeCategory, setActiveCategory] = React.useState(0);

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
  };

  return (
    <div className="flex items-center gap-3 p-1 bg-[#FAFAFA] rounded-[18px]">
      {cat.map((category, index) => (
        <button
          key={index}
          className={`inline-block px-[28px] py-[11px] text-[16px] font-semibold text-gray-90 ${
            index === activeCategory ? 'text-[#D90429] bg-white rounded-[15px]' : ''
          }`}
          onClick={() => handleCategoryClick(index)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
