import { UserType } from "./types/userType";
import UserIcon from "./UserIcon";
import { Envelope,Cloud,Bell,Palette,Gear, QuestionCircle,Download, InfoCircle} from "react-bootstrap-icons";
import Belt from "./Belt"; 
import { Link } from "react-router";
import SettingsModal from "./modals/SettingsModal";
import About from "./About";



type Props = {
    user:UserType,
}

// making the inner body/ pages for each element, also  add jen to team, make list of jobs

export default function Settings({user}:Props){
    
    //const [belt,setBelt] = useState<string>(user.belt);

    return (
    <div className="settings-page">
    <header className="page-headers">
    <h3>Settings</h3>
    <UserIcon/>
    </header>
    <Belt belt={user.belt}/>
    <ul className="settings-list">
    <li>
    <div className="dot"><strong>{user.name[0]}</strong></div>
    <div><h5>Name</h5><p>{user.name}</p></div> 
    </li>   
    <li>
        <Envelope className="icon"/>
        <div><h5>Email</h5><p>{user.email}</p></div>
    </li>
    <hr/>
    <li>
        <Cloud className="icon"/>
        <div><h5>Sync</h5><p>Logic for server connection</p></div>
    </li>
    <SettingsModal title="Reminders & notifications" outerBody={
        <li className="inner-li">
        <Bell className="icon"/>
        <h5>Reminders & notifications</h5>
    </li>
    }/>  
        <hr/>
    <SettingsModal title="Apperance" outerBody={
    <li className="inner-li">
        <Palette className="icon"/>
        <h5>Appearance</h5>
    </li>
    }/>
    <br/>
    <Link className="settings-link" to={"/import-export"}>
    <li className="inner-li">
        <Download className="icon"/>
        <h5>Import/Export</h5>
    </li>
    </Link>
    <br/>
    <Link className="settings-link" to="/advanced">
    <li className="inner-li">
        <Gear className="icon"/>
        <h5>Advanced</h5>
    </li>
    </Link>
    <hr/>
    <Link className="settings-link" to="/support">
    <li className="inner-li">
        <QuestionCircle className="icon"/>
        <h5>Support</h5>
    </li>
    </Link>

    <br/>
    <SettingsModal title="About" outerBody={
    <li className="inner-li">
        <InfoCircle className="icon"/>
        <h5>About</h5>
    </li>
    } innerBody={<About/>}/>
    
    </ul>
    <br/>

    </div>)
}