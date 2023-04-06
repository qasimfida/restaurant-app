import Head from 'next/head';
import { Inter } from 'next/font/google';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Collapse from '@/components/Collapse';
import { useState } from 'react';
import Button from '@/components/Button';

const inter = Inter({ subsets: ['latin'] });
const menus = [
  { title: 'Pancakes', products: [{id: 1}] },
  { title: 'Pizza', products: [{id: 1}] },
  { title: 'Drinks', products: [{id: 1}] }
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(1);

  const handleOpen = (index: number) => {
    setOpenIndex(index);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="sm:container sm:mx-auto">
          <Navbar className="bg-full-dark" />
          <Hero className="" />
          <ProductCard
            image="/1.jpg"
            title="Nutella Pie"
            calories={216}
            price={9.0}
          />
          <Footer className="" /> 
         { menus.map((menu, index) => <Button key={menu.title} onClick={()=>{
          handleOpen(index)
         }} > {menu.title} </Button>)}
          {menus.map((menu, index) => (
            <Collapse  key={index}
            title={menu.title}
            quantity={menu.products.length}
            index={index}
            openIndex={openIndex}
            onOpen={handleOpen} products={menu.products}></Collapse>
          ))}
        </div>
      </main>
    </>
  );
}
