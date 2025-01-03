import { useState } from "react";
import Logo from "../assets/planet.png";
import MenuIcon from "../assets/galaxy.gif";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuButtonHovered, setIsMenuButtonHovered] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ["Solarmi", "Earhter", "Planitum", "Sattline"];
  const MenuList = ({ className }: { className: string }) => (
    <ul className={`text-white text-xl ${className}`}>
      {menuItems.map((item, index) => (
        <li key={index} className="hover:text-light">
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4"
    >
      <div className="container flex justify-between items-center max-h-[40px]">
        <div className="flex items-center gap-4 text-white font-bold text-2xl">
          <img src={Logo} alt="logo" className="w-[34px]" />
          <span>SPASE BLOG</span>
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none w-[40px] h-[40px]"
            onMouseEnter={() => setIsMenuButtonHovered(true)}
            onMouseLeave={() => setIsMenuButtonHovered(false)}
          >
            <img
              src={MenuIcon}
              alt="Menu Icon"
              className={`transform transition-all duration-1000 ${
                isMenuButtonHovered ? "rotate-360" : ""
              }`}
            />
          </button>
        </div>

        <div className="text-white hidden sm:block">
          <MenuList className="flex items-center gap-6 py-4" />
        </div>
      </div>

      <div
        className={`sm:hidden bg-light/20  fixed right-0 pl-[28px] w-[200px] h-[360px] rounded-l-full py-4 shadow-lg flex flex-col items-center justify-center transform transition-transform duration-1000 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <MenuList className="flex flex-col items-center gap-6" />
      </div>
    </nav>
  );
};

export default Header;
