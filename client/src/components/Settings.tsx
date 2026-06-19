import { UserType } from "./types/userType";
import UserIcon from "./UserIcon";
import { Mailbox,Cloud,BellFill,PaintBucket,NutFill, QuestionCircleFill,Icon0CircleFill, Circle} from "react-bootstrap-icons"; 
import { whiteBelt,blueBelt,purpleBelt,brownBelt,blackBelt } from "../assets/images";
import { useState } from "react";


type Props = {
    user:UserType,
}

// continue wit settings page, mock user that can change preferences etc

export default function Settings({user}:Props){
    
    //const [belt,setBelt] = useState<string>(user.belt);

    return (<>
    <h3>Settings</h3>
    <UserIcon/>

    <ul>
    <li>
    <Circle title={user.name[0]}/>
    <div><h4>Name</h4><p>{user.name}</p></div> 
    </li>   
    </ul>
    

    </>)
}