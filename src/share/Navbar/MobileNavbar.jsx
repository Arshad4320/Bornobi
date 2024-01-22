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
    <div className=" bg-white block md:hidden   p-4 0  shadow-md ">
      <div className="flex justify-between    ">
        <div className=" font-semibold w-[170px] h-[40px] px-2  rounded-md  ">
          <Link to="/">
            {" "}
            <img className="w-ful h-full" src={logo} alt="" />
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
          <ul className="space-y-2 ">
            <li>{routing}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavber;
