import {NavLink} from "react-router-dom";
import "./Sidebar.css";
import {navItems} from "./navData";
export const Sidebar=()=>{
    const getActiveNavStyle = ({ isActive }) =>
    isActive
        ? {
             background: '#262c59',
        }
        : null
    return(
        <aside className={`navigation_panel`}>
        <ul className="nav-lists list-style-none">
            {navItems.map((item,index)=>(
                <NavLink key={index} to={`${item.path}`} className="nav-links" style={( getActiveNavStyle)}>
                <item.icon className="icon-size"/>
               <span className="links_name">{item.title}</span>
                </NavLink>
            ))}
        </ul>
        </aside>
    )
}