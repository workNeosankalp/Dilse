import { Link } from "react-router-dom";
import { Star, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ title: "", subtitle: "" });

  const handleStoreClick = (e, type) => {
    e.preventDefault();
    if (type === "appstore") {
      setAlertMessage({
        title: "Coming Soon! 🚀",
        subtitle:
          "ReckMe will be available on the App Store very soon. Stay tuned!",
      });
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/reckme2026/",
      icon: <Instagram size={18} />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/reckme",
      icon: <Facebook size={18} />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: <Twitter size={18} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/reckme/",
      icon: <Linkedin size={18} />,
    },
  ];

  return (
    <footer className="bg-white border-t border-blue-200 relative">
      {/* Alert Notification */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 md:top-24 left-4 right-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 z-50 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 md:px-8 py-3 md:py-4 rounded-xl shadow-2xl flex items-center gap-2 md:gap-3 w-auto md:max-w-md"
          >
            <div className="bg-white/20 p-1.5 md:p-2 rounded-full shrink-0">
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

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* App Download Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Download Our App
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Google Play Button — real link */}
            <a
              href="https://play.google.com/store/apps/details?id=com.reeviy.reckme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>

            {/* App Store Button — shows Coming Soon alert */}
            <button
              onClick={(e) => handleStoreClick(e, "appstore")}
              className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </button>
          </div>

          {/* Live Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full shadow-lg"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            <span className="font-semibold text-sm md:text-base">
              Now Live on Google Play!
            </span>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-blue-300">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2 text-gray-700">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-1">
                <img
                  src="/logo.png"
                  alt="ReckMe"
                  className="h-6 w-auto object-contain brightness-0 invert"
                />
              </div>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                ReckMe
              </span>
            </div>
            <span className="text-sm ml-2">© 2026 All rights reserved</span>
          </div>

          {/* ✅ Social Media Icons using Lucide React */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2 rounded-full text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 border border-gray-200 hover:border-transparent hover:shadow-md"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm text-gray-700">
            <Link to="/terms" className="hover:text-blue-600 transition-colors">
              Terms & Conditions
            </Link>
            <Link
              to="/privacy"
              className="hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
