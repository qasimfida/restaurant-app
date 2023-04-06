import Head from 'next/head';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Modal from '../Modal';
import { useState } from 'react';
const WithLayout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
      </Head>
      <div className="sm:container sm:mx-auto">
        <Navbar />
        {props.children}
        <button
          type="button"
          className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          onClick={handleOpen}
        >
          Open Modal
        </button>
        <Modal isOpen={isOpen} handleClose={handleClose} />
        <Footer />
      </div>
    </>
  );
};

export default WithLayout;
