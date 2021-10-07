import React,{useState} from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './error'
import Navbar from './navbar';

const App=()=>{
    
    
    return(
        <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route  exact path="/contact" component={Contact}></Route>
            <Route component={Error}></Route>

        </Switch>
        {/* <Navbar /> */}
 {/* <Home ></Home>
 <About />
 <Contact /> */}
        </>
    )
}
export default App;