import React, { Fragment, useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';

function Navbar() {
  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const cartItems = useSelector((state) => state.cart);

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login';
  };

  return (
    <div className={`sticky top-0 z-50 ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      {/* Mobile Menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className={`relative flex w-full max-w-xs flex-col overflow-y-auto pb-12 shadow-xl ${mode === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className={`-m-2 inline-flex items-center justify-center rounded-md p-2 ${mode === 'dark' ? 'text-white' : 'text-gray-400'}`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link to='/allproducts' className={`text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    All Products
                  </Link>

                  {user && (
                    <Link to='/order' className={`-m-2 block p-2 font-medium ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Order
                    </Link>
                  )}

                  {user?.user?.email === "admin@gmail.com" && (
                    <Link to='/dashboard' className={`-m-2 block p-2 font-medium ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Dashboard
                    </Link>
                  )}

                  {user ? (
                    <a onClick={logout} className={`-m-2 block p-2 font-medium cursor-pointer ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Logout
                    </a>
                  ) : (
                    <Link to='/signup' className={`-m-2 block p-2 font-medium cursor-pointer ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Signup
                    </Link>
                  )}

                  <Link to='/' className="-m-2 block p-2">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                      alt="User Profile" />
                  </Link>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className={`-m-2 flex items-center ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2560px-Flag_of-Pakistan.svg.png"
                      alt="Pakistan Flag"
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium">PAK</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Main Navbar */}
      <header className="relative mb-2">
        <nav aria-label="Top" className={`px-4 sm:px-6 lg:px-8 shadow-xl ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
          <div>
            <div className={`flex h-16 items-center`}>
              <button
                type="button"
                className={`rounded-md p-2 lg:hidden ${mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-400'}`}
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to='/' className='flex'>
                  <h1 className={`text-2xl font-bold px-2 py-1 rounded ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Food<span className='text-[#eecc99]'>Store</span>
                  </h1>
                </Link>
              </div>

              {/* Navbar Links */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link to='/allproducts' className={`text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                    All Products
                  </Link>
                  {user ? (
                    <Link to='/order' className={`text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Order
                    </Link>
                  ) : (
                    <Link to='/signup' className={`text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Signup
                    </Link>
                  )}

                  {user?.user?.email === 'admin@gmail.com' && (
                    <Link to='/dashboard' className={`text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Dashboard
                    </Link>
                  )}

                  {user && (
                    <a onClick={logout} className={`text-sm font-medium cursor-pointer ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Logout
                    </a>
                  )}
                </div>

                {/* Country Selection */}
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className={`flex items-center ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2560px-Flag-of-Pakistan.svg.png"
                      alt="Pakistan Flag"
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium">PAK</span>
                  </a>
                </div>

                {/* Theme Toggle */}
                <button onClick={toggleMode} className="hidden h-7 w-7 ml-3 lg:block">
                  {mode === 'dark' ? (
                    <FiSun className='text-xl' />
                  ) : (
                    <BsFillCloudSunFill className='text-yellow-500 text-xl' />
                  )}
                </button>

                {/* Cart Icon */}
                <Link to='/cart' className={`relative ml-4`}>
                  <IoCartSharp className={`text-2xl ${mode === 'dark' ? 'text-white' : 'text-gray-700'}`} />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-white">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
