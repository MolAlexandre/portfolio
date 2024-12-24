import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import ComputersCanvas from '../components/Computers.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isBigTablet = useMediaQuery({ minWidth: 1024, maxWidth: 1400 });

  const screenHeight = window.innerHeight;
  const sizes = calculateSizes(isSmall, isMobile, isTablet, isBigTablet, screenHeight);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="snow">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="snowflake"></div>
        ))}
      </div>
      <div className="w-full flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-5xl text-3xl font-medium text-white text-center font-generalsans">
          Hi, I am Alexandre
        </p>
        <p className="sm:text-2xl text-lg text-gray-400 text-center">
          Student in Artificial Intelligence
        </p>
      </div>
      <div className="w-full h-full absolute top-0 left-0 px-1 my-auto">
        <ComputersCanvas sizes={sizes} />
      </div>
    </section>
  );
};

export default Hero;