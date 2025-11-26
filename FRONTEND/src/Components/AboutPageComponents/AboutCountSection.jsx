import React, { useState, useEffect } from "react";

const AboutCountSection = () => {
  const useCountUp = (end, duration = 2500) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTimestamp = null;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }, [end, duration]);

    return count;
  };

  const students = useCountUp(5000, 2500); // All finish in 2.5s
  const successRate = useCountUp(95, 2500);
  const projects = useCountUp(300, 2500);

  return (
    <>
      <section className="bg-[#d4ebf2] py-16 relative">
        {/* Background Shape */}
        <div className="absolute inset-0 opacity-40">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
            <path
              fill="#a6d3e6"
              fillOpacity="1"
              d="M0,256L80,240C160,224,320,192,480,192C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>

        {/* Stats */}
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center text-[#003049] font-bold">
          <div>
            <h2 className="text-4xl md:text-5xl">{students.toLocaleString()}+</h2>
            <p className="text-black font-medium mt-2">Students Trained</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl">{successRate}%</h2>
            <p className="text-black font-medium mt-2">Success Rate</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl">{projects.toLocaleString()}+</h2>
            <p className="text-black font-medium mt-2">Projects Delivered</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCountSection;