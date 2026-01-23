import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Coffee,
  Moon,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Services = () => {
  // const services = [
  //   {
  //     name: "Cuddle Companion Rental",
  //     icon: Users,
  //     img: "/assets/service1.jpg",
  //     description:
  //       "Book a professional companion for emotional comfort and relaxation. Available for hourly or overnight sessions with transparent pricing. All providers are background-verified and trained in professional boundaries. Perfect for stress relief, therapeutic touch, or companionship during difficult times.",
  //     background: "linear-gradient(135deg, #60A5FA, #3B82F6, #2563EB, #1E40AF)",
  //   },
  //   {
  //     name: "Date or Friend Rental",
  //     icon: Coffee,
  //     img: "/assets/service2.jpg",
  //     description:
  //       "Rent a companion for events, dinners, weddings, or casual outings. Flexible hourly and daily rates with instant booking confirmation. Professional, discreet companions who understand social etiquette and the value of genuine conversation. Perfect for corporate events, family gatherings, or when you need a plus-one.",
  //     background: "linear-gradient(135deg, #F472B6, #EC4899, #DB2777, #BE185D)",
  //   },
  //   {
  //     name: "Sleep Partner Rental",
  //     icon: Moon,
  //     img: "/assets/service3.jpg",
  //     description:
  //       "Overnight companionship service for comfort and safety during sleep. Nightly rates available with advance booking required. All providers pass rigorous background checks and safety protocols. Designed for those experiencing loneliness, anxiety, or seeking peaceful rest with a trusted, professional presence.",
  //     background: "linear-gradient(135deg, #A78BFA, #7C3AED, #6D28D9, #5B21B6)",
  //   },
  //   {
  //     name: "Spa & Wellness Rentals",
  //     icon: Sparkles,
  //     img: "/assets/service4.jpg",
  //     description:
  //       "Access premium spa and wellness providers through our curated network. Book massage therapists, meditation guides, and wellness coaches by the hour or day. Flexible scheduling with in-home service options available. Experience professional self-care and rejuvenation tailored to your schedule and preferences.",
  //     background: "linear-gradient(135deg, #2DD4BF, #14B8A6, #0D9488, #0F766E)",
  //   },
  // ];

  const services = [
    {
      name: "Companion",
      icon: Users,
      img: "/assets/service1.jpg",
      description: "Platonic companionship services.",
      background: "linear-gradient(135deg, #60A5FA, #3B82F6, #2563EB, #1E40AF)",
    },
    {
      name: "Social Meet",
      icon: Coffee,
      img: "/assets/service2.jpg",
      description: "Professional social companion.",
      background: "linear-gradient(135deg, #F472B6, #EC4899, #DB2777, #BE185D)",
    },
    {
      name: "Accommodation",
      icon: Moon,
      img: "/assets/service3.jpg",
      description: "Shared accommodation services.",
      background: "linear-gradient(135deg, #A78BFA, #7C3AED, #6D28D9, #5B21B6)",
    },
    {
      name: "Wellness & Relaxation",
      icon: Sparkles,
      img: "/assets/service4.jpg",
      description: "Professional massage & relaxation services.",
      background: "linear-gradient(135deg, #2DD4BF, #14B8A6, #0D9488, #0F766E)",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
        fontFamily: "'DM Sans', 'Inter', sans-serif",
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
            x = isMobile ? 120 : 200;
            y = isMobile ? -80 : -120;
            scale = isMobile ? 0.5 : 0.7;
            opacity = 0.25;
            blur = "blur(4px)";
            zIndex = 1;
          } else if (offset === services.length - 1) {
            // Bottom left background icon - adjusted for mobile
            x = isMobile ? -140 : -240;
            y = isMobile ? 120 : 180;
            scale = isMobile ? 0.45 : 0.65;
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
            // Render Image if available (Circular with minimal padding)
            <div
              key={i}
              className="absolute transition-all duration-600 ease-in-out"
              style={{
                transform: `translate(${x}px, ${y}px) scale(${scale})`,
                opacity,
                filter: blur,
                zIndex,
                willChange: "transform, opacity, filter",
              }}
            >
              <div className="relative rounded-full border-4 border-white/30 shadow-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                <img
                  src={service.img}
                  alt={service.name}
                  className="rounded-full object-cover"
                  style={{
                    width: isMobile ? "240px" : "360px",
                    height: isMobile ? "240px" : "360px",
                  }}
                />
              </div>
            </div>
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
              <div className="bg-white/10 backdrop-blur-md rounded-full p-12 md:p-20 border-2 md:border-4 border-white/20 shadow-2xl">
                <service.icon size={isMobile ? 120 : 180} strokeWidth={1.5} />
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
              className="text-[32px] md:text-[49px] mb-4 md:mb-5 text-yellow-100 text-center md:text-left font-bold"
              style={{ fontFamily: "'Luckiest Guy', cursive" }}
            >
              {services[index].name}
            </h1>
            <p
              className="text-[16px] md:text-[22px] text-gray-100 w-full md:w-125 text-center md:text-left"
              style={{
                fontFamily: "'Comic Neue', cursive",
                lineHeight: isMobile ? "1.8" : "2.1",
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
          className="bg-black/40 hover:bg-white/20 hover:text-white text-white p-2.5 md:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Previous service"
        >
          <ChevronLeft size={24} className="md:hidden" />
          <ChevronLeft size={28} className="hidden md:block" />
        </button>
        <button
          onClick={handleNext}
          className="bg-black/40 hover:bg-white/20 hover:text-white text-white p-2.5 md:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
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
