import EntryModal from "./modals/EntryModal";
import { LogFormValues } from "./types/formTypes";

type Props = {
    logs : LogFormValues[] | null
}

export default function LogList({logs}:Props){

    return (<>

    {logs!==null?<>

        {logs.map((log)=>{
            //console.log(log)
            let time = log.date.slice(11,17);
            let ms = Date.parse(log.date)
            let date = new Date(ms);
            //date.setMilliseconds(Date.parse(log.date));
            

            //console.log(date)
            return <div className="entry" key={log.overview}>
                <div className="entry-date">
                    <div className="day">{date.toLocaleDateString("en-US", {
              //month: "short",
              day: "numeric",
            })}</div>
            <div className="weekday">{date.toLocaleDateString("en-US", { weekday: "short" })}</div>
                </div>
                <div className="">
                    <div className="entry-content">
                    <div className="header">
                        <h3>{log.topic}</h3><h6 className="time">{time}</h6>
                    </div>    
                    </div>
                    <p className="description">{log.overview.slice(0,50)}...</p>
                    <div className="entry-tags">{log.tags.slice(0,3).map((tag)=>{
                    return <div className="tag" key={tag.name}>{tag.name}</div>})}</div>
                </div>
                <EntryModal log={log}/>
                
                </div>
        })}
        
        </>:null}
    
    </>)


}