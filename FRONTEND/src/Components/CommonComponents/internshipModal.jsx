// import React, { useState } from "react";
// import { X } from "lucide-react";

// const InternshipModal = ({ isOpen, onClose }) => {
//     const [selectedOption, setSelectedOption] = useState("Web Development");
//     const [name, setName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [message, setMessage] = useState("");

//     const phoneNumber = "916380030086";

//     if (!isOpen) return null;

//     const handleSendMessage = (e) => {
//         e.preventDefault();

//         // Build WhatsApp message
//         const whatsappMessage = `Hello, I'm ${name}.
//         Phone: ${phone}
//         I'm interested in: ${selectedOption} internship program .
//         Message: ${message}`;

//         const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//             whatsappMessage
//         )}`;

//         // Open WhatsApp chat
//         window.open(url, "_blank");
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//             <div className="bg-white rounded-2xl shadow-xl w-[550px] max-w-full relative flex flex-col md:flex-row">
//                 {/* Close Button */}
//                 <button
//                     onClick={onClose}
//                     className="cursor-pointer absolute top-3 right-3 text-gray-600 hover:text-red-500"
//                 >
//                     <X size={24} />
//                 </button>

//                 {/* Right Side - Form */}
//                 <div className="w-full md:w-1/2 p-6">
//                     <h2 className="text-xl font-semibold text-gray-800 mb-3">
//                         I'm interested in...
//                     </h2>

//                     {/* Toggle Buttons */}
//                     <div className="grid grid-cols-2 gap-3 mb-5">
//                         {[
//                             "Web Development",
//                             "Data Science",
//                             "Full Stack",
//                         ].map((option) => (
//                             <button
//                                 key={option}
//                                 type="button"
//                                 onClick={() => setSelectedOption(option)}
//                                 className={`cursor-pointer px-3 py-2 rounded-lg border text-sm font-medium transition-all ${selectedOption === option
//                                         ? "bg-blue-600 text-white border-blue-600"
//                                         : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
//                                     }`}
//                             >
//                                 {option}
//                             </button>
//                         ))}
//                     </div>

//                     {/* Form Fields */}
//                     <form className="space-y-4" onSubmit={handleSendMessage}>
//                         <div>
//                             <label className="text-sm font-medium text-gray-700">
//                                 Enter Your Name <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Your Name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label className="text-sm font-medium text-gray-700">
//                                 Phone Number <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="tel"
//                                 placeholder="Your Phone Number"
//                                 value={phone}
//                                 onChange={(e) => setPhone(e.target.value)}
//                                 className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label className="text-sm font-medium text-gray-700">
//                                 Your Message <span className="text-red-500">*</span>
//                             </label>
//                             <textarea
//                                 placeholder="Your Message"
//                                 rows="3"
//                                 value={message}
//                                 onChange={(e) => setMessage(e.target.value)}
//                                 className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                                 required
//                             ></textarea>
//                         </div>

//                         {/* Submit Button */}
//                         <button
//                             type="submit"
//                             className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all"
//                         >
//                             Connect via WhatsApp
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InternshipModal;



import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const InternshipModal = ({ isOpen, onClose }) => {
    const [selectedOption, setSelectedOption] = useState("Web Development");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const phoneNumber = "916380030086";

    // 🔒 Lock background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSendMessage = (e) => {
        e.preventDefault();

        const whatsappMessage = `Hello, I'm ${name}.
Phone: ${phone}
Interested In: ${selectedOption}
Message: ${message}`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            whatsappMessage
        )}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 p-4 overflow-y-auto">
            {/* Modal Container */}
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="cursor-pointer absolute top-3 right-3 text-gray-600 hover:text-red-500"
                >
                    <X size={24} />
                </button>

                {/* Content */}
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                        I'm interested in...
                    </h2>

                    {/* Options */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                        {["Web Development", "Data Science", "Full Stack"].map(
                            (option) => (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => setSelectedOption(option)}
                                    className={`cursor-pointer px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                                        selectedOption === option
                                            ? "bg-blue-600 text-white border-blue-600"
                                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                    }`}
                                >
                                    {option}
                                </button>
                            )
                        )}
                    </div>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={handleSendMessage}>
                        <div>
                            <label className="text-sm font-medium">
                                Enter Your Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                placeholder="Your Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">
                                Your Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                rows="3"
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                required
                            ></textarea>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all"
                        >
                            Connect via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InternshipModal;
