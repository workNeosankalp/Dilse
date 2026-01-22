import { motion } from "framer-motion";
import { Users } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-slate-50 to-cyan-50">
      <div className="text-center">
        {/* Animated Icon */}

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center mb-8"
        >
          <div className="bg-linear-to-br from-blue-500 to-cyan-500 p-4 rounded-3xl shadow-2xl">
            <img
              src="/assets/img4.png"
              alt="ReckMe Companions"
              className="w-36 h-36 md:w-44 md:h-44 object-contain drop-shadow-xl"
            />
          </div>
        </motion.div>

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-blue-600 mb-4"
        >
          <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">
            ReckMe
          </span>
        </motion.h1>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-gray-600"
        >
          Loading your companion services...
        </motion.p>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-blue-600 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
