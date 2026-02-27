import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Wifi, Scale, Mail } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Definitions",
      paragraphs: [
        "Platform: The ReckMe mobile application, website, and associated web-based services available at https://www.reckme.com.",
        "Account: Your secure, personal area on the Platform through which you access and manage services.",
        "User: A person who uses, accesses, registers, or interacts with the Platform.",
        "Services: The range of features, tools, and offerings provided by ReckMe through the Platform, including human-support services, social interactions, overnight presence coordination, and wellness experiences.",
        "Personal Data: Any information that identifies or can reasonably be used to identify you, directly or indirectly.",
      ],
    },
    {
      icon: FileText,
      title: "2. Data Controller",
      paragraphs: [
        "ReckMe is responsible for the collection and use of your Personal Data under this Privacy Policy.",
        "Contact: info.rm@reckme.com",
      ],
    },
    {
      icon: Eye,
      title: "3. Information We Collect",
      bullets: [
        "Full name",
        "Email address", 
        "Mobile phone number",
        "Date of birth",
        "Gender",
        "Profile images",
        "Optional personal description",
        "Preferences related to interactions",
        "Social interaction choices",
        "Messages you send within the Platform",
        "Support requests and feedback",
        "Payment confirmations and billing details (processed through third-party gateways; we do not store full bank or card details)",
      ],
      subTitle: "Automatically Collected Data",
      subBullets: [
        "Device type, operating system and version",
        "IP address",
        "Usage and performance data",
        "Login dates and times",
        "Feature usage",
        "Interaction logs",
        "Notification preferences",
      ],
      note: "Some data are collected with your consent; you can manage preferences in your account settings.",
    },
    {
      icon: Wifi,
      title: "4. How We Use Your Data",
      bullets: [
        "Creating and managing your account",
        "Delivering services you request",
        "Providing customer support",
        "Managing notifications and alerts",
        "Sending updates about the Platform",
        "Responding to inquiries or support requests",
        "Sending transactional emails related to your use",
        "Understanding how you use the Platform",
        "Improving user experience",
        "Conducting analytics and system optimization",
      ],
      note: "With your consent, we may send you promotional messages or offers relevant to your use of the Platform. You can withdraw your consent at any time.",
    },
    {
      icon: Lock,
      title: "5. Sharing Your Information",
      paragraphs: [
        "ReckMe does not sell your Personal Data to third parties.",
      ],
      bullets: [
        "Trusted service providers (hosting, analytics, payment processors)",
        "Law enforcement or regulatory authorities when required by law",
        "Third parties to enforce our Terms of Service or protect rights & safety",
      ],
      note: "Any partner with access to shared data must comply with this policy and applicable law.",
    },
    {
      icon: Wifi,
      title: "6. Cookies & Similar Technologies",
      bullets: [
        "Maintain session and security",
        "Analyze performance",
        "Improve user experience",
      ],
      note: "You can manage cookie preferences through your browser settings. For more details, see our Cookie Policy.",
    },
    {
      icon: Shield,
      title: "7. Data Security & Protection",
      bullets: [
        "We implement reasonable technical and organizational measures to protect your information from unauthorized access, loss, alteration, or misuse.",
      ],
      note: "However, no method of transmission or storage is 100% secure. You are responsible for protecting your own devices and login credentials.",
    },
    {
      icon: FileText,
      title: "8. Data Retention",
      bullets: [
        "We retain your data for as long as required to fulfill the purposes in this policy, comply with legal obligations, resolve disputes, and enforce agreements.",
        "You may request deletion of your account and personal data by contacting us.",
      ],
    },
    {
      icon: Eye,
      title: "9. Children's Privacy",
      bullets: [
        "ReckMe is intended for users 18 years and older.",
        "We do not knowingly collect or retain personal data from minors.",
        "If you believe a minor has provided us with personal data, please contact us so we can delete it.",
      ],
    },
    {
      icon: Scale,
      title: "10. Your Rights",
      bullets: [
        "Access your personal data",
        "Correct inaccuracies",
        "Request deletion",
        "Object to certain processing",
        "Restrict processing",
        "Withdraw consent",
      ],
      note: "Depending on applicable law. To exercise your rights, contact our support team at info.rm@reckme.com.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-cyan-50 py-24 px-6">
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
            Effective Date: February 10, 2026
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Last Updated: February 10, 2026
          </p>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            This Privacy Policy explains how ReckMe ("we," "us," or "our") collects, uses, shares, and protects your personal information when you access or use the ReckMe website (https://www.reckme.com) or any associated services, features, or content (collectively, the "Platform"). This policy also explains your rights regarding your personal information.
          </p>
          <div className="mt-6 bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r-lg">
            <p className="text-gray-800 font-medium">
              By accessing the Platform or using our services, you agree to the terms of this Privacy Policy.
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
                <div className="ml-16 mt-6">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">
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
                <div className="mt-6 ml-16 bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-l-4 border-blue-600">
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
          className="mt-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-8 text-center border border-blue-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            11. Contact Us
          </h2>
          <p className="text-gray-700 mb-6">
            If you have questions about this Privacy Policy, data practices, or wish to exercise your rights:
          </p>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mail className="text-blue-600" size={24} />
            <p className="text-xl font-semibold text-blue-600">info.rm@reckme.com</p>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            12. Changes to This Policy: We may update this Privacy Policy periodically. When changes are significant, we will notify you via the Platform or email. The latest version will always be available at https://www.reckme.com/privacy
          </p>
          <p className="text-sm font-semibold text-gray-800 mt-4">
            Legal Notices & Jurisdiction: This Privacy Policy is governed by the applicable laws of India, including rules related to data protection and user privacy.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;