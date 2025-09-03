import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import EventData from "../components/Events/EventData";
import EventsComp from "../components/Events/EventsComp";

const EventsDetails = () => {
  const { slug } = useParams();
  const event = EventData.find((e) => e.slug === slug);

  if (!event) return <div className="pt-20 text-center text-red-500 text-xl">Event not found.</div>;

  return (
    <>
      <Helmet>
        <title>{`${event.title} | DAAN KGP`}</title>
        <meta name="description" content={event.description} />
      </Helmet>

      <img
        src={event.image}
        alt={event.title}
        className="mx-auto h-auto md:h-fit w-full object-cover"
      />

      <div className="container bg-gray-50 dark:bg-gray-900 py-4">
        <p className="text-sm text-slate-600 dark:text-gray-500 mb-2">on {event.date}</p>
        <h1 className="text-2xl dark:text-gray-300 font-semibold mb-2">{event.title}</h1>
        <p className="text-gray-700 dark:text-gray-400">{event.description}</p>
      </div>

      <EventsComp />
    </>
  );
};

export default EventsDetails;