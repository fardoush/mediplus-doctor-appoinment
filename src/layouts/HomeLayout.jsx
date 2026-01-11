import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SimpleAffoidable from '../components/SimpleAffoidable';
import Footer from '../components/Footer';


const HomeLayout = () => {
    return (
       <>
      <Header/>
       <Outlet/>
       <Footer/>
       </>
    );
};

export default HomeLayout;