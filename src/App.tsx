import { useEffect } from "react";
import WelcomeSection from "./section/WelcomeSection";
import PlatesSection from "./section/PlatesSection";

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
    <div className="w-full bg-dark">
      <div>
        <WelcomeSection />
        <PlatesSection />
      </div>
    </div>
  );
}

export default App;
