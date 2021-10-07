import React,{useState} from 'react';
import { Route,Switch } from 'react-router-dom';
import Navbar from './navbar'
import Footer from './footer';
import Bpart from './bpart';

const Home=()=>{
   
    
    return(
        <>
        <Bpart />
 <Footer />
        </>
    )
}
export default Home;