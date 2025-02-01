import { getUserEvents } from "@/actions/event";
import EventCard from "@/components/EventCard";
import { Suspense } from "react";
import { PulseLoader } from "react-spinners";

export default function EventsPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-60">
      <PulseLoader color="#3498db" size={10} />
    </div>}>
      <Events />
    </Suspense>
  );
}
const Events = async () => {
  const { events, username } = await getUserEvents();

  if (events.length === 0) {
    return <p>You have&apos;t created any events yet </p>;
  }
  return <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
    {events.map((event) => (
      <EventCard key={event.id} event={event} username={username}/>
    ))}
  </div>;
};
