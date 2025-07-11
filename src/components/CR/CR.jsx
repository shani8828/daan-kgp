import React from "react";
import Slider from "react-slick";
import { MdAddCall } from "react-icons/md";
import { Helmet } from "react-helmet";

const CRData = [
  {
    id: 0,
    name: "Mr. Shani Maurya",
    status: "Current",
    hall: "MMM",
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1748023103/Shani_Maurya_cpux6d.avif",
    session: "2024-25",
    mobile: "+919555439091",
  },
  {
    id: 1,
    name: "Mr. Ashish Meena",
    status: "Ex",
    hall: "RP",
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1747740285/Ashish_kumar_Meena_z9nbod.avif",
    session: "2023-24",
    mobile: "+917340050926",
  },
  {
    id: 2,
    name: "Mr. Abhinaw Anand",
    status: "Ex",
    hall: "Nehru",
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1747723143/Avatar_avs1qx.avif",
    session: "2022-23",
    mobile: "+919653408028",
  },
];

const CR = () => {
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
      <div id="cr" data-aos="fade-up" data-aos-duration="300" className="py-10 scroll-mt-[100px]">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/30">
              College Representatives
            </p>
            {/* <h1 className="md:text-3xl text-xl font-bold mt-4">Know your CRs</h1> */}
            <p className="text-sm text-gray-500 mt-3">
              As the key point of contact for Dakshana within the college, the
              CR plays a vital role in guiding students, managing programs, and
              addressing any related inquiries.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {CRData.map(
                ({ id, name, status, hall, img, session, mobile }) => {
                  return (
                    <div key={id} className="my-6">
                      <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-gradient-to-tr from-red-100 to-red-50 relative border border-primary">
                        <Helmet>
                          <link rel="preload" as="image" href={img} />
                        </Helmet>
                        <img
                          src={img}
                          alt={`${name}'s Image`}
                          width="160px"
                          height="160px"
                          className="rounded-full block mx-auto"
                        />
                        <h1 className="text-xl font-bold from-red-900 to-red-500 bg-clip-text text-transparent bg-gradient-to-tr">
                          {name}
                        </h1>
                        <div className="flex gap-6 items-center">
                          <h1 className="text-lg font-semibold text-gray-600">
                            {status} CR
                          </h1>
                          <a
                            href={`tel:${mobile}`}
                            title="Call Now"
                            className="p-2 rounded-lg border border-green-200 bg-green-50 text-green-400 flex items-center hover:bg-green-100 hover:scale-[1.05] hover:shadow-green-300 transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:border-green-300 duration-300"
                          >
                            {/* <FaMobileAlt /> */}
                            <MdAddCall />
                            {/* <p>{mobile}</p> */}
                          </a>
                        </div>

                        <p className="text-gray-500 text-sm">{hall}</p>
                        <p className="text-black/30 text-sm font-serif absolute top-1 right-1">
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

export default CR;
