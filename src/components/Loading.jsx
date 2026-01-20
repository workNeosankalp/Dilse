/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-linear-to-br from-orange-100 via-orange-50 to-pink-100">
      <div className="text-center">
        {/* Animated Hearts */}
        <div className="relative mb-8">
          {/* Main Heart */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <Heart className="text-orange-500" size={80} fill="currentColor" />
          </motion.div>

          {/* Floating Hearts */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${50 + (i - 1) * 40}%`,
                top: '50%',
              }}
              animate={{
                y: [-20, -60],
                opacity: [0, 1, 0],
                scale: [0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut",
              }}
            >
              <Heart className="text-pink-400" size={24} fill="currentColor" />
            </motion.div>
          ))}
        </div>

        {/* App Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-orange-600 mb-4"
        >
          Dil se
        </motion.h1>

        {/* Loading Text */}
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-lg text-gray-600"
        >
          Finding your perfect match...
        </motion.p>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-orange-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
