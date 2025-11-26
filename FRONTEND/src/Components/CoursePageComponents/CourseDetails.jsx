import { BookOpen, Lightbulb, ListChecks, Users, User, Gift } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { FaLayerGroup, FaClock, FaFileAlt, FaLaptopCode, FaMedal, FaInfinity, FaPlayCircle } from "react-icons/fa";
import Header from "../CommonComponents/Header";
import Footer from "../CommonComponents/Footer";
import { Link, useParams } from "react-router-dom";
import { myContext } from "../../Context/MyContextProvider";

const CourseDetails = () => {
  const staticContent = [
    {
      id: "curriculum",
      label: "Curriculum",
      icon: "ListChecks",
      title: "Curriculum",
      paragraphs: ["This course includes:"],
      list: ["Structured lessons across multiple modules", "Hands-on practical exercises", "Real-world projects and case studies", "Guided learning with expert support"],
    },
    {
      id: "audience",
      label: "Target Audience",
      icon: "Users",
      title: "Target Audience",
      paragraphs: ["This course is designed for developers who:"],
      list: [
        "Beginners who want to start their career in tech",
        "Students looking to strengthen practical skills",
        "Professionals aiming to upskill in modern technologies",
        "Anyone interested in building real-world projects",
      ],
    },
    {
      id: "instructor",
      label: "Your Instructor",
      icon: "User",
      title: "Your Instructor",
      paragraphs: [
        "Your instructor brings over 5 years of hands-on experience in the software industry, working across multiple domains and projects. With a passion for teaching, the instructor has guided thousands of learners worldwide, making complex topics simple and practical. The sessions are structured to blend theory with real-world applications, ensuring that students not only understand the concepts but also gain the confidence to implement them. ",
      ],
    },
    {
      id: "bonus",
      label: "Exclusive Bonus",
      icon: "Gift",
      title: "Exclusive Bonus",
      paragraphs: ["Enroll today and get access to additional downloadable resources, project files, and lifetime updates to the course content."],
    },
  ];

  const { id } = useParams();
  const { courseData } = useContext(myContext);

  const [course, setCourse] = useState(null);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const selectedCourse = courseData.find((c) => c._id === id);
    setCourse(selectedCourse || null);
  }, [id, courseData]);

  useEffect(() => {
    if (!course) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -80% 0px",
        threshold: 0,
      }
    );

    const sectionIds = ["about", "learn", ...staticContent.map((item) => item.id)];
    sectionIds.forEach((id) => {
      const section = document.getElementById(`${id}`);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [course]);

  if (!course) return <p className="text-center mt-10 text-lg">Loading...</p>;

  const courseContent = [
    {
      id: "about",
      label: "About the Course",
      icon: "BookOpen",
      title: "About the Course",
      paragraphs: [course.courseAbout],
    },
    {
      id: "learn",
      label: "What You’ll Learn",
      icon: "Lightbulb",
      title: "What You’ll Learn",
      list: course.courseYouLearn,
    },
    ...staticContent, // append static tabs
  ];

  const iconMap = {
    BookOpen,
    Lightbulb,
    ListChecks,
    Users,
    User,
    Gift,
  };

  return (
    <>
      <Header />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="text-black lg:py-16 py-4 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:pl-10  gap-10 items-center">
            <div>
              <p className="text-blue-700 mb-3 lg:text-2xl font-bold">A Course You'll Actually Finish</p>
              <h1 className="text-5xl lg:block md:hidden hidden font-bold mb-4 leading-tight">{course.courseName}</h1>
              <h1 className="text-3xl lg:hidden md:block block font-bold mb-4 leading-tight">{course.courseName}</h1>
              <p className="text-gray-800 text-lg mb-8">{course.courseDescription}</p>
              <Link to="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-full font-semibold transition">Enroll Now</button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-2xl transition-all duration-300 w-full max-w-xs sm:max-w-sm md:w-[320px] mx-auto border border-blue-200">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-blue-700 text-lg">
                    <FaLayerGroup />
                  </span>
                  <span>Beginner to Advance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-700 text-lg">
                    <FaClock />
                  </span>
                  <span>{course.courseHours} Hours</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-700 text-lg">
                    <FaFileAlt />
                  </span>
                  <span>{course.courseTopicsCount} Lessons</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-700 text-lg">
                    <FaLaptopCode />
                  </span>
                  <span>Hands on Exercises</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-700 text-lg">
                    <FaMedal />
                  </span>
                  <span>Certificate of Completion</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-700 text-lg">
                    <FaInfinity />
                  </span>
                  <span>Lifetime Access</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-700 text-lg">
                    <FaPlayCircle />
                  </span>
                  <span>Learn at Your Own Pace</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Detail Section */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <aside className="hidden md:block md:col-span-1 sticky top-20 self-start">
                <ul className="space-y-6">
                  {courseContent.map((item, index) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <li key={index}>
                        <a href={`#${item.id}`} className={`flex items-center space-x-3 transition ${activeId === item.id ? "text-blue-700" : "text-black hover:text-blue-700"}`}>
                          <Icon className="w-5 h-5" />
                          <span>{item.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8">
                  <a className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 cursor-pointer"href="/contact" >Enroll Now</a>
                </div>
              </aside>

              <div className="md:col-span-3 space-y-10">
                {courseContent.map((item, index) => (
                  <div key={index} id={item.id} className="scroll-mt-15">
                    <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                    {item.paragraphs &&
                      item.paragraphs.map((p, i) => (
                        <p key={i} className="leading-7 text-black mb-4">
                          {p}
                        </p>
                      ))}
                    {item.list && (
                      <ul className="list-disc list-inside text-black space-y-2">
                        {item.list.map((li, i) => (
                          <li key={i}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
