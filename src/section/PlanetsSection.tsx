import Planet1 from "../assets/images/planets/planet1.png";
import Planet2 from "../assets/images/planets/planet2.png";
import Planet3 from "../assets/images/planets/planet3.png";

const PlanetsSection = () => {
  return (
    <section className="w-full flex justify-center items-center py-12 bg-dark">
      <div className="flex flex-wrap justify-center gap-8">
        <div
          className="w-[200px] h-[200px] bg-center bg-cover rounded-full flex items-center justify-center text-white text-xl font-bold animate-smoothBounce"
          style={{
            backgroundImage: `url(${Planet1})`,
            animationDelay: "0s",
          }}
        >
          Планета 1
        </div>
        <div
          className="w-[200px] h-[200px] bg-center bg-cover rounded-full flex items-center justify-center text-white text-xl font-bold animate-smoothBounce"
          style={{
            backgroundImage: `url(${Planet2})`,
            animationDelay: "1s",
          }}
        >
          Планета 2
        </div>
        <div
          className="w-[200px] h-[200px] bg-center bg-cover rounded-full flex items-center justify-center text-white text-xl font-bold animate-smoothBounce"
          style={{
            backgroundImage: `url(${Planet3})`,
            animationDelay: "2s",
          }}
        >
          Планета 3
        </div>
      </div>
    </section>
  );
};

export default PlanetsSection;
