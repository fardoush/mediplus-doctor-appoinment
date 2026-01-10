import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SimpleAffoidable from '../components/SimpleAffoidable';


const HomeLayout = () => {
    return (
       <>
      <Header/>
       <Outlet/>
       </>
    );
};

export default HomeLayout;