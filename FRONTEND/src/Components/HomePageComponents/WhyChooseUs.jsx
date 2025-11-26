import React from "react";
import { CheckCircle, Users, Award, Rocket } from "lucide-react";

const WhyChooseUs = () => {
  const points = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Practical Learning",
      desc: "Learn through hands-on projects and real-world case studies.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Expert Mentors",
      desc: "Guidance from top industry experts and certified trainers.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "Career Growth",
      desc: "Boost your resume with certifications and real-world skills.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-pink-600" />,
      title: "Future-Ready",
      desc: "Stay ahead with the latest tools, AI, and emerging tech.",
    },
  ];

  return (
    <section className="bg-gray-50  relative lg:py-25 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="relative  max-w-7xl container mx-auto px-6 py-8 lg:py-0 text-center">
        {/* Heading */}
        <h2 className="text-5xl hidden lg:block md:block font-bold mb-4 text-gray-900">
          Why <span className="text-blue-600">Choose Us?</span>
        </h2>
        <h2 className="text-3xl block lg:hidden md:hidden font-bold mb-4 text-gray-900">
          Why <span className="text-blue-600">Choose Us?</span>
        </h2> 
        <p className="text-lg text-gray-600 mb-12">We are dedicated to empowering students with real-world skills and industry-driven learning.</p>

        {/* Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {points.map((point, index) => (
            <div key={index} className="flex items-start space-x-4 transform hover:scale-105 transition duration-300">
              <div>{point.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">{point.title}</h3>
                <p className="text-gray-700 text-sm">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;