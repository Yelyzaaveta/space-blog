import { useEffect } from "react";
import WelcomeSection from "./section/WelcomeSection"
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: "ease-in-out",
      once: true,
    });

    AOS.refresh();
  }, []);

  return (
    <div className="w-full h-[3000px] bg-dark">
      <div>
        <WelcomeSection/>
      </div>
    </div>
  );
}

export default App;
