import React from "react";
import DownloadBtn from "../components/FresherPlace/DownloadBtn";
import { Helmet } from "react-helmet";

const DownloadData = [
  {
    catching: "No more 'umm...'",
    cover: "This is your intro cheat sheet!",
    heading: "Intro Guide",
    href: "https://docs.google.com/document/d/1b-SWSYqEJdA3YEiZGOn278ZRGlXElqiVOLqpuWvEuH4/edit?usp=sharing",
  },
  {
    catching: "Trouble in getting location?",
    cover: "We've got your back!",
    heading: "KGP Map",
    href: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1747046563/KGP_Map_firbed.jpg",
  },
  {
    catching: "Lost in Nalanda?",
    cover: "You're covered!",
    heading: "Nalanda Map",
    href: "https://res.cloudinary.com/dcwwptwzt/image/upload/v1746651123/Nalanda_Map_ruhmsq.jpg",
  },
  {
    catching: "Not sure which EAA to choose?",
    cover: "No worries — we’re on it!",
    heading: "EAA Details",
    href: "https://drive.google.com/file/d/1vIpdPPhjQ1OKuJ4bbjOyjKPx_Gdt6fP9/view?usp=sharing",
  },
  {
    catching: "No more nodding blindly",
    cover: "Get fluent in campus talk!",
    heading: "KGP Lingo",
    href: "https://drive.google.com/file/d/12GIJdNWZyLqBqOM4M1ljT7vMkFCrl29s/view?usp=sharing",
  },
  {
    catching: "Deadlines got you down?",
    cover: "You're in good hands.",
    heading: "Academic Calendar",
    href: "https://drive.google.com/file/d/1RCGevew1BsJH0ZnWdkPeo-NK3AkmpLPm/view?usp=sharing",
  },
  {
    catching: "No stress, just the best!",
    cover: "Study Materials sorted.",
    heading: "Study Materials",
    href: "https://docs.google.com/document/d/1zYGhxb_qzve6TetDW0j1NZlszPbKJOuOQpfK96kexO0/edit?usp=sharing",
  },
  {
    catching: "No money? No worry!",
    cover: "We’ve got everything under control.",
    heading: "Scholarship Guide",
    href: "https://drive.google.com/file/d/1e371Rn1eCIydR7sNcOT7XhM9T0avvNbR/view?usp=sharing",
  },
  {
    catching: "Laptop shopping headache?",
    cover: "Count on us!",
    heading: "Laptop Guide",
    href: "https://docs.google.com/document/d/1N1Vr8rx9eWZr6AblfO8Eojlx293C0jxQoKZNuVVGCPs/edit?usp=sharing",
  },
  {
    catching: "Campus feels empty?",
    cover: "Discover your vibe in a society!",
    heading: "Society & Club Guide",
    href: "https://docs.google.com/document/d/19B2TFi_VmyQsRmYAVMG71yJgRda07OxW2lvc51MTiY4/edit?usp=sharing",
  },
  {
    catching: "Emergency?",
    cover: "All taken care of!",
    heading: "Emergency Contacts",
    href: "https://docs.google.com/document/d/1IS3fXMl8Jg9RS5EEUNutHxiC3jy71WwUYmamsbMxWlE/edit?usp=sharing",
  },
];

const FresherPlace = () => {
  document.title = "Fresher Place | DAAN KGP";
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="This is the place where every fresher gets the requirements. This page facilitates them to get a smooth transition to college life."
        />
      </Helmet>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-14 pt-20">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-red-300 py-2 pl-2 text-3xl font-bold">
            Fresher Place
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {DownloadData.map((item, index) => (
              <DownloadBtn key={index} {...item} />
            ))}
          </div>
          <div className="text-left mt-8">
            Have something to add? Submit it
            <a
              href="https://forms.gle/aF8CtLf7cTtuUpe89"
              target="_blank"
              className="text-blue-500"
            >
              {" "}
              here
            </a>.
          </div>
        </section>
      </div>
    </>
  );
};

export default FresherPlace;
