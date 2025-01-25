import { getUserAvailability } from "@/actions/availability";
import React from "react";
import { defaultAvailability } from "./data";
import AvailabilityForm from "./_components/AvailabilityForm";

const AvailabilityPage = async() => {

    const availability = await getUserAvailability();
    
  return(
    <AvailabilityForm initialData={availability || defaultAvailability}/>
  )
};

export default AvailabilityPage;
