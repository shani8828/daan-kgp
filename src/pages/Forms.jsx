import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Forms = () => {
  useEffect(() => {
    document.title = "Our Forms | DAAN KGP";
  }, []);

  return (
    <div className="min-h-[80vh] bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-400">
      <Helmet>
        <meta
          name="description"
          content="This page includes our forms related queries."
        />
      </Helmet>

      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-red-300 py-2 pl-2 text-3xl font-bold">
          Our Forms
        </h1>
        <div className="flex justify-center items-center gap-4 container">
          <Link
            to="/tshirt-form"
            className="block max-w-xs mx-auto my-4 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-700 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-red-400 transition-all duration-300 overflow-hidden"
          >
            {/* Image Preview */}
            <div className="w-full h-40 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dcwwptwzt/image/upload/v1758206325/tshirt-form_g8yz8e.avif"
                alt="T-Shirt Registration 2025"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-red-600 dark:text-red-400">
                T-Shirt Registration 2025
              </h2>
              <p className="text-gray-700 dark:text-gray-400 mt-1 text-sm">
                Fill out your details to register.
              </p>
              <p className="text-gray-800 dark:text-gray-400 mt-4 text-sm font-bold">
                Deadline : 23 Sept, 2025
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Forms;
