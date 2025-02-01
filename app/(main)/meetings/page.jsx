import { getUserMeetings } from "@/actions/meeting";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MeetingList from "./_components/MeetingList";
import { Suspense } from "react";
import { PulseLoader } from "react-spinners";

export const metadata = {
  title: "Your Meeting | Scheduler",
  description: "View and manage your upcoming and past events",
};

const MettingPage = () => {
  return (
    <Tabs defaultValue="upcoming">
      <TabsList>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="past">Past</TabsTrigger>
      </TabsList>
      <TabsContent value="upcoming">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-60">
              <PulseLoader color="#3498db" size={10} />
            </div>
          }
        >
          <UpcomingMeetings />
        </Suspense>
      </TabsContent>
      <TabsContent value="past">
        <Suspense fallback={<div>Loading past meetings...</div>}>
          <PastMeetings />
        </Suspense>
      </TabsContent>
    </Tabs>
  );
};

async function UpcomingMeetings() {
  const meetings = await getUserMeetings("upcoming");
  return <MeetingList meetings={meetings} type={"upcoming"} />;
}

async function PastMeetings() {
  const meetings = await getUserMeetings("past");
  return <MeetingList meetings={meetings} type={"past"} />;
}

export default MettingPage;
