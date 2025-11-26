import React from "react";

const testimonials = [
  {
    name: "Priya S",
    role: "Full Stack Developer",
    feedback:
      "The training was excellent! The instructors explained concepts clearly and gave real-world examples.",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Rahul M",
    role: "Data Analyst",
    feedback:
      "Great learning experience! The hands-on projects helped me apply what I learned. The support from mentors was amazing.",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Anjali K",
    role: "MERN Stack Developer",
    feedback:
      "I loved the practical approach of teaching. The course helped me understand AI & ML in depth and boosted my confidence.",
    image: "https://i.pravatar.cc/100?img=20",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transform transition duration-300"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 mx-auto rounded-full border-4 border-blue-500 mb-4"
              />
              <p className="text-gray-600 italic">“{t.feedback}”</p>
              <h3 className="text-lg font-semibold mt-4 text-gray-900">
                {t.name}
              </h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;







