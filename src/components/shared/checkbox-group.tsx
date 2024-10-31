import React from 'react';
import { Title } from './title';
import { CheckboxItem } from './checkbox-item';
import SkeletonCheckbox from './skeleton-checkbox';

interface Props {
  name: string;
  items?: string[];
  className?: string;
  isLoading?: boolean;
  toggleBrand: (brand: string) => void;
}

export const CheckboxGroup: React.FC<Props> = ({
  name,
  items,
  isLoading,
  toggleBrand,
  className,
}) => {
  return (
    <div className={className}>
      <div>
        <Title text={name} size="xs" className={'font-bold'} />
        <div className="flex flex-col items-start gap-[14px] mt-4">
          {isLoading
            ? new Array(6).fill(null).map((_, index) => <SkeletonCheckbox key={index} />)
            : items?.map((item, index) => (
                <CheckboxItem
                  id={index}
                  name={item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                  key={index}
                  toggleBrand={toggleBrand}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
