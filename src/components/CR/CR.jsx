import React from "react";
import Slider from "react-slick";
import { FaMobileAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const testimonialData = [
  {
    id: 0,
    name: "Mr. Shani Maurya",
    status: "Current",
    hall: "MMM",
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1747680580/cleaned_shadow_image_vxj3k9.jpg",
    session: "2024-25",
    mobile: "+919555439091",
  },
  {
    id: 1,
    name: "Mr. Ashish Meena",
    status: "Ex",
    hall: "RP",
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1747640918/Ashish_kumar_Meena_oqu1d3.jpg",
    session: "2023-24",
    mobile: "+917340050926",
  },
  {
    id: 2,
    name: "Mr. Abhinaw Anand",
    status: "Ex",
    hall: "Nehru",
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1746180942/images_1_eqjrit.jpg",
    session: "2022-23",
    mobile: "+919653408028",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-secondary/30">
              College Representatives
            </p>
            {/* <h1 className="md:text-3xl text-xl font-bold mt-4">Know your CRs</h1> */}
            <p className="text-sm text-gray-500 mt-3">
              College Representative(CR) is responsible for guiding students,
              managing programs, and handling inquiries inside the college.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(
                ({ id, name, status, hall, img, session, mobile }) => {
                  return (
                    <div key={id} className="my-6">
                      <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-gradient-to-tr from-cyan-100 to-cyan-50 relative border border-secondary">
                        <Helmet>
                          <link rel="preload" as="image" href={img} />
                        </Helmet>
                        <img
                          src={img}
                          alt={`${name}'s Image`}
                          width="160px"
                          className="rounded-full block mx-auto"
                        />
                        <h1 className="text-xl font-bold from-cyan-900 to-cyan-500 bg-clip-text text-transparent bg-gradient-to-tr">
                          {name}
                        </h1>
                        <div className="flex gap-6 items-center">
                          <h1 className="text-lg font-semibold text-gray-600">
                            {status} CR
                          </h1>
                          <a
                            href={`tel:${mobile}`}
                            title="Call Now"
                            className="p-2  rounded-lg border border-green-400 text-green-800 flex items-center hover:bg-green-400 transition-colors duration-300"
                          >
                            <FaMobileAlt />
                            <p>{mobile}</p>
                          </a>
                        </div>

                        <p className="text-gray-500 text-sm">{hall}</p>
                        <p className="text-black/20 text-sm font-serif absolute top-1 right-1">
                          {session}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
