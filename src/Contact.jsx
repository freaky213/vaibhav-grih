import React from 'react'
import { Route,Switch } from 'react-router'
import Navbar from './navbar';
import Footer from './footer';
function print(event)
{
    alert('Thank you: Your form have been submitted.... ');
    }
const Contact=()=>
{
    return (
        <>
    
       <div className="intro">
       
       

           <h2>Please inter of your data here show ,That we could connect to you</h2>
           <form className="input_box" onSubmit={print}>
           <input type="text" placeholder="Enter Your name " />
           <input type ="text" placeholder="Enter your restorent name" />
           <input type ="text" placeholder="Enter your Address"  />
           <input type ="text" placeholder="Enter your contact number" />
           <input type ="passward" placeholder=" Enter your passward" />
           <input type ="submit" placeholder="submit here" style={{background:"green" ,color:"black"}} ></input>
           </form>
           
    
       </div>
        <Footer ></Footer>
        </>
    )
}
export default Contact;