import { motion } from "framer-motion";
import { Clock, Shield, Users } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-slate-50 to-cyan-50 overflow-hidden px-6 pt-28 pb-16 md:pt-10 md:pb-0"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      {/* Background gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Phone Mockup with Ghibli Character */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-80 h-150 bg-linear-to-br from-blue-600 to-cyan-600 rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-linear-to-b from-blue-50 to-white rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center p-6">
                {/* Ghibli Character Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mb-6 ml-9"
                >
                  <img
                    src="/assets/img1.png"
                    alt="Companion"
                    className="w-48 h-48 object-contain drop-shadow-2xl"
                  />
                </motion.div>

                <div className="text-center">
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    ReckMe
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">
                    Professional Companion Rentals
                  </p>
                  <p className="text-xs text-gray-500">
                    Book by the hour or day
                  </p>

                  <div className="mt-6 space-y-2">
                    <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                      <p className="text-xs font-medium text-gray-800">
                        ⏰ Flexible Booking
                      </p>
                    </div>
                    <div className="bg-cyan-50 p-3 rounded-xl border border-cyan-200">
                      <p className="text-xs font-medium text-gray-800">
                        ✓ Verified Providers
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                      <p className="text-xs font-medium text-gray-800">
                        🛡️ Safe & Secure
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
              Rent Premium
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">
                Companionship
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-700 mb-8 leading-relaxed"
          >
            Book professional companions for cuddle sessions, date rentals,
            overnight sleep, and wellness experiences. Flexible hourly and daily
            rentals available with verified, background-checked providers.
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
                Hourly/Daily Rates
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-blue-100">
              <Users className="text-blue-600" size={20} />
              <span className="text-sm font-medium text-gray-800">
                Launching soon
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
            🔒 Secure payments • Background-verified • 24/7 support
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
