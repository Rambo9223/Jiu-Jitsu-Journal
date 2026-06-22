import { whiteBelt,blueBelt,purpleBelt,brownBelt,blackBelt } from "../assets/images";


export default function Belt({belt}:{belt:string}){

    //const [belt,setBelt] = useState<string>(whiteBelt)

    //const userBelt = user.belt;

    // loop error in switch case, set to return img element over set state change
    //console.log(user.belt)

    switch(belt){
        case"white":
        return <img id="belt" src={whiteBelt} alt="whiteBelt"/>
       case"blue":
        return <img id="belt" src={blueBelt} alt="blueBelt"/>
        case"purple":
        return <img id="belt" src={purpleBelt} alt="purpleBelt"/>
        case"brown":
        return <img id="belt" src={brownBelt} alt="brownBelt"/>
        case"black":
        return <img id="belt" src={blackBelt} alt="blackBelt"/>
        default : 
        return <img id="belt" src={whiteBelt} alt="whiteBelt"/>
    }

            //console.log(user.belt)


    /*(
        <>
        {belt!==""?<img src={belt}/>:null}
        </>
    )*/
}