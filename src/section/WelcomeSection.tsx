import Background from "../assets/videos/sky-background.mp4";
import Button from "../components/ButtonComponent";

function WelcomeSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={Background} type="video/mp4" />
        Video Error
      </video>

      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-dark via-dark/75 via-dark/50 to-transparent"></div>

      <div className="container absolute inset-0 flex flex-col items-center md:items-start justify-center md:max-w-[500px] lg:max-w-[800px] gap-4">
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-white text-4xl md:text-6xl font-bold text-center md:text-left"
        >
          Welcome to <span className="text-light">Space Blog</span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="450"
          className="text-white text-xl md:text-2xl text-center md:text-left"
        >
          Explore the Wonders of the Universe!
        </p>
        <Button className="w-[100px] md:w-[260px] h-[40px] md:h-[60px] text-md md:text-xl">Spacing</Button>
      </div>
    </section>
  );
}

export default WelcomeSection;
