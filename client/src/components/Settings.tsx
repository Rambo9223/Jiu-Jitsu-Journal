import { UserType } from "./types/userType";
import UserIcon from "./UserIcon";
import { Envelope,Cloud,Bell,Palette,Gear, QuestionCircle,Download, InfoCircle} from "react-bootstrap-icons";
import Belt from "./Belt"; 
import { Route } from "react-router";
import SettingsModal from "./modals/SettingsModal";



type Props = {
    user:UserType,
}

// finish deciding whats a modal and whats a route and start making the inner body/ pages for each element

export default function Settings({user}:Props){
    
    //const [belt,setBelt] = useState<string>(user.belt);

    return (
    <div>
    <h3>Settings</h3>
    <UserIcon/>
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
    <li>
        <Download className="icon"/>
        <h5>Import/Export</h5>
    </li>
    <br/>
    <li>
        <Gear className="icon"/>
        <h5>Advanced</h5>
    </li>
        <hr/>
    <li>
        <QuestionCircle className="icon"/>
        <h5>Support</h5>
    </li>
    <br/>
    <SettingsModal title="About" outerBody={
    <li>
        <InfoCircle className="icon"/>
        <h5>About</h5>
    </li>
    }/>
    
    </ul>
    <br/>

    </div>)
}