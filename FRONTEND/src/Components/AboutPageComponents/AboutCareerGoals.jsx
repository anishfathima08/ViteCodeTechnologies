import React from 'react'
import { FaLaptopCode, FaChalkboardTeacher, FaBullseye } from "react-icons/fa";

const AboutCareerGoals = () => {
  return (
    <>
       <section className="bg-white text-black max-w-7xl mx-auto px-6 md:px-16 py-16">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Your Career Goals — <span className="text-blue-600">Your Way.</span>
        </h2>
        <p className="text-gray-600 mt-4">
          ViteCode Technologies delivers training aligned with real industry needs. 
          With our guided learning, success isn’t just possible—it’s predictable.
        </p>
      </div>

      {/* Features (Icons + Text) */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Feature 1 */}
        <div>
          <FaLaptopCode className="text-blue-600 text-6xl mb-4" />
          <p className="text-lg font-medium">
            Learn skills in Data Science, Data Analysis, <br /> and Full Stack Development
          </p>
        </div>

        {/* Feature 2 */}
        <div>
          <FaChalkboardTeacher className="text-blue-600 text-6xl mb-4" />
          <p className="text-lg font-medium">
            Train through videos, hands-on labs, <br /> and practice tests
          </p>
        </div>

        {/* Feature 3 */}
        <div>
          <FaBullseye className="text-blue-600 text-6xl mb-4" />
          <p className="text-lg font-medium">
            Build a personalized learning plan <br /> that fits your goals
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutCareerGoals