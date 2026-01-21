import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Booking",
      description:
        "Rent companions by the hour or day. Instant confirmation with transparent pricing and no hidden fees.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Providers",
      description:
        "All companions are background-verified individuals committed to providing respectful and quality experiences.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Secure",
      description:
        "Every provider is verified, with your privacy, security, and comfort as our highest priorities.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-b from-white via-blue-50 to-cyan-50">
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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">
              reckme
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A professional companion rental platform offering verified providers
            for cuddle sessions, date or friend rentals, overnight sleep, spa &
            wellness experiences. Book by the hour or day with secure payments
            and guaranteed quality.
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
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
            >
              {/* Icon and Title on Same Line */}
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-linear-to-br from-blue-500 to-cyan-500 text-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
              </div>
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
            className="inline-flex items-center gap-3 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
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
