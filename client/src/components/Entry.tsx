import { LogFormValues } from "./types/formTypes";

type Props = {
    entry:LogFormValues
}

export default function Entry({entry}:Props){
    
    return (<>
    <p>{entry.date}</p> 
    <ul>
        {entry.tags.map((tag)=>{
            return <li>{tag.name}</li>
        })}
    </ul>
    <div>
        <h2>{entry.topic}</h2>
        <p>{entry.overview}</p>
        <ul>
            {entry.keyDetails.map((detail)=>{
                return <li>{detail.name}</li>
            })}
        </ul>
        <h3>Strengths & Weaknesses:</h3><p>{entry.strengths_weaknesses}</p>
        <h3>To be reviewed</h3><p>{entry.toReview}</p>
        <h3>Goals</h3><p>{entry.goals}</p>
        
        <h3>Sparring</h3>
        <ul>
            {entry.sparring.map((spar)=>{
                return <div>
                    <li>Partner - {spar.partner}</li>
                    <li>Notes - {spar.notes}</li>
                </div>
            })}
        </ul>

    </div>
    

    </>)
}