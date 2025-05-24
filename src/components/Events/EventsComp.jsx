import React from "react";
import EventCard from "./EventCard";

const EventData = [
  {
    id: 0,
    image: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1747720816/Ravi_Sir_s_Visit_inndze_wjuwmw.avif",
    title: "A Memorable Visit by Ravi Sir",
    description:
      "We were honored to welcome Ravi Sir to our campus for a truly inspiring and memorable visit. Their presence at the Gymkhana, IIT Kharagpur, brought immense joy and excitement among all of us. During their time with us, Ravi Sir interacted warmly with students, shared their experiences, and offered valuable guidance that left a lasting impact. We are deeply thankful for their visit, which motivated and encouraged us to strive for excellence.",
    date: "April 15, 2025",
  },
  {
    id: 1,
    image: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1747720689/Untitled_design_1_drqdt6.avif",
    title: "Farewell Ceremony'25",
    description:
      "Kudos and a heartfelt farewell to our incredible graduates who have been constant sources of inspiration throughout our journey. With their wisdom, leadership, and unwavering support, they guided us through challenges and helped us grow both personally and academically. Their presence lit our path, and their legacy will continue to inspire us long after they’ve moved on. We wish them the very best as they embark on new adventures beyond campus.",
    date: "April 06, 2025",
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dcwwptwzt/image/upload/v1747721178/Fresher_s_Treat_vc4ldn.avif',
    title: "Fresher's Treat",
    description:
      "Cheers to our Freshers' Treat — a vibrant and heartfelt welcome that brought Fresher and Sophomers together. It was an evening filled with laughter, energy, and meaningful connections, setting the perfect tone for the journey ahead. The joy, performances, and bonding created unforgettable memories, marking a beautiful beginning for our newest members of the KGP family.",
    date: "Jan 12, 2025",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1747721130/Dakshana_Day_iwamns.avif",
    title: "Dakshana Day'24",
    description:
      "A special occasion where we celebrated the remarkable journey and successful completion of 18 years of the Dakshana Foundation. It was a day of gratitude and reflection, honoring our organization that has transformed countless lives through education and unwavering support. Dakshana has given us knowledge, values, and opportunities, shaping us into who we are today. Its impact is profound, and its legacy continues to inspire future generations.",
    date: "October 15, 2024",
  },
];

const EventComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-rose-300 py-2 pl-2 text-3xl font-bold">
            Our Events
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {EventData.map((item) => (
              <EventCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default EventComp;
