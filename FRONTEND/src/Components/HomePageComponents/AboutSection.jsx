import React from "react";
import { FaLaptopCode, FaChalkboardTeacher, FaUserGraduate, FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "IT Services",
      desc: "We deliver professional IT solutions tailored to businesses and individuals.",
      icon: <FaLaptopCode className="text-5xl text-blue-500 mb-4" />,
      navigateTo: "/service",
    },
    {
      title: "IT Courses",
      desc: "Expert-led training programs with real-world projects to boost career skills.",
      icon: <FaChalkboardTeacher className="text-5xl text-blue-500 mb-4" />,
      navigateTo: "/course",
    },
    {
      title: "Internships",
      desc: "Industry-ready internships to gain practical knowledge and experience.",
      icon: <FaUserGraduate className="text-5xl text-blue-500 mb-4" />,
      navigateTo: "/contact",
    },
    {
      title: "Projects",
      desc: "Hands-on project guidance to turn your ideas into working solutions.",
      icon: <FaRocket className="text-5xl text-blue-500 mb-4" />,
      navigateTo: "/contact",
    },
  ];

  return (
    <section className="px-6 lg:py-20 ">
      <div className="max-w-6xl mx-auto text-center lg:py-0 py-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          About <span className="text-blue-600">ViteCode Technologies</span>
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-3xl mx-auto">
          At ViteCode Technologies, we shape careers through <b>IT Services</b>,<b> Training</b>, <b> Internships</b>, and <b> Projects</b>. Our goal is to bridge the gap between learning and
          real-world application with hands-on training and expert guidance.
        </p>

        {/* Service Cards */}
        <div className="cursor-pointer grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          {services.map((service, index) => (
            <div
              onClick={() => navigate(service.navigateTo)}
              key={index}
              className="bg-[#0b0a27] text-white p-6 rounded-2xl border border-gray-800 
                 hover:shadow-[0_0_20px_2px_rgba(59,130,246,0.7)] 
                 hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-2">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-500 text-center">{service.title}</h3>
              <p className="text-gray-300 text-sm text-center">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
