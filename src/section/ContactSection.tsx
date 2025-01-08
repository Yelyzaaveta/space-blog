import Sattelite from "../assets/images/sattelite-dark.png";

const ContactSection = () => {
  return (
    <section className="w-full mt-[100px] h-[320px] bg-dark relative overflow-hidden flex items-center justify-center">
      <div
        className="absolute right-0 w-full h-full animate-blackSlide z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 2, 1) 90%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>

      <div className="absolute right-0 transform animate-satelliteFly z-20">
        <img
          src={Sattelite}
          alt="Sattelite"
          className="w-[450px] h-auto opacity-80"
        />
      </div>

      <div className="relative text-center opacity-100">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Reach for the Stars
        </h2>
        <form className="w-[300px] mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-light text-dark placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-light text-dark placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full p-3 bg-primary text-white rounded-md font-bold hover:bg-primary-dark transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <style>
        {`
          @keyframes satelliteFly {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-200%);
            }
          }

          .animate-satelliteFly {
            animation: satelliteFly 5s linear forwards;
          }

          @keyframes blackSlide {
            0% {
              transform: translateX(10%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-blackSlide {
            animation: blackSlide 6s linear forwards;
          }
        `}
      </style>
    </section>
  );
};

export default ContactSection;
