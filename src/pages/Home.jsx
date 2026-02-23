import React from "react";
import Hero from "../components/Hero";
import SimpleAffoidable from "../components/SimpleAffoidable";

import { useLoaderData } from "react-router";
import DoctorSection from "../components/DoctorSection";
import StatisticsSection from "./StatisticsSection";



const Home = () => {
  const data = useLoaderData();


  return (
    <div>
      <Hero />
      <SimpleAffoidable />
      <DoctorSection data={data} />
      <StatisticsSection/>

      
    </div>
  );
};

export default Home;
