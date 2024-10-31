import React from 'react';
import { Checkbox } from '../ui';

interface Props {
  id: number;
  name: string;
  className?: string;
  toggleBrand: (brand: string) => void;
}

export const CheckboxItem: React.FC<Props> = ({ id, name, toggleBrand }) => {
  return (
    <div className="flex items-center gap-4">
      <Checkbox id={String(id)} onClick={() => toggleBrand(name)} />
      <label
        htmlFor={String(id)}
        className="text-sm font-semibold text-[#595959] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {name}
      </label>
    </div>
  );
};
