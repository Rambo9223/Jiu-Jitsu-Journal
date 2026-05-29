import { Outlet,NavLink } from "react-router";
import { HouseDoor,JournalText,ImageFill,Gear } from "react-bootstrap-icons";

export default function NavBar(){
    
    return (
        <>
            <Outlet/>
            <nav className="nav-bar">
            <ul>
                <li><NavLink to={"/"}><HouseDoor size={"20px"}/> Home</NavLink></li>
                <li><NavLink to={"/logs"}><JournalText size={"20px"}/>Logs</NavLink></li>
                <li><NavLink to={"/media"}><ImageFill size={"20px"}/>Media</NavLink></li>
                <li><NavLink to={"/settings"}><Gear size={"20px"}/>Settings</NavLink></li>
            </ul>
            </nav>
        </>
    )
} 