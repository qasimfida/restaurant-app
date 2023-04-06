import Carousel from '@/components/Carousel';
import Collapse from '@/components/Collapse';
import Hero from '@/components/Hero';
import { MenuContext } from '@/contexts/MenuContext';
import React, { useContext, useState } from 'react';

const menus = [
  {
    title: 'Pancakes',
    products: [
      { id: 1, title: 'Nutella Pie', calories: 216, price: 9 },
      { id: 2, title: 'Nutella Pie', calories: 216, price: 9 },
    ],
  },
  {
    title: 'Pizza',
    products: [{ id: 1, title: 'Nutella Pie', calories: 216, price: 9 }],
  },
  {
    title: 'Drinks',
    products: [{ id: 1, title: 'Nutella Pie', calories: 216, price: 9 }],
  },
];

const HomeContainer = () => {
  const [openIndex, setOpenIndex] = useState(1);
  const { state, setState } = useContext(MenuContext);

  const handleOpen = (index: number) => {
    setOpenIndex(index);
  };
  return (
    <div className="bg-full-dark min-h-screen">
      <Hero className="" />
      <div className="px-4">
        {menus.map((menu, index) => (
          <Collapse
            key={index}
            title={menu.title}
            quantity={menu.products.length}
            index={index}
            openIndex={openIndex}
            onOpen={handleOpen}
            products={menu.products}
          />
        ))}
        <Carousel />
      </div>
    </div>
  );
};

export default HomeContainer;
