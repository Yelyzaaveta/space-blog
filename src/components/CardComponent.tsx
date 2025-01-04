import React from "react";

interface CardProps {
  className?: string;
  image: string;  
  title: string; // Заголовок карточки
  description: string; // Опис карточки
}

const Card: React.FC<CardProps> = ({
  className,
  image,
  title,
  description,
}) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="500"
      className={`mt-[20px] bg-light text-dark rounded-[12px] min-w-[200px] min-h-[240px] max-w-[300px] sm:w-[280px] md:min-w-[320px] lg:min-w-[300px] xl:min-w-[350px] hover:blur-[2px] cursor-pointer duration-200 ${className}`}
 >
      <div className="w-full h-[120px]">
        <img src={image} alt={title} className="rounded-[12px] w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
