/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Coffee,
  Moon,
  Leaf,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      name: "Cuddle ",
      icon: Heart,
      img: null,
      description:
        "A gentle experience centered on emotional warmth and presence. Designed for comfort, closeness, and calm, it emphasizes clear boundaries, mutual consent, and a safe, respectful space where emotional connection naturally comes first with trust and care always.",
      background: "linear-gradient(135deg, #ff6b9d, #c44569, #8b2e59, #1a0510)",
    },
    {
      name: "Rent a Date",
      icon: Coffee,
      img: null,
      description:
        "Whether it's coffee, dinner, an event, or a casual outing — enjoy refined social companionship tailored to your mood. Genuine company without pressure or expectations. Share memorable moments with someone who understands the art of conversation and the value of your time.",
      background: "linear-gradient(135deg, #ff9a56, #ee5a24, #c44569, #2d1520)",
    },
    {
      name: "Sleeping Partner",
      icon: Moon,
      img: null,
      description:
        "Designed for comfort and reassurance, emphasizing presence, trust, and relaxation. A discreet and carefully matched connection focused on rest and emotional ease. Sometimes, the greatest comfort comes from simply not being alone during the quiet hours of the night.",
      background: "linear-gradient(135deg, #a29bfe, #6c5ce7, #5f27cd, #341f97)",
    },
    {
      name: "Spas & Wellness",
      icon: Leaf,
      img: null,
      description:
        "Explore premium spa and wellness services through Dil Se, bringing curated self-care and rejuvenating experiences within easy reach. Unwind, refresh, and reconnect with yourself through expertly curated treatments designed to restore balance and tranquility to your life.",
      background: "linear-gradient(135deg, #55efc4, #00b894, #00a885, #006b5a)",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handlePrev = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen text-white relative overflow-hidden px-6 md:px-20 py-12 md:py-0"
      style={{
        background: services[index].background,
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      {/* Visual Section - Icons/Images */}
      <div className="relative w-full md:w-150 h-100 md:h-150 flex justify-center items-center shrink-0 mb-8 md:mb-0">
        {services.map((service, i) => {
          const offset = (i - index + services.length) % services.length;
          let x = 0,
            y = 0,
            scale = 1,
            opacity = 1,
            blur = "none",
            zIndex = 1;

          if (offset === 0) {
            // Main center icon
            x = 0;
            y = 0;
            scale = 1.05;
            opacity = 1;
            blur = "none";
            zIndex = 3;
          } else if (offset === 1) {
            // Top right background icon - adjusted for mobile
            x = window.innerWidth < 768 ? 120 : 200;
            y = window.innerWidth < 768 ? -80 : -120;
            scale = window.innerWidth < 768 ? 0.5 : 0.7;
            opacity = 0.25;
            blur = "blur(4px)";
            zIndex = 1;
          } else if (offset === services.length - 1) {
            // Bottom left background icon - adjusted for mobile
            x = window.innerWidth < 768 ? -140 : -240;
            y = window.innerWidth < 768 ? 120 : 180;
            scale = window.innerWidth < 768 ? 0.45 : 0.65;
            opacity = 0.2;
            blur = "blur(5px)";
            zIndex = 0;
          } else {
            // Hide other icons
            x = 0;
            y = 0;
            scale = 0.5;
            opacity = 0;
            blur = "blur(10px)";
            zIndex = 0;
          }

          return service.img ? (
            // Render Image if available
            <img
              key={i}
              src={service.img}
              alt={service.name}
              className="absolute w-70 md:w-112.5 h-auto transition-all duration-600 ease-in-out"
              style={{
                transform: `translate(${x}px, ${y}px) scale(${scale})`,
                opacity,
                filter: blur,
                zIndex,
                willChange: "transform, opacity, filter",
              }}
            />
          ) : (
            // Render Icon if no image
            <div
              key={i}
              className="absolute transition-all duration-600 ease-in-out flex items-center justify-center"
              style={{
                transform: `translate(${x}px, ${y}px) scale(${scale})`,
                opacity,
                filter: blur,
                zIndex,
                willChange: "transform, opacity, filter",
              }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-full p-12 md:p-20 border-2 md:border-4 border-white/20">
                <service.icon
                  size={window.innerWidth < 768 ? 120 : 180}
                  strokeWidth={1.5}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Text Content with bottom padding */}
      <div className="max-w-full md:max-w-125 ml-0 md:ml-12 px-4 md:px-0 pb-20 md:pb-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ y: direction === "next" ? -80 : 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: direction === "next" ? 80 : -80, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h1
              className="text-[32px] md:text-[49px] mb-4 md:mb-5 text-yellow-100 text-center md:text-left"
              style={{ fontFamily: "'Luckiest Guy', cursive" }}
            >
              {services[index].name}
            </h1>
            <p
              className="text-[16px] md:text-[22px] text-gray-300 w-full md:w-125 text-center md:text-left"
              style={{
                fontFamily: "'Comic Neue', cursive",
                lineHeight: window.innerWidth < 768 ? "1.8" : "2.1",
              }}
            >
              {services[index].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons - Fixed at bottom center */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 md:gap-4">
        <button
          onClick={handlePrev}
          className="bg-black/40 hover:bg-yellow-100 hover:text-black text-white p-2.5 md:p-3 rounded-full transition-all duration-300"
          aria-label="Previous service"
        >
          <ChevronLeft size={24} className="md:hidden" />
          <ChevronLeft size={28} className="hidden md:block" />
        </button>
        <button
          onClick={handleNext}
          className="bg-black/40 hover:bg-yellow-100 hover:text-black text-white p-2.5 md:p-3 rounded-full transition-all duration-300"
          aria-label="Next service"
        >
          <ChevronRight size={24} className="md:hidden" />
          <ChevronRight size={28} className="hidden md:block" />
        </button>
      </div>
    </div>
  );
};

export default Services;
