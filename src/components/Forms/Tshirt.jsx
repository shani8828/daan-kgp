import { useState } from "react";
import { Helmet } from "react-helmet";

// Use VITE_BACKEND_URL from .env
const VITE_BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const Tshirt = () => {
  document.title = "T Shirt 2025 | DAAN KGP";

  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    yearOfStudy: "", // stays "", will become a number after selection
    hallOfResidence: "",
    mobileNo: "",
    coe: "",
    tshirtSize: "",
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "rollNo") value = value.toUpperCase();
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPopup(null);

    try {
      const res = await fetch(
        `https://daan-kgp-backend.onrender.com/api/tshirt-form`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData), // yearOfStudy is already a number
        }
      );

      const data = await res.json();

      if (res.ok) {
        setPopup({
          type: "success",
          message: "Registered successfully for Dakshana T-Shirt 2025!",
        });
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
        setPopup({
          type: "error",
          message: data.error || "Something went wrong!",
        });
      }
    } catch (err) {
      setPopup({ type: "error", message: "Error: " + err.message });
    } finally {
      setLoading(false);
      setTimeout(() => setPopup(null), 3000); // auto-hide
    }
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="T-Shirt 2025 registration form" />
      </Helmet>

      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-400 text-gray-900 min-h-[80vh] py-14 pt-20">
        <section className="container mx-auto" data-aos="fade-up">
          <h1 className="my-8 border-l-8 border-red-300 dark:border-gray-400 py-2 pl-2 text-3xl font-bold">
            T-Shirt Registration 2025
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-lg mx-auto"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="px-4 py-2 border border-red-200 dark:border-gray-600 rounded-full shadow-sm text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-gray-500
              transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-gray-300 hover:shadow-md"
            />

            {/* Roll No */}
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="Roll No (Institution)"
              required
              className="px-4 py-2 border border-red-200 dark:border-gray-600 rounded-full shadow-sm text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-gray-500
              transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-gray-300 hover:shadow-md"
            />

            {/* Year of Study (dropdown 1–5) */}
            <select
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-red-200 dark:border-gray-600 rounded-full shadow-sm text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-gray-500
              transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-gray-300 hover:shadow-md"
            >
              <option value="">Select Year of Study</option>
              {[1, 2, 3, 4, 5, "PG 1", "PG 2"].map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

            {/* Hall of Residence */}
            <select
              name="hallOfResidence"
              value={formData.hallOfResidence}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-red-200 dark:border-gray-600 rounded-full shadow-sm text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-gray-500
              transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-gray-300 hover:shadow-md"
            >
              <option value="">Select Hall Of Residence</option>
              {[
                "ABV",
                "Azad",
                "BRH",
                "Gokhale",
                "HJB",
                "JCB",
                "LBS",
                "LLR",
                "MMM",
                "MS",
                "MT",
                "Nehru",
                "Patel",
                "RK",
                "RP",
                "SN/IG",
                "SNVH",
              ].map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
            {/* Mobile No */}
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              placeholder="Mobile No (9XXXXXXXXX)"
              required
              pattern="[0-9]{10}"
              maxLength={10}
              className="px-4 py-2 border border-red-200 dark:border-gray-600 rounded-full shadow-sm text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-gray-500
              transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-gray-300 hover:shadow-md"
            />

            {/* COE */}
            <select
              name="coe"
              value={formData.coe}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-red-200 dark:border-gray-600 rounded-full shadow-sm text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-gray-500
              transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-gray-300 hover:shadow-md"
            >
              <option value="">Select COE</option>
              {[
                "Dakshana Valley",
                "JNV Bengaluru Urban",
                "JNV Bundi",
                "JNV Kottayam",
                "JNV Lucknow",
                "JNV Rangareddi",
              ].map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
            {/* T-shirt Size */}
            <select
              name="tshirtSize"
              value={formData.tshirtSize}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-red-200 dark:border-gray-600 rounded-full shadow-sm text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-gray-500
              transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-gray-300 hover:shadow-md"
            >
              <option value="">Select T-shirt Size</option>
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>

            <button
              type="submit"
              disabled={loading}
              className="bg-red-400 dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-gray-700 hover:scale-105 border border-gray-500 text-gray-900 dark:text-gray-400 py-2 px-4 rounded-full transition-all duration-500 disabled:opacity-50"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          {/* ✅ Fullscreen Loader Overlay */}
          {loading && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
              <div className="w-12 h-12 relative transform rotate-45">
                <div
                  className="absolute bg-orange-500 w-4 h-4 animate-ping"
                  style={{ top: 0, left: 0, animationDuration: "1.2s" }}
                ></div>
                <div
                  className="absolute bg-orange-500 w-4 h-4 animate-ping"
                  style={{
                    top: 0,
                    right: 0,
                    animationDuration: "1.2s",
                    animationDelay: "0.15s",
                  }}
                ></div>
                <div
                  className="absolute bg-orange-500 w-4 h-4 animate-ping"
                  style={{
                    bottom: 0,
                    right: 0,
                    animationDuration: "1.2s",
                    animationDelay: "0.3s",
                  }}
                ></div>
                <div
                  className="absolute bg-orange-500 w-4 h-4 animate-ping"
                  style={{
                    bottom: 0,
                    left: 0,
                    animationDuration: "1.2s",
                    animationDelay: "0.45s",
                  }}
                ></div>
              </div>
            </div>
          )}
          {/* ✅ Popup for both success and error */}
          {popup && (
            <div
              className={`fixed top-[50%] right-5 px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in ${
                popup.type === "success"
                  ? "bg-green-600 dark:bg-emerald-700"
                  : "bg-red-600 dark:bg-red-700"
              } text-gray-200 dark:text-gray-900`}
            >
              {popup.message}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Tshirt;
