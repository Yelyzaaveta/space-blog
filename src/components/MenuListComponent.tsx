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

export default MenuList;
