import React from "react";
import { Calendar, MessageSquare, History } from "lucide-react";

const features = [
  {
    icon: <Calendar size={32} />,
    title: "Easy Table Booking",
    description: "Reserve tables at your favorite restaurants in just a few clicks. No more waiting on phone calls."
  },
  {
    icon: <MessageSquare size={32} />,
    title: "Chat with Restaurant",
    description: "Direct communication with restaurant managers for special requests or inquiries."
  },
  {
    icon: <History size={32} />,
    title: "Booking History",
    description: "Keep track of all your past and upcoming reservations in one convenient place."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Why Choose TableTales & Takeaway</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "720px" }}>
            Our platform makes dining out and ordering in easier than ever with these amazing features.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="bg-white rounded-4 shadow-sm p-4 h-100 border hover-shadow transition">
                <div className="text-danger mb-3">{feature.icon}</div>
                <h5 className="fw-semibold text-dark mb-2">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
