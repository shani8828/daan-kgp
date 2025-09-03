import { useState } from "react";
import { Helmet } from "react-helmet";

const VITE_BACKEND_link =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

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
      const res = await fetch(`${VITE_BACKEND_link}/api/tshirt-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

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
        setPopup({ type: "error", message: data.error || "Something went wrong!" });
      }
    } catch (err) {
      setPopup({ type: "error", message: "Error: " + err.message });
    } finally {
      setLoading(false);
      setTimeout(() => setPopup(null), 3000);
    }
  };

  const baseClasses =
    "px-4 py-2 border border-red-200 dark:border-gray-600 rounded-full shadow-sm text-red-600 " +
    "focus:outline-none focus:ring-2 focus:ring-red-200 dark:focus:ring-gray-500 " +
    "transition-all duration-300 ease-in-out dark:bg-gray-800 dark:text-gray-300 hover:shadow-lg dark:hover:shadow-gray-800";

  const FormInput = ({ type = "text", name, value, onChange, placeholder, required, ...props }) => (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={baseClasses}
      {...props}
    />
  );

  const FormSelect = ({ name, value, onChange, required, options, placeholder }) => (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={baseClasses}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Excited for Dakshana T-Shirt 2025? Don’t miss out! Register now by filling in your details and grab your tee to represent the spirit of Dakshana."
        />
      </Helmet>

      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="w-12 h-12 relative transform rotate-45">
            {["0s", "0.15s", "0.3s", "0.45s"].map((delay, i) => (
              <div
                key={i}
                className="absolute bg-red-600 dark:bg-gray-400 w-4 h-4 animate-ping"
                style={{
                  top: i < 2 ? 0 : "auto",
                  bottom: i >= 2 ? 0 : "auto",
                  left: i === 0 || i === 3 ? 0 : "auto",
                  right: i === 1 || i === 2 ? 0 : "auto",
                  animationDuration: "1.2s",
                  animationDelay: delay,
                }}
              ></div>
            ))}
          </div>
        </div>
      )}

      {/* Popup */}
      {popup && (
        <div
          className={`fixed top-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-[9999] animate-fade-in ${
            popup.type === "success"
              ? "bg-green-600 dark:bg-emerald-700"
              : "bg-red-600 dark:bg-red-700"
          } text-white text-center`}
        >
          {popup.message}
        </div>
      )}

      {/* Form */}
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-400 text-gray-900 min-h-[80vh] py-14 pt-20">
        <section className="container mx-auto" data-aos="fade-up">
          <h1 className="my-8 border-l-8 border-red-300 dark:border-gray-400 py-2 pl-2 text-3xl font-bold">
            T-Shirt Registration 2025
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto">
            <FormInput name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <FormInput name="rollNo" value={formData.rollNo} onChange={handleChange} placeholder="Roll No (Institution)" required />
            <FormSelect
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              placeholder="Year of Study"
              options={[1, 2, 3, 4, 5, "PG 1", "PG 2"]}
              required
            />
            <FormSelect
              name="hallOfResidence"
              value={formData.hallOfResidence}
              onChange={handleChange}
              placeholder="Hall Of Residence"
              options={[
                "ABV","Azad","BRH","Gokhale","HJB","JCB","LBS","LLR","MMM","MS","MT","Nehru","Patel","RK","RP","SN/IG","SNVH"
              ]}
              required
            />
            <FormInput
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              placeholder="Mobile No (9XXXXXXXXX)"
              required
              pattern="[0-9]{10}"
              maxLength={10}
            />
            <FormSelect
              name="coe"
              value={formData.coe}
              onChange={handleChange}
              placeholder="COE"
              options={[
                "Dakshana Valley","JNV Bengaluru Urban","JNV Bundi","JNV Kottayam","JNV Lucknow","JNV Rangareddi"
              ]}
              required
            />
            <FormSelect
              name="tshirtSize"
              value={formData.tshirtSize}
              onChange={handleChange}
              placeholder="T-shirt Size"
              options={["XS","S","M","L","XL","XXL"]}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-red-400 dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-gray-700 hover:scale-105 border border-gray-500 text-gray-900 dark:text-gray-400 py-2 px-4 rounded-full transition-all duration-500 disabled:opacity-50"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Tshirt;