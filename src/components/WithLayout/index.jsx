import Head from 'next/head';
import Footer from '../Footer';
import Navbar from '../Navbar';
const WithLayout = (props) => {
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
        <Footer />
      </div>
    </>
  );
};

export default WithLayout;
