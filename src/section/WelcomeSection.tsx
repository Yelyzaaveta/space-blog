import Background from "../assets/videos/sky-background.mp4";

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

      <div className="container absolute inset-0 flex items-center justify-center md:justify-start">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Hello !
        </h1>
      </div>
    </section>
  );
}

export default WelcomeSection;
