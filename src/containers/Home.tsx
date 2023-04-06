import Button from '@/components/Button';
import Carousel from '@/components/Carousel';
import Collapse from '@/components/Collapse';
import Hero from '@/components/Hero';
import { cn } from '@/helpers/cn';
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

  const handleOpen = (index: number) => {
    setOpenIndex(index);
  };
  return (
    <div className="min-h-screen bg-full-dark">
      <Hero className="" />
      <div className="px-4">
        <div className="py-4" >
          {menus.map((menu, index) => (<div onClick={()=>handleOpen(index)} className={cn`cursor-pointer border-b-2 mr-4 py-4 px-2 inline text-white hover:border-primary ${index === openIndex ? 'border-primary': 'border-transparent'}`} key={menu.title} >{menu.title}</div>))}
        </div>
        <Carousel />
        {menus.map((menu, index) => (
          <Collapse
            key={menu.title}
            title={menu.title}
            quantity={menu.products.length}
            index={index}
            openIndex={openIndex}
            onOpen={handleOpen}
            products={menu.products}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
