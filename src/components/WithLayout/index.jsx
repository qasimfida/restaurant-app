import Head from 'next/head';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Modal from '../Modal';
import { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
const WithLayout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const branches = [
    { id: 1, title: 'Mujahideen' },
    { id: 2, title: "Al Mu'aisem" },
    { id: 3, title: 'Al Awali' },
    { id: 4, title: 'Az Zahir' },
    { id: 5, title: 'Walyal Ahd' },
    { id: 6, title: 'An Nawwariyyah' },
    { id: 7, title: "Ash Shara'i" },
    { id: 8, title: 'Al-shawqeih' },
  ];
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
      </Head>
      <div className="mx-auto max-w-[640pt]">
        <Navbar handleOpen={handleOpen} />
        {props.children}
        <Modal isOpen={isOpen} handleClose={handleClose}>
          <div className="gap-4 mb-6 columns-1 sm:columns-2">
            <Input
              icon
              className=""
              placeholder="Enter your location name (optional)"
            />
          </div>
          <div className="relative flex justify-center w-full my-4 text-center border-b border-grey">
            <span className="text-grey bg-dark absolute px-4 -top-[12px]">
              Or
            </span>
          </div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Choose the nearest branch
          </h3>
          <div className="gap-4 columns-1 sm:columns-2">
            {branches.map((branch) => (
              <Button
                onClick={handleClose}
                key={branch.id}
                variant="danger"
                className="px-16 mb-4"
              >
                {branch.title}
              </Button>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button
              onClick={handleClose}
              variant="secondary"
              className="!px-16"
            >
              Skip
            </Button>
          </div>
        </Modal>
        <Footer />
      </div>
    </>
  );
};

export default WithLayout;
