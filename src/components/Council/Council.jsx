import React from "react";
import CouncilCard from "./CouncilCard";

const CouncilData = [
  {
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1746180942/images_1_eqjrit.jpg",
    title: "Mr. Ashutosh ",
    location: "Vice President, Events - DST & Freshmen",
    description: "He plans and manages events to ensure success and strong member engagement throughout.",
    year: "4th",
    type: "Cultural Relax",
  },
  {
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1747579953/Paramjeet_Saini_av7yxl.jpg",
    title: "Mr. Paramjeet Saini",
    location: "Senior Sectretary, DST(JNV)",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    year: "3rd",
    type: "Cultural Relax",
  },
  {
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1746180942/images_1_eqjrit.jpg",
    title: "Mr. Shani Maurya",
    location: "College Representative, IIT Kharagpur",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    year: "2nd",
    type: "Cultural Relax",
  },
  {
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1747403787/Mohit_Kumar_zmv5np.jpg",
    title: "Mr. Mohit Kumar",
    location: "Junior Secretary, DST(Non-JNV)",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    year: "2nd",
    type: "Cultural Relax",
  },
  {
    img: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1747406803/Swarup_Dhanavade_fodfed.jpg",
    title: "Mr. Swarup Dhanavade",
    location: "Junior Secretary, DST(JNV)",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    year: "2nd",
    type: "Cultural Relax",
  },
];

const Council = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-red-300 py-2 pl-2 text-3xl font-bold">
            Our DAAN Council Members
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {CouncilData.map((item, index) => (
              <CouncilCard
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Council;
