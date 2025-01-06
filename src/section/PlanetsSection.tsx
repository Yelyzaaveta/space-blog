import Planet1 from "../assets/images/planets/planet1.png";
import Planet2 from "../assets/images/planets/planet2.png";
import Planet3 from "../assets/images/planets/planet3.png";

const PlanetsSection = () => {
  return (
    <section className="w-full flex justify-center items-center bg-dark sm:h-[500px] md:h-full lg:h-[400px]">
      <div className="flex flex-wrap justify-center gap-[100px]">
        <div
          className="w-[200px] h-[200px] xl:w-[320px] xl:h-[320px] transition-[width,height] duration-1000 bg-center bg-cover rounded-full flex items-center justify-center text-dark text-[28px] font-bold animate-smoothBounce"
          style={{
            backgroundImage: `url(${Planet1})`,
            animationDelay: "0s",
          }}
        >
          28 stars
        </div>
        <div
          className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] transition-[width,height] duration-1000 bg-center bg-cover rounded-full flex items-center justify-center text-white text-[30px] font-bold animate-smoothBounce"
          style={{
            backgroundImage: `url(${Planet2})`,
            animationDelay: "1s",
          }}
        >
          2000 planets
        </div>
        <div
          className="w-[220px] h-[220px] xl:w-[280px] xl:h-[280px] transition-[width,height] duration-1000 bg-center bg-cover rounded-full flex items-center justify-center text-dark text-[28px] font-bold animate-smoothBounce"
          style={{
            backgroundImage: `url(${Planet3})`,
            animationDelay: "2s",
          }}
        >
          2 years
        </div>
      </div>
    </section>
  );
};

export default PlanetsSection;
