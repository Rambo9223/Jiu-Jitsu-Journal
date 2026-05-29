import { NoteFormValues } from "../../types/formTypes";
import { JournalBookmarkFill } from "react-bootstrap-icons";

type Props = {
    data:NoteFormValues |  null
}

export default function Submitted({data}:Props){
    return (
    <div>
        <h4>Note Added Sucessfully <JournalBookmarkFill/></h4>
        <p>Date - {data?.date}</p>
        <p>Topic - {data?.topic}</p>
        <p>Overview - {data?.overview}</p>
        <ul>Tags - 
            {data!==null?data?.tags.map((tag)=>{
            return <li key={tag.name}>{tag.name}</li>
        }):null}</ul>
    </div>)
}