import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideItem from "../components/SliderItemComponent";
import Picture1 from "../assets/images/cards/pic2.jpg";
import Picture2 from "../assets/images/cards/pic7.jpg";
import Picture3 from "../assets/images/cards/pic8.webp";

const SliderSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 4000,
    arrows: false,
    verticalSwiping: true,
    swipeToSlide: true,
    swipe: true,
  };

  const slides = [
    { image: Picture1, text: "Slide 1" },
    { image: Picture2, text: "Slide 2" },
    { image: Picture3, text: "Slide 3" },
  ];

  return (
    <section className="w-full mt-[60px] flex justify-center">
      <div className="w-[100%]">
        <Slider {...settings} className="text-light">
          {slides.map((slide, index) => (
            <SlideItem key={index} image={slide.image} text={slide.text} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SliderSection;
