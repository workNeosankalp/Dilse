/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Heart, Sparkles, Shield } from "lucide-react";
import { useMemo } from "react";

const Hero = () => {
  const floatingHearts = useMemo(
    () =>
      [...Array(8)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
        size: 40 + Math.random() * 40,
      })),
    [],
  );

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 via-pink-50 to-orange-100 overflow-hidden px-6 pt-24 pb-16 md:pt-8 md:pb-0"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingHearts.map((heart, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
            }}
          >
            <Heart
              className="text-orange-300"
              size={heart.size}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Phone Mockup / Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-80 h-150 bg-linear-to-br from-orange-500 to-pink-500 rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                {/* App Preview Content */}
                <div className="text-center p-8">
                  <Heart
                    className="text-orange-500 mx-auto mb-4"
                    size={80}
                    fill="currentColor"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Dil Se
                  </h3>
                  <p className="text-gray-600">
                    Where connections begin from the heart
                  </p>

                  <div className="mt-8 space-y-3">
                    <div className="bg-orange-100 p-4 rounded-2xl">
                      <p className="text-sm font-medium text-gray-800">
                        💬 Smart Matching
                      </p>
                    </div>
                    <div className="bg-pink-100 p-4 rounded-2xl">
                      <p className="text-sm font-medium text-gray-800">
                        🔒 Verified Profiles
                      </p>
                    </div>
                    <div className="bg-orange-100 p-4 rounded-2xl">
                      <p className="text-sm font-medium text-gray-800">
                        ✨ Curated Experiences
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-xl"
            >
              <Sparkles className="text-orange-500" size={32} />
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
              Find Your
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-pink-500">
                Perfect Match
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-700 mb-8 leading-relaxed"
          >
            Dil Se is where modern companionship meets elegance. Experience
            curated connections built on trust, respect, and genuine chemistry.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
          >
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Shield className="text-orange-500" size={20} />
              <span className="text-sm font-medium text-gray-800">
                Verified Profiles
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Heart className="text-pink-500" size={20} />
              <span className="text-sm font-medium text-gray-800">
                Premium Experience
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <Sparkles className="text-orange-500" size={20} />
              <span className="text-sm font-medium text-gray-800">
                AI Matching
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
            {/* Google Play */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">GET IT ON</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>

            {/* App Store */}
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>
          </motion.div>

          {/* Trust Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-sm text-gray-600 mt-6"
          >
            🔒 Your privacy is our priority • Trusted by thousands
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
