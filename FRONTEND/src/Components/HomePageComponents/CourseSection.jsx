import React, { useContext } from "react";
import { myContext } from "../../Context/MyContextProvider";
import { useNavigate } from "react-router-dom";

const CourseSection = () => {
  const { courseData, url } = useContext(myContext);

  console.log(courseData);
  
  const navigate = useNavigate();

  return (
    <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900">
          Our <span className="text-blue-600">Trending Courses</span>
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Upgrade your career with our most in-demand courses, designed with industry experts to give you real-world skills.</p>

        {/* Course Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {courseData
              .filter(course => 
                ["MERN Full Stack", "Python Full Stack", "Data Analytics", "Data Science"]
                  .includes(course.courseName)
              )
             .map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl 
                transition-transform duration-300 hover:scale-105">
              <img className="rounded-t-lg w-full h-48 object-cover" src={value.courseImage ? `${url}/uploads/${value.courseImage}` : ""} alt={value.courseName} />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.courseName}</h3>
                <p className="text-gray-600 text-sm mb-4">{value.courseShortDescription}</p>
                <button className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition" onClick={() => navigate(`/course/${value._id}`)}>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;