import { getEventDetails } from "@/actions/event";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import EventDetails from "./_components/EventDetails";

export async function generateMetadata({ params }) {
  const { username, eventId } = await params;

  const event = await getEventDetails(username, eventId);
  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `Book ${event.title} with ${event.user.name} | Scheduler`,
    description: `Schedule a ${event.duration}-minute ${event.title} event with ${event.user.name}`,
  };
}

const EventPage = async ({ params }) => {
  const { username, eventId } = await params;
  const event = await getEventDetails(username, eventId);
  if (!event) {
    notFound();
  }

  return (
    <div className="flex flex-col justify-center lg:flex-row px-4 py-8">
        <EventDetails event={event}/>
        {/* <Suspense>
            <BookingForm/>
        </Suspense> */}
    </div>
)
};

export default EventPage;
