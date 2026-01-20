/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Heart, Sparkles, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  const features = [
    {
      icon: Heart,
      title: "Genuine Connections",
      description:
        "Build meaningful relationships based on trust, respect, and mutual understanding.",
    },
    {
      icon: Sparkles,
      title: "Curated Experiences",
      description:
        "Premium companionship services designed for comfort, elegance, and discretion.",
    },
    {
      icon: Shield,
      title: "Safe & Verified",
      description:
        "Every profile is verified. Your privacy and security are our top priorities.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-b from-white via-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-pink-500">
              Dil Se
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            An exclusive companionship and dating platform crafted for those who
            value connection, comfort, and discretion. Every interaction is
            built on trust, consent, and mutual understanding.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300"
            >
              <div className="bg-linear-to-br from-orange-500 to-pink-500   w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
               
                <feature.icon
                  className="text-white"
                  size={32}
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-3 bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Learn More About Us
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={24}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
