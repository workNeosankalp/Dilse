import { motion, AnimatePresence } from "framer-motion";
import { Clock, Shield, Star } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ title: "", subtitle: "" });

  const handlePlayStoreClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.reeviy.reckme",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleAppStoreClick = (e) => {
    e.preventDefault();
    setAlertMessage({
      title: "Coming Soon! 🚀",
      subtitle:
        "ReckMe will be available on the App Store very soon. Stay tuned!",
    });
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 overflow-hidden px-6 pt-28 pb-16 md:pt-10 md:pb-0"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      {/* Alert Notification */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 md:top-24 left-4 right-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 z-50 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 md:px-8 py-3 md:py-4 rounded-xl shadow-2xl flex items-center gap-2 md:gap-3 w-auto md:max-w-md"
          >
            <div className="bg-white/20 p-1.5 md:p-2 rounded-full flex-shrink-0">
              <Star size={20} className="md:w-6 md:h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm md:text-lg">
                {alertMessage.title}
              </p>
              <p className="text-xs md:text-sm text-blue-100">
                {alertMessage.subtitle}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full overflow-hidden rounded-[2.5rem]">
                <img
                  src="/assets/phoneImg.jpeg"
                  alt="Phone Screen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-xl border-2 border-blue-200"
            >
              <Clock className="text-blue-600" size={32} />
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Access Premium
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Human Support
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-700 mb-8 leading-relaxed"
          >
            Access verified professionals for emotional well-being, social
            interaction and wellness-focused experiences. Services are available
            on an hourly or daily basis with secure payments and consistent
            quality.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
          >
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-blue-100">
              <Shield className="text-blue-600" size={20} />
              <span className="text-sm font-medium text-gray-800">
                Verified Providers
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-cyan-100">
              <Clock className="text-cyan-600" size={20} />
              <span className="text-sm font-medium text-gray-800">
                Flexible Scheduling
              </span>
            </div>
          </motion.div>

          {/* App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            {/* ✅ Google Play — opens real link */}
            <button
              onClick={handlePlayStoreClick}
              className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">GET IT ON</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </button>

            {/* ✅ App Store — shows Coming Soon alert */}
            <button
              onClick={handleAppStoreClick}
              className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </button>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-sm text-gray-600 mt-6"
          >
            🔒 Secure payments • Background-verified • 24/7 support
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
