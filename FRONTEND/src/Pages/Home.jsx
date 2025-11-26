import React from 'react'
import Header from '../Components/CommonComponents/Header'
import Footer from '../Components/CommonComponents/Footer'
import HeroSection from '../Components/HomePageComponents/HeroSection'
import WhyChooseUs from '../Components/HomePageComponents/WhyChooseUs'
import AboutSection from '../Components/HomePageComponents/AboutSection'
import CourseSection from '../Components/HomePageComponents/CourseSection'
import Testimonial from '../Components/HomePageComponents/Testimonial'

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <CourseSection />
      <Testimonial />
      <Footer />
    </>
  )
}

export default Home