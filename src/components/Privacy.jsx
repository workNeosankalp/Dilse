import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Wifi, Scale, Mail } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Information We Collect",
      paragraphs: [
        "We collect information to provide a secure, personalized, and seamless experience on ReckMe.",
      ],
      bullets: [
        "Name, age, gender, and profile details",
        "Photos, preferences, and bio information",
        "Contact details such as email or phone number",
        "Payment-related information (processed securely via third-party gateways)",
        "Communications and messages within the Platform",
      ],
      subTitle: "1.2 Automatically Collected Information",
      subBullets: [
        "Device information (IP address, browser, operating system)",
        "App usage data and interaction patterns",
        "Location data (approximate, if enabled)",
      ],
    },
    {
      icon: Eye,
      title: "2. How We Use Your Information",
      paragraphs: [
        "Your information is used to operate and improve the Platform, enhance your experience, and keep ReckMe safe.",
      ],
      bullets: [
        "Create and manage your account",
        "Enable service bookings and provider matching",
        "Process payments and refunds",
        "Improve user experience and platform functionality",
        "Ensure safety, security, and fraud prevention",
        "Communicate important updates, support, and notifications",
      ],
      note: "ReckMe does not sell your personal data to third parties.",
    },
    {
      icon: Wifi,
      title: "3. Service Bookings & Provider Matching",
      bullets: [
        "Profile information is visible only to verified providers within the Platform.",
        "Communications are accessible only after confirmed bookings.",
        "Users control what they share and with whom.",
        "All interactions are monitored for safety and policy compliance.",
      ],
    },
    {
      icon: Lock,
      title: "4. Payments & Financial Data",
      bullets: [
        "Payment transactions are handled through secure, trusted third-party payment gateways.",
        "ReckMe does not store complete card, bank, or UPI details.",
        "Transaction data is used only for processing bookings, verification, and refunds.",
      ],
    },
    {
      icon: Shield,
      title: "5. Data Sharing & Disclosure",
      paragraphs: [
        "We may share limited data only under specific circumstances, and always with strong safeguards in place.",
      ],
      bullets: [
        "Required to process payments or refunds",
        "Necessary to comply with legal obligations",
        "Required to investigate fraud, abuse, or policy violations",
        "Needed to protect the rights, safety, or property of ReckMe or its users",
      ],
      note: "All third-party partners are bound by strict confidentiality and data protection standards.",
    },
    {
      icon: FileText,
      title: "6. Data Retention",
      bullets: [
        "Personal data is retained only as long as necessary to provide services or meet legal requirements.",
        "Users may request account deletion, after which personal data will be removed or anonymized, except where legally required.",
      ],
    },
    {
      icon: Eye,
      title: "7. User Rights & Control",
      bullets: [
        "Access and update your personal information",
        "Control profile visibility and preferences",
        "Request data correction or deletion",
        "Withdraw consent where applicable",
      ],
      note: "Requests can be made through in-app support or via email.",
    },
    {
      icon: Shield,
      title: "8. Safety & Security Measures",
      bullets: [
        "Secure servers and encrypted connections",
        "Access controls and monitoring systems",
        "Abuse reporting and moderation mechanisms",
      ],
      note: "While we take strong measures to protect your data, no system can guarantee absolute security.",
    },
    {
      icon: FileText,
      title: "9. Children's Privacy",
      bullets: [
        "ReckMe is strictly intended for users 18 years and above.",
        "We do not knowingly collect data from minors. Any such account will be terminated immediately upon discovery.",
      ],
    },
    {
      icon: Wifi,
      title: "10. Third-Party Links",
      bullets: [
        "The Platform may contain links to third-party services (e.g., payment providers, wellness partners).",
        "ReckMe is not responsible for the privacy practices of these external services.",
      ],
    },
    {
      icon: FileText,
      title: "11. Policy Updates",
      bullets: [
        "We may update this Privacy Policy from time to time.",
        "Any changes will be communicated through the Platform, and continued use indicates acceptance of the updated policy.",
      ],
    },
    {
      icon: Scale,
      title: "12. Governing Law",
      bullets: [
        "This Privacy Policy is governed by the laws of India, including applicable data protection regulations.",
      ],
    },
  ];

  return (
    <div className="bg-linear-to-b from-white via-blue-50 to-cyan-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Lock className="text-blue-600 mx-auto mb-6" size={64} />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Effective Date: January 20, 2026
          </p>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            At ReckMe, your privacy is a priority. This Privacy Policy explains
            how we collect, use, store, and protect your personal information
            when you access or use the ReckMe mobile application, website, or
            related services ("Platform").
          </p>
          <div className="mt-6 bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r-lg">
            <p className="text-gray-800 font-medium">
              By using ReckMe, you consent to the practices described in this
              Privacy Policy.
            </p>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md p-8 border border-blue-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                  <section.icon className="text-blue-600" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>

              {section.paragraphs && (
                <div className="ml-16 space-y-3 mb-3">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {section.bullets && (
                <ul className="space-y-2 ml-16">
                  {section.bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <p className="text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              )}

              {section.subTitle && (
                <div className="ml-16 mt-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {section.subTitle}
                  </h3>
                  <ul className="space-y-2">
                    {section.subBullets?.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <p className="text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.note && (
                <div className="mt-5 ml-16 bg-linear-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-l-4 border-blue-600">
                  <p className="text-gray-800 font-semibold text-sm">
                    <span className="text-blue-600">Note:</span> {section.note}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-linear-to-br from-blue-100 to-cyan-100 rounded-xl p-8 text-center border border-blue-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            13. Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            For questions, concerns, or privacy-related requests, contact:
          </p>
          <p className="text-lg font-semibold text-gray-900">
            Privacy Team – ReckMe
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Mail className="text-blue-600" size={20} />
            <p className="text-blue-600 font-medium">privacy@ReckMe.app</p>
          </div>
        </motion.div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center bg-white rounded-xl p-8 shadow-lg border-2 border-blue-200"
        >
          <Shield className="text-blue-600 mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Our Commitment
          </h3>
          <p className="text-lg text-gray-700">
            At ReckMe, privacy is not just a policy — it's a promise.
          </p>
          <p className="text-xl font-bold text-blue-600 mt-2">
            Your trust matters, and every connection begins ReckMe, from the
            heart. 💙
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
