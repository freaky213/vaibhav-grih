import React from 'react'
import { Route,Switch } from 'react-router'
import Navbar from './navbar'
import Footer from './footer'

const About=()=>
{
    return (
        <>
    
        <div className="intro">
        <h2>welcome to Vaibhav Grih </h2>
        <br></br>
        <div>As part of diversification into the processed food business, “OneOne” brand was launched by Goldiee Group. Noodles, Pasta and Macaroni are the products under the processed food brand.

The Pooja Kit is another foray among our diversifications. One can find Incense sticks, yarn, dhoop, roli, among the popular products.

Our far and wide reach has made us a unique and popular brand name not just in India but in international markets as well. With our products already reaching out to more than 350,000 retail outlets managed by 1000 distributors across the country, we still strive to expand both geographically and strategically. We cater to a varied range of selling formats right from the kirana stores, general stores, modern trade outlets, multi-functional outlets, cash & carry outlets and canteens.

Being the market leader, Goldiee prides itself on the diverse range of products that we offer like Pickles, Spices, Asafoetida (Heeng), Blended Spices, Papads, Curry Pastes, Curry Powders, Ready to Cook Spice Mixes, Vermicelli, Sauces, Jams, Tea, Gulab Jamun Mix, Pooja Kits, Incense Sticks etc.</div>
        </div>
        <Footer ></Footer>
        </>
    )
}
export default About;