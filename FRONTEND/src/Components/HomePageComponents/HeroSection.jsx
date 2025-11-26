import React, { useState, useEffect } from "react";

const HeroSection = () => {

  const words = [
    "IT Services",
    "Internship Programs",
    "Live Projects",
    "AI & Data Science",
    "Web Development",
    "Career Guidance"
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 150); // delete faster, type slower

    if (!reverse && subIndex === words[index].length) {
      setTimeout(() => setReverse(true), 1000); // pause before deleting
    } else if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="bg-gray-50 lg:py-26 lg:px-6 md:px-6 px-2">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:py-0 py-6 items-center gap-12">
        {/* Left Side: Headline & Text */}
        <div className='lg:ps-5'>
          <h1 className="text-5xl lg:block md:block hidden font-extrabold text-gray-900 leading-tight">
            Empowering Future with <br />{" "}
            <span className="text-blue-600">
              {words[index].substring(0, subIndex)}
            </span>
            <span className="border-r-2 border-blue-600 ml-1 animate-blink"></span>
          </h1>
           <h1 className="text-4xl lg:hidden md:hidden block font-extrabold text-gray-900 leading-tight">
            Empowering Future with <br />{" "}
            <span className="text-blue-600">
              {words[index].substring(0, subIndex)}
            </span>
            <span className="border-r-2 border-blue-600 ml-1 animate-blink"></span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            From enterprise IT solutions to real-world training, ViteCode Technologies helps you build, scale, and succeed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:space-x-4">
            <a href='/contact' className="text-center cursor-pointer px-6 py-3 bg-blue-700 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md w-full sm:w-auto">
              Connect Us
            </a>
            <a href='/course' className="text-center cursor-pointer px-6 py-3 border border-blue-700 text-blue-700 hover:bg-blue-50 rounded-lg font-semibold w-full sm:w-auto">
              Our Courses
            </a>
          </div>

        </div>

        {/* Right Side: Tilted Code Card */}
        <div className="flex justify-center">
          <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden w-full max-w-lg mx-auto lg:max-w-none code-card">
            {/* Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm font-mono">
                vitecode_tech.py
              </span>
            </div>

            {/* Code Section */}
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
              <div className="h-[140px] sm:h-[160px] overflow-hidden">
                <pre className="text-gray-300">
                  <span className="text-gray-500">
                    # Learn, Build, and Innovate with ViteCode Technologies
                  </span>
                  {"\n"}
                  <span className="text-purple-400">class</span>{" "}
                  <span className="text-yellow-400">ViteCode</span>:
                  {"\n"}    <span className="text-purple-400">def</span>{" "}
                  <span className="text-green-400">__init__</span>
                  (<span className="text-white">self</span>):
                  {"\n"}        <span className="text-white">self.services</span> = [
                  <span className="text-orange-400">"IT Solutions"</span>,
                  <span className="text-orange-400">"Internships"</span>,
                  <span className="text-orange-400">"Live Projects"</span>]
                  {"\n\n"}    <span className="text-purple-400">def</span>{" "}
                  <span className="text-green-400">empower</span>
                  (<span className="text-white">self</span>):
                  {"\n"}        <span className="text-purple-400">return</span>{" "}
                  <span className="text-orange-400">
                    "Shaping careers with real-world experience!"
                  </span>
                  {"\n\n"}
                  <span className="text-white">vc</span> ={" "}
                  <span className="text-yellow-400">ViteCode</span>()
                  {"\n"}
                  <span className="text-white">print</span>(
                  <span className="text-white">vc</span>.
                  <span className="text-green-400">empower</span>())
                </pre>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
