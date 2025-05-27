import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    stars: 5,
    text: "TableTales has completely transformed how I discover new restaurants. The booking process is seamless, and I love the special events they host!"
  },
  {
    name: "Sarah Williams",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    stars: 4,
    text: "I've been using the takeaway feature regularly, and it's so convenient. The food always arrives on time and just as delicious as dining in."
  },
  {
    name: "Michael Chen",
    role: "Business Traveler",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    stars: 5,
    text: "As someone who travels often, finding good restaurants in new cities used to be hit or miss. With TableTales, I always know I'm getting quality recommendations."
  }
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-3">What Our Users Say</h2>
          <p className="text-muted lead">
            Don't just take our word for it - see what our satisfied users have to say about their experiences.
          </p>
        </div>

        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="bg-light p-4 rounded shadow-sm h-100">
                <div className="d-flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < testimonial.stars ? "#FFCB66" : "none"}
                      stroke={i < testimonial.stars ? "#FFCB66" : "#6c757d"}
                      className="me-1"
                    />
                  ))}
                </div>
                <p className="text-muted fst-italic mb-4">"{testimonial.text}"</p>

                <div className="d-flex align-items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                  />
                  <div>
                    <h5 className="mb-0">{testimonial.name}</h5>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
