import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import Dropdown from "./Dropdown";
import MegaLinks from "./MegaLinks";

const Navbar = () => {
  // for mobile navbar
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  // for modal
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <nav className="bg-slate-900 z-10 w-full border-b-2 border-slate-700 fixed top-0">
      <div className="flex items-center font-medium justify-between md:px-8">
        <div className="z-20 md:bg-transparent bg-slate-900 p-5 lg:w-auto w-full flex justify-between ">
          <Link
            to="/"
            className="text-white font-medium uppercase text-lg md:text-xl flex gap-1 items-center font-poppins group"
            id="logo"
          >
            <ion-icon name="megaphone-outline"></ion-icon>
            <span className="tracking-wide text-naija">NewsTown</span>
          </Link>
          <div
            className="text-3xl text-white hover:text-naija transition duration-200 lg:hidden"
            onClick={toggleNav}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="lg:flex hidden uppercase items-center gap-8 font-poppins">
          <li>
            <Link
              to="/"
              className="py-4 px-3 inline-block text-md text-gray-300 hover:text-naija transition duration-200"
            >
              Home
            </Link>
          </li>
          <MegaLinks />
          <Dropdown />
          <li onClick={toggleModal}>
            <span className="py-4 px-3 flex items-center gap-2 text-md md:cursor-pointer font-bold text-gray-300 hover:text-naija transition duration-200">
              <ion-icon name="search"></ion-icon>
              <span className="md:hidden">Search</span>
            </span>
          </li>
        </ul>

        {/* Mobile Navbar  */}
        <ul
          className={`lg:hidden block overflow-y-auto bg-slate-800 absolute top-16 h-screen w-full bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "-left-full"
          }`}
        >
          <li>
            <Link
              to="/"
              className="py-4 px-3 inline-block text-gray-300 hover:text-naija transition duration-200"
              onClick={toggleNav}
            >
              Home
            </Link>
          </li>
          <MegaLinks toggleNav={toggleNav} />
          <Dropdown toggleNav={toggleNav} />
          <li onClick={toggleModal}>
            <span className="py-4 px-3 flex items-center gap-2 text-md md:cursor-pointer text-gray-300 hover:text-naija transition duration-200">
              <ion-icon name="search"></ion-icon>
              <span>Search</span>
            </span>
          </li>
        </ul>
      </div>

      {/* Modal */}
      {modal && (
        <Modal toggleModal={toggleModal}>
          <div className="pb-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-semibold font-poppins uppercase text-gray-400 ">
              Search
            </h3>
            <form className="space-y-6 py-4" action="#">
              <div>
                <input
                  type="text"
                  name="text"
                  id="text"
                  className="bg-gray-200 border-none text-gray-900 text-sm rounded-lg outline-none focus:ring-2 focus:ring-naija block w-full p-2.5"
                  placeholder="Search here..."
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full text-white bg-slate-800 hover:bg-naija focus:ring-2 focus:outline-none focus:ring-naija font-medium rounded-lg text-md transition duration-300 px-5 py-2.5 text-center flex items-center justify-center gap-1"
                >
                  <ion-icon name="search"></ion-icon>
                  Search
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
