import React from 'react';

const WpIcon = () => {
  const whatsappNumber = "916380030086";
  const message = "Hello, I would like to know more about your services. Please share the details.";
  const openWhatsapp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      onClick={openWhatsapp}
      className="fixed bottom-8 right-8 bg-[#25D366] rounded-full p-2 cursor-pointer z-50 shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="lg:w-13 lg:h-13 md:w-13 md:h-13 w-9 h-9"
      />
    </div>
  );
};

export default WpIcon;