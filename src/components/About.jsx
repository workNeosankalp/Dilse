import { motion } from "framer-motion";
import {
  Users,
  Sparkles,
  Moon,
  Coffee,
  Shield,
  CheckCircle,
  Clock,
  Lock,
} from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Users,
      title: "Companion",
      description: "Platonic companionship services.",
    },
    {
      icon: Coffee,
      title: "Social Meet",
      description: "Professional social companion.",
    },
    {
      icon: Moon,
      title: "Accommodation",
      description: "Shared accommodation services.",
    },
    {
      icon: Sparkles,
      title: "Wellness & Relaxation",
      description: "Professional massage & relaxation services.",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Flexible Access",
      description:
        "Choose services by the hour or day with instant confirmation, transparent pricing, and no hidden fees.",
    },

    {
      icon: Lock,
      title: "Secure Payments",
      description:
        "Process bookings securely with encrypted payment gateways and full transaction protection.",
    },
    {
      icon: Shield,
      title: "Verified Providers",
      description:
        "Every provider is background-verified and committed to delivering quality service with professionalism.",
    },
  ];

  const values = [
    "Discretion and privacy",
    "Mutual consent and respect",
    "Verified, high-quality experiences",
    "Comfort, safety, and trust",
  ];

  return (
    <div className="bg-linear-to-b from-white via-blue-50 to-cyan-50">
      {/* Hero Section with Couple Image */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Users
                className="text-blue-600 mb-6"
                size={60}
                strokeWidth={1.5}
              />
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">reckme</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                A professional human-support platform connecting verified
                individuals for emotional comfort, social interaction, and
                wellness experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Built with professionalism at its core, ReckMe offers a
                carefully curated marketplace for accessing high-quality
                personal support services. Every interaction is guided by trust,
                clear boundaries, consent, and mutual understanding.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Curated Experiences with Character Images */}
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
              Thoughtfully designed services that support different personal and
              social needs while maintaining a refined and respectful
              environment.
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
                className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 overflow-hidden group"
              >
                <div className="flex items-center gap-3 p-6">
                  {/* Left: Content */}
                  <div className="flex-1 relative z-10">
                    <service.icon
                      className="text-blue-600 mb-3"
                      size={36}
                      strokeWidth={1.5}
                    />
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-6 bg-linear-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Service Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined system to discover verified individuals aligned with
              your needs — simple, secure, and professional.
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
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-blue-600" size={32} />
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

      {/* Accessible Quality */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="text-blue-600 mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Accessible Quality Service
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              ReckMe is built on the belief that high-quality personal support
              experiences should be both accessible and trustworthy. Transparent
              pricing and verified providers help maintain consistent quality
              while upholding safety, privacy, and professionalism.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-6 bg-linear-to-b from-blue-50 to-cyan-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Shield className="text-blue-600 mx-auto mb-6" size={56} />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The reckme Philosophy
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
                <CheckCircle className="text-blue-600 shrink-0" size={28} />
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
              reckme is where professional human support meets quality service —
            </p>
            <p className="text-xl text-blue-600 font-semibold mt-2">
              and every connection begins reckme. 💙
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
