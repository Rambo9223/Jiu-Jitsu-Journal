import UserIcon from "./UserIcon"
import { useState,useEffect } from "react";
import { newLogMockValues } from "./utils/mock_values";
import { Search } from "react-bootstrap-icons";

import { LogFormValues } from "./types/formTypes";
import { mapTags } from "./utils/mapTags";

type entries = LogFormValues[]

export default function Logs(){

    const [logs,setLogs] = useState<entries | /*object*/null >(null);
    const [tags,setTags] = useState<string[]>([]);
    const [index,setIndex] = useState<number>(8);

    function showMore(){
        if(index+4 < tags.length){
            setIndex(index+4);
        }else{setIndex(tags.length)}
    }

    useEffect(()=>{
        // backend call then....
        setLogs(newLogMockValues);
        //setTags(["wrestling"]);
        newLogMockValues.forEach((log)=>{
        let entryTags = log.tags;
        setTags(mapTags(tags,entryTags))
        console.log(tags);
        })
        
    },[logs,tags])

    return (<div >
    
        <header className="page-headers">
            <h3>Jiu-Jitsu Logs</h3> <UserIcon/>
        </header>

        <div>
            <Search/><input type="text" placeholder="Search Tags"></input>
            <div className="entry-tags">
            {tags.slice(0,index).map((tag)=>{
                return <div className="tag" key={tag}>{tag}</div>
            })}{index!==tags.length?<div className="tag" onClick={showMore}>more...</div>:null}
            </div>
        </div>

        <div>
            <h3>Entries</h3> 

        </div>
    
        </div>)
}