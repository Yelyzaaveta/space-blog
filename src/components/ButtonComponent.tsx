import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      data-aos="fade-up"
      data-aos-delay="500"
      className={`bg-light/30 text-white hover:bg-dark/60 active:bg-dark backdrop-blur-lg px-4 py-1 rounded-md duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
