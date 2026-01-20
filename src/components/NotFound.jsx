/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartCrack, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 via-pink-50 to-orange-100 px-6">
      <div className="text-center max-w-2xl">
        {/* Broken Heart Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8 flex justify-center"
        >
          <HeartCrack
            className="text-orange-500"
            size={120}
            strokeWidth={1.5}
          />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-8xl md:text-9xl font-bold text-orange-600 mb-4"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Love Connection Lost!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-gray-600 mb-8 max-w-md mx-auto"
        >
          Looks like this page went on a date with someone else. Don't worry,
          there are plenty of other pages in the app!
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Home size={20} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-white hover:bg-gray-100 text-orange-500 border-2 border-orange-500 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </motion.div>

        {/* Fun Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-sm text-gray-500 mt-12"
        >
          Error code: "It's not you, it's the URL" 💔
        </motion.p>
      </div>
    </div>
  );
};

export default NotFound;
