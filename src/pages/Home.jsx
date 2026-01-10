import React from "react";
import Hero from "../components/Hero";
import SimpleAffoidable from "../components/SimpleAffoidable";

import { useLoaderData } from "react-router";
import DoctorSection from "../components/DoctorSection";

const Home = () => {
  const data = useLoaderData();


  return (
    <div>
      <Hero />
      <SimpleAffoidable />
      <DoctorSection data={data} />
    </div>
  );
};

export default Home;
