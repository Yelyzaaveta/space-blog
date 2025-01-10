import Background from "../assets/videos/sky-background.mp4";
import Sattelite from "../assets/images/sattelite-dark.png";

const ContactSection = () => {
  return (
    <section className="w-full mt-[100px] h-[320px] lg:h-[460px] bg-dark relative overflow-hidden flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={Background} type="video/mp4" />
        Video Error
      </video>
      <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-dark via-dark/75 via-dark/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-dark via-dark/75 via-dark/50 to-transparent"></div>

      <div className="absolute transform animate-satelliteFly z-20">
        <img
          src={Sattelite}
          alt="Sattelite"
          className="w-[450px] lg:w-[550px] h-auto opacity-90"
        />
      </div>

      <div className="relative text-center opacity-100">
        <h2 className="text-3xl font-bold mb-4 text-light">
          Reach for the Stars
        </h2>
        <form className="w-[300px] mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-light text-dark placeholder-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-light text-dark placeholder-white focus:outline-none"
          />
          <button
            type="submit"
            className="px-[30px] p-3 bg-light text-white rounded-md font-bold hover:text-dark transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <style>
        {`
          @keyframes satelliteFly {
            0% {
              transform: translate(200%, 10%);
            }
            33% {
              transform: translate(100%, 0%);
            }
            66% {
              transform: translate(0%, 10%);
            }
            100% {
              transform: translate(-200%, 0%);
            }
          }

          .animate-satelliteFly {
            animation: satelliteFly 15s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ContactSection;
