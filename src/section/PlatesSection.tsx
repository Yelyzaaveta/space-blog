import AboutCard from "../components/CardComponent";
import Picture1 from "../assets/images/cards/pic1.jpg";
import Picture2 from "../assets/images/cards/pic2.jpg";
import Picture3 from "../assets/images/cards/pic3.webp";
import Picture4 from "../assets/images/cards/pic7.jpg";
import Picture5 from "../assets/images/cards/pic8.webp";
import Picture6 from "../assets/images/cards/pic6.jpg";
// import Wave from "../assets/videos/blue-wave.gif";

const AboutSection = () => {
  const cards = [
    {
      image: Picture1,
      title: "Amazing Galaxy",
      description:
        "Explore the wonders of the universe. Discover stars, planets, and galaxies like never before. Experience the cosmos.",
    },
    {
      image: Picture2,
      title: "Amazing Galaxy",
      description:
        "Uncover the mysteries of space with this stunning galaxy. See the vibrant colors of the stars.",
    },
    {
      image: Picture3,
      title: "Amazing Galaxy",
      description:
        "Journey through the endless skies and marvel at the beauty of the universe.",
    },
    {
      image: Picture4,
      title: "Amazing Galaxy",
      description:
        "Learn about the formation of galaxies, the birth of stars, and the secrets of black holes.",
    },
    {
      image: Picture5,
      title: "Amazing Galaxy",
      description:
        "Experience the thrill of space exploration and understand the vastness of the cosmos.",
    },
    {
      image: Picture6,
      title: "Amazing Galaxy",
      description:
        "Dive into the depths of space and uncover the secrets of faraway worlds.",
    },
  ];

  return (
    <section className="w-full px-[24px] relative">
      {/* <div className="bg-dark absolute bottom-[-170px] left-0 w-full h-[200px]">
        <img 
        data-aos="fade-right"
          data-aos-delay="1000"
          src={Wave}
          alt="Wave background"
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[50px] justify-items-center relative z-10">
        {cards.map((card, index) => (
          <AboutCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
