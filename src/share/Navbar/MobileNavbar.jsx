import { useState } from "react";
import { Link } from "react-router-dom";
import { FaOutdent } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import logo from "../../assets/img/logo.jpeg";

const MobileNavber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const routing = (
    <>
      <Link
        to="/"
        className="block  px-2 py-2 font-semibold text-primary hover:text-secondary  "
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block  px-2 py-2 font-semibold text-primary hover:text-secondary  "
      >
        About
      </Link>
      <Link
        to="/service"
        className="block  px-2 py-2 font-semibold text-primary hover:text-secondary  "
      >
        Service
      </Link>
      <Link
        to="/contact"
        className="block  px-2 py-2 font-semibold text-primary hover:text-secondary  "
      >
        Contact
      </Link>
    </>
  );

  return (
    <div className=" bg-white block md:hidden z-10 fixed top-0 w-full   shadow-md ">
      <div className="flex justify-between  items-center  ">
        <div className="flex gap-2">
          <Link className="flex items-center justify-center " to="/">
            {" "}
            <div className=" font-semibold w-[80px] h-[80px]  ">
              <img className="w-ful h-full" src={logo} alt="" />{" "}
            </div>
            <p className="text-2xl font-semibold text-primary">
              Bornobi Properties
            </p>
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className=" text-primary  focus:outline-none flex "
        >
          {isMenuOpen ? (
            <HiMiniXMark className=" h-6 w-6   mr-2     " />
          ) : (
            <div className="text-primary">
              <FaOutdent className=" h-6 w-6   mr-2   " />
            </div>
          )}
        </button>
      </div>
      {/* Menu */}
      <div className={` ${isMenuOpen ? "block" : "hidden"}   `}>
        {/* Menu Content */}
        <div>
          <ul className="space-y-2 mx-4">
            <li>{routing}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavber;
