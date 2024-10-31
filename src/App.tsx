import React from 'react';
import { CardItem, Categoryes, Container, FilterCard, Filters, Header } from './components/shared';
import { useGetItemsQuery } from './store/slice/itemsSlice';

import './App.css';
import SkeletonCardItem from './components/shared/skeleton-card-item';

interface Props {
  className?: string;
}

export const App: React.FC<Props> = ({}) => {
  const { data, error, isLoading } = useGetItemsQuery();

  if (error) return <div>Error: {'все плохо'}</div>;

  return (
    <div className="bg-white">
      <Header />
      <Container>
        <div className="flex gap-[64px] mt-8">
          <Filters />

          {/* Секция с товаром */}
          <div className="flex flex-col items-start flex-1">
            <div className="flex items-center gap-4">
              <Categoryes />
              <FilterCard />
            </div>
            <div className="grid grid-cols-3 gap-6 mt-[20px]">
              {isLoading
                ? new Array(8).fill(null).map((_, i) => <SkeletonCardItem key={i} />)
                : data?.map((item) => (
                    <CardItem
                      id={item.id}
                      imageUrl={item.imageUrl}
                      name={item.name}
                      price={item.price}
                      key={item.id}
                    />
                  ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
