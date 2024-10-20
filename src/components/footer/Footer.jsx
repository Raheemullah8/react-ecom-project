import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import { Link } from 'react-router-dom';

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;

  const footerStyle = {
    backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : '#EFC495', // Light orange in light mode
    color: mode === 'dark' ? 'white' : 'black', // Text color changes based on mode
  };

  return (
    <div>
      <footer className="text-gray-600 body-font" style={footerStyle}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : 'black' }}>CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li><Link to="/" className="hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Home</Link></li>
                <li><Link to="/order" className="hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Order</Link></li>
                <li><Link to="/local-for-vocal" className="hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Local For Vocal</Link></li>
                <li><Link to="/cart" className="hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Cart</Link></li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Customer Service</h2>
              <nav className="list-none mb-10">
                <li><Link to="/returnpolicy" className="hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Return Policy</Link></li>
                <li><Link to="/about" className="hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : 'black' }}>About</Link></li>
                <li><Link to="/contact" className="hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Contact Us</Link></li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Services</h2>
              <nav className="list-none mb-10">
                <li><Link to="/privacypolicy" className="hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Privacy</Link></li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(55, 57, 61)' : '#EFC495', color: mode === 'dark' ? 'white' : 'black' }}>
          <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            <Link to="/" className='flex'>
              <div className="flex">
                <h1 className='text-2xl font-bold px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : 'black' }}>Apna<span className='text-[#a77f44]'>Store</span></h1>
              </div>
            </Link>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a target='_blank' rel="noopener noreferrer" className="text-gray-500 cursor-pointer" href='https://www.facebook.com/profile.php?id=100086971008426'>
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/abdul_qadir.05/' className="ml-3 text-gray-500 cursor-pointer">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a target='_blank' rel="noopener noreferrer" className="ml-3 text-gray-500 cursor-pointer" href='https://www.linkedin.com/in/abdul-qadir-web-developer-12a5b62b9/'>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
