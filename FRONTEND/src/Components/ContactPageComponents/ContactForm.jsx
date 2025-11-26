import React, { useContext } from "react";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { myContext } from "../../Context/MyContextProvider";

const ContactForm = () => {
  const {
    contactEnquiryName,
    setContactEnquiryName,
    contactEnquiryNumber,
    setContactEnquiryNumber,
    contactEnquiryMessage,
    setContactEnquiryMessage,
    selectedContactInterests,
    contactInterestsList,
    contactEnquirySubmitted,
    toggleInterest,
    contactEnquirySubmitForm,
  } = useContext(myContext);

  return (
    <div className="bg-gray-50">
      <div className="text-4xl text-blue-700 pt-8 font-bold text-center">
        <h1>Contact Us</h1>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.5)] m-4 my-10">
          {/* Left Section */}
          <div className="bg-[#0b0a27] text-white p-8 flex flex-col justify-between md:w-1/2">
            
            <div>
              <h1 className="leading-15 lg:text-5xl md:text-4xl font-bold lg:block md:block hidden">
                Let’s Design Your <br />
                <span className="text-blue-400">Success</span> Together...
              </h1>
              <h1 className="text-3xl font-bold lg:hidden md:hidden block">
                Let’s Design Your <br />
                <span className="text-blue-400">Success</span> Together...
              </h1>

              <div className="mt-8 space-y-6">
                <div className="hidden md:flex lg:flex items-center gap-3">
                  <span className="text-blue-400">
                    <HiMail size={28} />
                  </span>
                  <a href='mailto:vitecodetechnologies@gmail.com' className="hover:underline">vitecodetechnologies@gmail.com</a>
                </div>
                <div className="lg:hidden md:hidden flex items-center gap-3">
                  <span className="text-blue-400">
                    <HiMail size={28} />
                  </span>
                  <a href='mailto:vitecodetechnologies@gmail.com' className="hover:underline">vitecodetechnologies<br />@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 rounded-lg w-fit">
                  <span className="text-blue-400">
                    <HiPhone size={28} />
                  </span>
                  <a href="tel:9876543210" className="hover:underline">+91 98765 43210</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">
                    <HiLocationMarker size={28} />
                  </span>
                  <span>Trichy, TamilNadu</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10 text-xl">
              <a href="#" className="hover:text-blue-400">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaXTwitter />
              </a>
            </div>

          </div>

          {/* Right Section */}
          <div className="bg-white p-8 md:w-1/2">
            <p className="font-medium mb-4 lg:text-3xl md:text-2xl text-xl">I'm interested in...</p>

            <div className="flex flex-wrap gap-3">
              {contactInterestsList.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => toggleInterest(value)}
                  className={`px-4 py-2 border rounded-lg text-sm cursor-pointer ${
                    selectedContactInterests.includes(value) ? "bg-blue-600 text-white border-blue-600" : "border-gray-300 text-gray-700 hover:border-blue-700 hover:text-blue-700"
                  }`}>
                  {value}
                </button>
              ))}
            </div>

            {contactEnquirySubmitted && selectedContactInterests.length === 0 && <p className="text-red-500 text-sm mb-4">* Please select at least one interest</p>}

            <form className="space-y-5 mt-5" onSubmit={contactEnquirySubmitForm}>
              <div>
                <label className="block text-sm mb-2 font-medium">
                  Enter Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                  placeholder="Your Name"
                  value={contactEnquiryName}
                  onChange={(e) => setContactEnquiryName(e.target.value)}
                />
                {contactEnquirySubmitted && !contactEnquiryName && <p className="text-red-500 text-sm">* Name is required</p>}
              </div>

              <div>
                <label className="block text-sm mb-2 font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                  placeholder="Your Phone Number"
                  value={contactEnquiryNumber}
                  maxLength={10}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    if (val.length <= 10) setContactEnquiryNumber(val);
                  }}
                />

                {contactEnquirySubmitted && !contactEnquiryNumber && <p className="text-red-500 text-sm">* Phone number is required</p>}

                {contactEnquirySubmitted && contactEnquiryNumber.length > 0 && contactEnquiryNumber.length !== 10 && <p className="text-red-500 text-sm">* Phone number must be 10 digits</p>}
              </div>

              <div>
                <label className="block text-sm mb-2 font-medium">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="3"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                  placeholder="Your Message"
                  value={contactEnquiryMessage}
                  onChange={(e) => setContactEnquiryMessage(e.target.value)}
                />
                {contactEnquirySubmitted && !contactEnquiryMessage && <p className="text-red-500 text-sm">* Message is required</p>}
              </div>

              <button type="submit" className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
