import { motion } from "framer-motion";
import {
  Shield,
  CheckCircle,
  AlertCircle,
  FileText,
  Lock,
  Scale,
} from "lucide-react";

const Terms = () => {
  const sections = [
    {
      icon: CheckCircle,
      title: "1. Eligibility",
      content: [
        "You must be 18 years or older to use ReckMe.",
        "By using the Platform, you confirm that all information provided is accurate, complete, and truthful.",
        "Users are responsible for complying with all local laws applicable to their location.",
      ],
    },
    {
      icon: FileText,
      title: "2. Nature of the Platform",
      content: [
        "ReckMe is a professional companion rental platform that facilitates bookings between users and verified service providers for companionship experiences.",
        "ReckMe does not guarantee any specific outcome or experience quality.",
        "All interactions are strictly mutual, consensual, and user-driven.",
        "ReckMe does not supervise or control in-person meetings.",
      ],
    },
    {
      icon: Shield,
      title: "3. User Responsibilities",
      intro: "By using ReckMe, you agree to:",
      content: [
        "Treat all users and providers with respect and dignity",
        "Maintain clear communication and consent at all times",
        "Use the Platform only for lawful and permitted purposes",
        "Not engage in harassment, abuse, coercion, fraud, or misrepresentation",
      ],
      footer:
        "Any violation may result in immediate suspension or termination of your account.",
    },
    {
      icon: Lock,
      title: "4. Bookings & Payments",
      subsections: [
        {
          subtitle: "4.1 Payment Authorization",
          points: [
            "At the time of booking a service, the applicable amount will be debited from your account.",
            "The amount will be securely held by ReckMe and will not be credited to the provider immediately.",
          ],
        },
        {
          subtitle: "4.2 OTP Confirmation",
          points: [
            "The booked service is considered successfully completed only after OTP verification.",
            "The service provider must enter the unique OTP shared at the time of the meeting.",
          ],
        },
        {
          subtitle: "4.3 Payment Release",
          points: [
            "Once the OTP is successfully entered, the held amount will be credited to the service provider's account.",
          ],
        },
        {
          subtitle: "4.4 Refund Policy",
          points: [
            "If the OTP is not entered on the scheduled date of booking, the transaction will be treated as incomplete.",
            "In such cases, the full amount will be automatically refunded to the original payment method, subject to payment gateway timelines.",
            "ReckMe acts only as a facilitator for secure transactions and does not hold funds beyond processing requirements.",
          ],
        },
      ],
    },
    {
      icon: AlertCircle,
      title: "5. Cancellations & No-Shows",
      content: [
        "Cancellation policies may vary based on service type and timing.",
        "Repeated no-shows, misuse of bookings, or false claims may lead to account restrictions.",
        "ReckMe reserves the right to investigate disputes and take appropriate action.",
      ],
    },
    {
      icon: Shield,
      title: "6. Safety & Conduct",
      intro: "ReckMe maintains a zero-tolerance policy for:",
      content: [
        "Harassment, abuse, or threatening behavior",
        "Non-consensual actions of any kind",
        "Illegal activities or solicitation",
        "Sharing explicit, harmful, or misleading content",
      ],
      footer:
        "Users are encouraged to report any violation through in-app support.",
    },
    {
      icon: FileText,
      title: "7. Profile Content & Verification",
      content: [
        "Users are solely responsible for the content shared on their profiles.",
        "ReckMe reserves the right to verify, review, modify, or remove content that violates these Terms.",
        "Impersonation or false identity representation is strictly prohibited.",
      ],
    },
    {
      icon: Lock,
      title: "8. Privacy & Data Protection",
      content: [
        "Your use of ReckMe is governed by our Privacy Policy, which outlines how we collect, use, and protect your data.",
        "ReckMe does not share personal data with third parties without lawful justification or user consent.",
      ],
    },
    {
      icon: AlertCircle,
      title: "9. Limitation of Liability",
      content: [
        "ReckMe is not responsible for the conduct, actions, or outcomes of user-provider interactions.",
        "Any meetings or experiences occur at the users' own discretion and risk.",
        "ReckMe shall not be liable for emotional distress, personal injury, financial loss, or disputes arising from user interactions.",
      ],
    },
    {
      icon: Shield,
      title: "10. Account Suspension & Termination",
      intro: "ReckMe reserves the right to:",
      content: [
        "Suspend or terminate accounts without prior notice",
        "Restrict access in case of violations or suspicious activity",
        "Remove users who compromise platform integrity or safety",
      ],
    },
    {
      icon: FileText,
      title: "11. Modifications to Terms",
      content: [
        "ReckMe may update these Terms from time to time. Continued use of the Platform after changes constitutes acceptance of the revised Terms.",
      ],
    },
    {
      icon: Scale,
      title: "12. Governing Law",
      content: [
        "These Terms shall be governed and interpreted in accordance with the laws of India, without regard to conflict of law principles.",
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
          <Scale className="text-blue-600 mx-auto mb-6" size={64} />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Effective Date: January 20, 2026
          </p>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Welcome to ReckMe. By accessing or using the ReckMe mobile
            application, website, or services ("Platform"), you agree to comply
            with and be bound by the following Terms & Conditions ("Terms").
            Please read them carefully before using the Platform.
          </p>
          <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
            <p className="text-gray-800 font-medium">
              ⚠️ If you do not agree with these Terms, you must discontinue use
              of ReckMe immediately.
            </p>
          </div>
        </motion.div>

        {/* Terms Sections */}
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

              {section.intro && (
                <p className="text-gray-700 font-medium mb-3 ml-16">
                  {section.intro}
                </p>
              )}

              {section.content && (
                <ul className="space-y-2 ml-16">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        className="text-blue-600 shrink-0 mt-1"
                        size={18}
                      />
                      <p className="text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections && (
                <div className="ml-16 space-y-4">
                  {section.subsections.map((sub, i) => (
                    <div key={i} className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">
                        {sub.subtitle}
                      </h3>
                      <ul className="space-y-2">
                        {sub.points.map((point, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <p className="text-gray-700">{point}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {section.footer && (
                <p className="text-gray-800 font-semibold mt-4 ml-16 bg-blue-50 p-3 rounded-lg">
                  {section.footer}
                </p>
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
            13. Contact Information
          </h2>
          <p className="text-gray-700 mb-4">
            For questions, concerns, or disputes related to these Terms, please
            contact:
          </p>
          <p className="text-lg font-semibold text-gray-900">
            Support Team – ReckMe
          </p>
          <p className="text-blue-600 font-medium">📧 support@ReckMe.app</p>
        </motion.div>

        {/* Final Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center bg-white rounded-xl p-8 shadow-lg border-2 border-blue-200"
        >
          <Shield className="text-blue-600 mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Final Note</h3>
          <p className="text-lg text-gray-700 italic">
            By using ReckMe, you acknowledge that you have read, understood, and
            agreed to these Terms & Conditions —
          </p>
          <p className="text-xl font-bold text-blue-600 mt-2">
            ReckMe, from the heart, with responsibility. 💙
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
