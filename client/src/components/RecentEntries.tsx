import { useState,useEffect } from "react";
import { newLogMockValues } from "./utils/mock_values";
import { LogFormValues } from "./types/formTypes";


type entries = LogFormValues[]

export default function RecentEntries(){
    
    const [logs,setLogs] = useState<entries | /*object*/null >(null);

    const filterByDate = (entries:entries) =>{
        const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
    
    setLogs(sortedEntries.slice(0,2));
    }

    

    useEffect(()=>{
        // code for our server fetch tbc
        if(logs===null){
            //setLogs(newLogMockValues);
            filterByDate(newLogMockValues)
        }
    },[logs]);

    return (<div id="recent-entries">
        <h4>Recent Entries</h4>

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
                <div className="action">{`Read >`}</div>
                </div>
        })}
        
        </>:null}
    
    </div>)

} 