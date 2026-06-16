import { useState,useEffect } from "react";
import { newLogMockValues } from "./utils/mock_values";
import { LogFormValues } from "./types/formTypes";
import LogList from "./LogList";


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

        <LogList logs={logs} />
    
    </div>)

} 