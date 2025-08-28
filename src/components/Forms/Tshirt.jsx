import { useState } from "react";
import { Helmet } from "react-helmet";

// Use VITE_BACKEND_URL from .env
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const Tshirt = () => {
  document.title = "T Shirt 2025 | DAAN KGP";

  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    yearOfStudy: "",
    hallOfResidence: "",
    mobileNo: "",
    coe: "",
    tshirtSize: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`https://daan-kgp-backend.onrender.com/api/tshirt-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Registered successfully! Claim your Dakshana T-Shirt 2025.");
        setFormData({
          name: "",
          rollNo: "",
          yearOfStudy: "",
          hallOfResidence: "",
          mobileNo: "",
          coe: "",
          tshirtSize: "",
        });
      } else {
        setMessage(data.error || "Something went wrong!");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="T-Shirt 2025 registration form" />
      </Helmet>

      <div className="bg-gray-50 dark:bg-gray-900 dark:text-white min-h-[80vh] py-14 pt-20">
        <section className="container mx-auto" data-aos="fade-up">
          <h1 className="my-8 border-l-8 border-red-300 py-2 pl-2 text-3xl font-bold">
            T Shirt Form 2025
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto">
            {/* Render inputs */}
            {Object.entries(formData).map(([key, value]) =>
              key !== "tshirtSize" ? (
                <input
                  key={key}
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleChange}
                  placeholder={key.replace(/([A-Z])/g, " $1")}
                  required
                  className="px-4 py-2 border border-red-200 rounded-lg shadow-sm text-red-600
                    focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500
                    transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-white hover:shadow-md"
                />
              ) : (
                <select
                  key={key}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 border border-red-200 rounded-lg shadow-sm text-red-600
                    focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500
                    transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-white hover:shadow-md"
                >
                  <option value="">Select T-shirt Size</option>
                  {["XS","S","M","L","XL","XXL"].map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              )
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          {message && (
            <p className={`mt-4 text-center text-sm font-medium ${message.includes("Registered") ? "text-green-500" : "text-red-500"}`}>
              {message}
            </p>
          )}
        </section>
      </div>
    </>
  );
};

export default Tshirt;
