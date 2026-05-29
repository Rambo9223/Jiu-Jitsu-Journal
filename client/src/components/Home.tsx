import UserIcon from "./UserIcon"
import Calendar from "./WeekView"
import RecentEntries from "./RecentEntries";
import { Outlet,NavLink } from "react-router";
import { logButton,mediaButton,noteButton } from "../assets/images";
import "./Home.css";



export default function Home(){

    /* Carry on with the home buttons seperate component that will open the resepctive forms 
    when clicked */

    return (<>

    <header className="page-headers">
        <h3>Welcome Back <strong>{`user`}!</strong></h3> <UserIcon/>
    </header>

    {/* Calendar component */}
    <Calendar/>

    {/* Buttons/Icons to begin a new entry, note/training/media 
    add css to divs, parent flex row, children flex column*/}
    <h3>What did you learn today?</h3>

    <div id="form-links-container">
    <div className="form-links"><NavLink to={"new-note"}><img src={noteButton} alt="note-button"/></NavLink>Add <p>a note</p></div>
    <div className="form-links"><NavLink to={"new-log"}><img src={logButton} alt="log-button"/></NavLink>Log <p>training</p></div>
    <div className="form-links"><NavLink to={"new-media"}><img src={mediaButton} alt="media-button" /></NavLink>Add <p>media</p></div>
    
    </div>
    <Outlet/>

    
    <RecentEntries/>
    {/* Recent entries which will be a .map of entries, can't do this until 
    we have the server or a mock object array  */}
    
    </>)
}