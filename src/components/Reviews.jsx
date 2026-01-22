import { motion } from "framer-motion";
import { Star, Plus } from "lucide-react";
import { useState } from "react";

const Reviews = () => {
  const [showAlert, setShowAlert] = useState(false);

  // const reviews = [
  //   {
  //     name: "Priya Sharma",
  //     rating: 5,
  //     date: "January 15, 2026",
  //     review: "Amazing service! The companion I booked was professional, respectful, and made me feel completely comfortable. The booking process was seamless and secure. Highly recommend reakme!",
  //     avatar: "PS",
  //   },
  //   {
  //     name: "Rahul Verma",
  //     rating: 5,
  //     date: "January 10, 2026",
  //     review: "I booked a date companion for a corporate event and the experience exceeded my expectations. Very professional service with verified providers. Will definitely use again!",
  //     avatar: "RV",
  //   },
  //   {
  //     name: "Ananya Patel",
  //     rating: 4,
  //     date: "January 5, 2026",
  //     review: "Great platform for finding quality companionship services. All providers are background-checked which gave me peace of mind. The pricing is transparent and fair.",
  //     avatar: "AP",
  //   },
  // ];

  const handleAddReview = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className="py-16 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto mb-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">
              Clients Say
            </span>
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by hundreds of satisfied clients across India
          </p> */}
        </motion.div>

        {/* Reviews Grid */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-linear-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                  {review.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>

              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{review.review}</p>
            </motion.div>
          ))}
        </div> */}

        {/* Add Review Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={handleAddReview}
            className="inline-flex items-center gap-3 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Plus size={24} />
            Add Your Review
          </button>
        </motion.div>

        {/* Alert Message */}
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-blue-600 text-white px-8 py-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-md"
          >
            <div className="bg-white/20 p-2 rounded-full">
              <Star size={24} />
            </div>
            <div>
              <p className="font-semibold text-lg">
                Review Feature Coming Soon!
              </p>
              <p className="text-sm text-blue-100">
                You'll be able to add your own review
                shortly.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
