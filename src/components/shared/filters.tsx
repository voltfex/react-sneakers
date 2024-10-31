import React from 'react';
import { CheckboxGroup } from './checkbox-group';
import { RangeSlider, SizesFilter, Title } from '.';
import { useGetItemsQuery } from '@/store/slice/itemsSlice';
import { useSet } from 'react-use';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({}) => {
  const { data, error, isLoading } = useGetItemsQuery();
  const [selectedBrand, { toggle: addBrand }] = useSet(new Set<string>([]));
  const [selectedSize, { toggle: addSize }] = useSet(new Set<string>([]));
  const [rangeValue, setRangeValue] = React.useState({ from: 0, to: 1000 });

  console.log(selectedBrand, selectedSize, rangeValue);

  const toggleBrand = (brand: string) => {
    addBrand(brand);
  };

  const toggleSize = (size: string) => {
    addSize(size);
  };

  const brandList = data?.map((item) => item.brand);

  if (error) return <div>Error! {'Херова'}</div>;
  return (
    <div className="flex gap-[64px] ">
      <div className="flex flex-col gap-[30px] w-[300px]">
        <CheckboxGroup
          name={'Brand'}
          isLoading={isLoading}
          items={[...new Set(brandList)]}
          toggleBrand={toggleBrand}
        />

        <div className="flex flex-col gap-4 py-8 border-t border-b border-[#DEDEDE]">
          <Title text="Price range" size="xs" className={'font-bold '} />
          <RangeSlider
            min={0}
            max={1000}
            step={10}
            className="max-w-[228px]"
            onValueChange={(e) => setRangeValue({ from: e[0], to: e[1] })}
          />
        </div>
        <SizesFilter selectedSize={selectedSize} toggleSize={toggleSize} />
      </div>
    </div>
  );
};
