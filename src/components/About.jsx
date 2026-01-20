/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Moon,
  Coffee,
  Leaf,
  Shield,
  CheckCircle,
  Users,
  Lock,
} from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Heart,
      title: "Cuddle Companionship",
      description:
        "A gentle experience focused on emotional warmth and presence. Perfect for those seeking comfort, closeness, and a sense of calm — delivered with clarity, boundaries, and mutual agreement.",
    },
    {
      icon: Coffee,
      title: "Rent a Date",
      description:
        "Whether it's coffee, dinner, an event, or a casual outing — enjoy refined social companionship tailored to your mood. Genuine company without pressure or expectations.",
    },
    {
      icon: Moon,
      title: "Bed Share / Sleeping Partner",
      description:
        "Designed for comfort and reassurance, emphasizing presence, trust, and relaxation. A discreet and carefully matched connection focused on rest and emotional ease.",
    },
    {
      icon: Leaf,
      title: "Spas & Wellness",
      description:
        "Explore premium spa and wellness services through Dil Se, bringing curated self-care and rejuvenating experiences within easy reach.",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Intelligent Matching",
      description:
        "Sleek swipe-based system aligned with your preferences — simple, intuitive, and intentional.",
    },
    {
      icon: Lock,
      title: "Secure Chat",
      description:
        "Connect and chat securely after matching, with full privacy protection.",
    },
    {
      icon: Sparkles,
      title: "Blind Date Mode",
      description:
        "Begin conversations anonymously and let chemistry take the lead before revealing identities.",
    },
  ];

  const values = [
    "Discretion and privacy",
    "Mutual consent and respect",
    "Verified, high-quality experiences",
    "Comfort, safety, and trust",
  ];

  return (
    <div className="bg-linear-to-b from-white via-orange-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heart
              className="text-orange-500 mx-auto mb-6"
              size={60}
              fill="currentColor"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-500">Dil Se</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              An exclusive companionship and dating platform crafted for those
              who value connection, comfort, and discretion.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Designed with elegance at its core, Dil Se redefines modern dating
              by offering curated experiences that go beyond traditional
              matchmaking. Every interaction is built on trust, consent, and
              mutual understanding — allowing meaningful connections to unfold
              naturally, from the heart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curated Experiences */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Curated Experiences
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thoughtfully designed services that match different companionship
              needs while maintaining a refined and respectful environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-linear-to-br from-orange-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
              >
                <service.icon
                  className="text-orange-500 mb-4"
                  size={40}
                  strokeWidth={1.5}
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligent Matching */}
      <section className="py-16 px-6 bg-linear-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Intelligent Matching, Elevated Connections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A sleek swipe-based system to discover profiles aligned with your
              preferences — simple, intuitive, and intentional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-orange-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessible Luxury */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="text-orange-500 mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Accessible Luxury
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dil Se is built on the idea that premium experiences should remain
              accessible. Our transparent and minimal pricing ensures
              exclusivity without excess.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-6 bg-linear-to-b from-orange-50 to-pink-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Shield className="text-orange-500 mx-auto mb-6" size={56} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Dil Se Philosophy
            </h2>
            <p className="text-lg text-gray-600 mb-8">We stand for:</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md"
              >
                <CheckCircle className="text-orange-500 shrink-0" size={28} />
                <p className="text-lg text-gray-800 font-medium">{value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-2xl font-bold text-gray-900">
              Dil Se is where modern companionship meets elegance —
            </p>
            <p className="text-xl text-orange-500 font-semibold mt-2">
              and every connection begins Dil Se. ❤️
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
