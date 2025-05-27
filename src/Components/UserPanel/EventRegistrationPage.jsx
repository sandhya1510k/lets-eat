import { useState } from "react";
import { CreditCard, CalendarDays } from "lucide-react";

const EventRegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    persons: 1,
    specialRequests: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "persons" ? parseInt(value) : value,
    }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("🎉 Registration successful!");
  };

  const calculateTotal = () => {
    const pricePerPerson = 20;
    return formData.persons * pricePerPerson;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-center mb-10 drop-shadow-lg">
          🎫 Join the Exciting Event!
        </h1>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Personal Info Section */}
          <div className="bg-white/80 backdrop-blur-md border border-blue-200 rounded-xl p-6 shadow-xl transition hover:shadow-2xl">
            <h2 className="flex items-center text-2xl font-semibold mb-4 text-blue-700">
              <CalendarDays className="w-6 h-6 mr-2 text-blue-600" /> Personal Information
            </h2>

            <div className="space-y-4">
              {[
                { id: "name", label: "Full Name", type: "text" },
                { id: "email", label: "Email Address", type: "email" },
                { id: "mobile", label: "Mobile Number", type: "text" },
                { id: "persons", label: "Number of Persons", type: "number" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    value={formData[field.id]}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Allergies, accessibility needs, etc."
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Payment Info Section */}
          <div className="bg-white/80 backdrop-blur-md border border-indigo-200 rounded-xl p-6 shadow-xl transition hover:shadow-2xl">
            <h2 className="flex items-center text-2xl font-semibold mb-4 text-indigo-700">
              <CreditCard className="w-6 h-6 mr-2 text-indigo-600" /> Payment Information
            </h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  value={paymentInfo.cardNumber}
                  onChange={handlePaymentChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow-sm"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    id="expiry"
                    name="expiry"
                    value={paymentInfo.expiry}
                    onChange={handlePaymentChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow-sm"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                    CVC
                  </label>
                  <input
                    id="cvc"
                    name="cvc"
                    value={paymentInfo.cvc}
                    onChange={handlePaymentChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow-sm"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-lg">
                  Total:{" "}
                  <span className="text-indigo-600">${calculateTotal().toFixed(2)}</span>
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
              >
                Confirm & Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventRegistrationPage;
