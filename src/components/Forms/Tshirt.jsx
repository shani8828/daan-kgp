import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:5000";


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
  const [device, setDevice] = useState("desktop"); // default

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Detect device
 // Detect device once on mount
  useEffect(() => {
    (async () => {
      try {
        const { default: UAParser } = await import("ua-parser-js");
        const parser = new UAParser();
        const result = parser.getResult();

        let deviceType = "desktop";
        if (result.device.type === "mobile") deviceType = "phone";
        else if (result.device.type === "tablet") deviceType = "tablet";
        else if (result.os.name === "Mac OS") deviceType = "mac";

        setDevice(deviceType);
      } catch (err) {
        console.error("Failed to detect device:", err);
      }
    })();
  }, []);


  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${BACKEND_URL}/api/tshirt-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, device: device }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("You’re officially registered to claim your Dakshana T-Shirt 2025.");
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
        setMessage(data.error || "Oops...Something went wrong!!!");
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
        <meta
          name="description"
          content="This page includes T-Shirt 2025 registration form."
        />
      </Helmet>

      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-14 pt-20 min-h-[80vh]">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-red-300 py-2 pl-2 text-3xl font-bold">
            T Shirt Form 2025
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-lg mx-auto"
          >
            <input
              className="px-4 py-2 border border-red-200 rounded-lg shadow-sm  text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500
              transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
              hover:shadow-md "
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />

            <input
              className="px-4 py-2 border border-red-200 rounded-lg shadow-sm  text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500
              transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
              hover:shadow-md "
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="Roll No (Institution)"
              required
            />

            <input
              className="px-4 py-2 border border-red-200 rounded-lg shadow-sm  text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500
              transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
              hover:shadow-md "
              type="text"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              placeholder="Year of Study"
              required
            />

            <input
              className="px-4 py-2 border border-red-200 rounded-lg shadow-sm  text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500
              transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
              hover:shadow-md "
              type="text"
              name="hallOfResidence"
              value={formData.hallOfResidence}
              onChange={handleChange}
              placeholder="Hall of Residence"
              required
            />

            <input
              className="px-4 py-2 border border-red-200 rounded-lg shadow-sm  text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500
              transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
              hover:shadow-md "
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              placeholder="Mobile No"
              required
            />

            <input
              className="px-4 py-2 border border-red-200 rounded-lg shadow-sm  text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500
              transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
              hover:shadow-md "
              type="text"
              name="coe"
              value={formData.coe}
              onChange={handleChange}
              placeholder="COE"
              required
            />

            <select
              className="px-4 py-2 border border-red-200 rounded-lg shadow-sm  text-red-600
              focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500
              transition-all duration-300 ease-in-out
              dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
              hover:shadow-md "
              name="tshirtSize"
              value={formData.tshirtSize}
              onChange={handleChange}
              required
            >
              <option value="">Select T-shirt Size</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>

            <button
              type="submit"
              className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-center text-sm font-medium ${
                message.includes("T-Shirt")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </section>
      </div>
    </>
  );
};

export default Tshirt;
