import { motion } from "framer-motion";
import { Users } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-slate-50 to-cyan-50">
      <div className="text-center">
        {/* Animated Icon */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center mb-8"
        >
          <div className="bg-linear-to-br from-blue-500 to-cyan-500 p-6 rounded-3xl">
            <Users className="text-white" size={64} />
          </div>
        </motion.div>

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-blue-600 mb-4"
        >
          reckme
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
