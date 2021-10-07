import react from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
const Navbar=()=>
{
    return (
        <nav>
        <lable className="logo">VaibhavGrih</lable>
        <ul>
            <li><NavLink exact activeClassName="active_class"  to='/'>Home</NavLink></li>
            <li><NavLink exact activeClassName="active_class"  to='/about'>About</NavLink></li>
            <li><NavLink exact activeClassName="active_class"  to='/contact'>contact</NavLink></li>
            

        </ul>

    </nav>
    )
}
export default Navbar;