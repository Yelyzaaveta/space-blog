const SlideItem = ({ image, text }: { image: string; text: string }) => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-2xl font-bold"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-dark via-dark/75 via-dark/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-dark via-dark/75 via-dark/50 to-transparent"></div>
     
      <div className="absolute bottom-0 left-0 w-[20px] md:w-[100px] h-full bg-gradient-to-r from-dark via-dark/75 via-dark/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[20px] md:w-[100px] h-full bg-gradient-to-l from-dark via-dark/75 via-dark/50 to-transparent"></div>
     
      <div className="bg-dark text-light bg-opacity-70 px-4 py-2 rounded">
        {text}
      </div>
    </div>
  );
};

export default SlideItem;
