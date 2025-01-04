import { useState } from "react";
import Logo from "../assets/images/planet.png";
import MenuIcon from "../assets/images/icons-gifs/rocket.gif";
import MenuList from "./MenuListComponent";
import PlanetImage from "../assets/images/dark-planet.jpg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuButtonHovered, setIsMenuButtonHovered] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            className="text-white focus:outline-none"
            onMouseEnter={() => setIsMenuButtonHovered(true)}
            onMouseLeave={() => setIsMenuButtonHovered(false)}
          >
            <img
              src={MenuIcon}
              alt="Menu Icon"
              className={`transform transition-all duration-500 -rotate-90  ${
                isMenuOpen ? "rotate-[90deg]" : ""
              } ${isMenuButtonHovered ? "w-[36px] h-[36px]" : "w-[40px] h-[40px]"} `}
            />
          </button>
        </div>

        <div className="text-white hidden sm:block">
          <MenuList className="flex items-center gap-6 py-4" />
        </div>
      </div>

      <div
  className={`sm:hidden fixed right-0 pl-[34px] w-[200px] h-[360px] rounded-l-full py-4 shadow-lg flex flex-col items-center justify-center transform transition-transform duration-1000 ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
  style={{
    backgroundImage: `url(${PlanetImage})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    maskImage: "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0, 0, 0, 0) 100%)",
    WebkitMaskImage:
      "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
  }}
>
        <MenuList className="flex flex-col items-center gap-6" />
      </div>
    </nav>
  );
};

export default Header;
