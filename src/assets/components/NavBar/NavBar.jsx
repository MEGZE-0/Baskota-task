import {  NavLink } from "react-router-dom";

export function NavBar(){
    return(
        <div className="bg-slate-700 text-white fixed top-0 left-0 right-0">
         
            <ul className="flex bg-slate-700 justify-between">
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/gallery'}>gallery</NavLink></li>
            </ul>
        </div>
        
    )
}