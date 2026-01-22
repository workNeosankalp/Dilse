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
      title: "Cuddle Companion Rental",
      description:
        "Book professional companions for emotional comfort and relaxation. Available for hourly or overnight sessions with verified providers trained in professional boundaries and therapeutic presence.",
      image: "/assets/img1.png", // Girl in saree
    },
    {
      icon: Coffee,
      title: "Date or Friend Rental",
      description:
        "Rent a companion for events, dinners, weddings, or casual outings. Flexible hourly rates with professional, discreet companions who understand social etiquette and genuine conversation.",
      image: "/assets/img2.png", // Girl standing
    },
    {
      icon: Moon,
      title: "Sleep Partner Rental",
      description:
        "Overnight companionship service for comfort and safety during sleep. Nightly rates available with advance booking. All providers pass rigorous background checks and safety protocols.",
      image: "/assets/img4.png", // Couple
    },
    {
      icon: Sparkles,
      title: "Wellness & Spa Rentals",
      description:
        "Access premium spa and wellness providers through our curated network. Book massage therapists, meditation guides, and wellness coaches by the hour or day.",
      image: "/assets/img3.png", // Use this instead, or upload new bg-removed version
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Flexible Booking",
      description:
        "Rent companions by the hour or day. Instant confirmation with transparent pricing and no hidden fees.",
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
                A professional companion rental platform offering verified
                providers for cuddle sessions, date or friend rentals, overnight
                sleep, spa & wellness experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Designed with professionalism at its core, reckme offers a
                curated marketplace for booking quality companionship
                experiences. Every interaction is built on trust, consent, and
                mutual understanding.
              </p>
            </motion.div>

            {/* Right: Couple Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src="/assets/img1.png"
                alt="Companions"
                className="w-full max-w-md h-auto drop-shadow-2xl"
              />
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

                  {/* Right: Character Image - Tighter Spacing */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="shrink-0"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-24 h-32 md:w-28 md:h-36 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
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
              Professional Service Rental Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined booking system to discover verified providers
              aligned with your needs — simple, secure, and professional.
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
              reckme is built on the idea that premium companionship experiences
              should remain accessible. Our transparent pricing and verified
              providers ensure quality service without compromising safety or
              professionalism.
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
              reckme is where professional companionship meets quality service —
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
