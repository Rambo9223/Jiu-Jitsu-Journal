import UserIcon from "./UserIcon"
import { useState,useEffect } from "react";
import { newLogMockValues } from "./utils/mock_values";
import { Search , X } from "react-bootstrap-icons";
import LogList from "./LogList";
import { LogFormValues } from "./types/formTypes";
import { mapTags } from "./utils/mapTags";

type entries = LogFormValues[] | null


export default function Logs(){

    const [logs,setLogs] = useState<entries>(null);
    const [allLogs,setAllLogs] = useState<entries>(null);
    const [tags,setTags] = useState<string[]>([]);
    const [indexs,setIndexs] = useState<number[]>([0,8]);
    const [searchText,setSearchText] = useState<string>("")

    function showMore(){
        if(indexs[1]+4 < tags.length){
            setIndexs([indexs[0]+4,indexs[1]+4]);
        }else{setIndexs([tags.length-4,tags.length])}
    }

    function filterLogs(query:string){  
        const searchLogs = allLogs?.filter((entry)=>entry.tags.some(tag=>tag.name===query));
        //console.log(searchLogs)
        if(searchLogs!==undefined){setLogs(searchLogs)}
        else{/*log error */}
    }


    /* add in a reset search button to show all */

    useEffect(()=>{
        // backend call then....
        // all logs
        if(allLogs===null){
        setAllLogs(newLogMockValues);
        setLogs(newLogMockValues);
        newLogMockValues.forEach((log)=>{
        let entryTags = log.tags;
        setTags(mapTags(tags,entryTags))
        })
    }
    },[logs,tags,allLogs])

    return (<div className="">
    
        <header className="page-headers">
            <h3>Jiu-Jitsu Logs</h3> <UserIcon/>
        </header>

        <div>
            <Search onClick={()=>{setLogs(allLogs);filterLogs(searchText)}}/>
            <input value={searchText} onChange={(e)=>{setSearchText(e.target.value);}} type="text" placeholder="search tags"></input>
            <X  onClick={()=>{
            setSearchText("");
            setLogs(allLogs)}}/>
            <div className="entry-tags">
            {tags.slice(indexs[0],indexs[1]).map((tag)=>{
                return <div onClick={()=>{setLogs(allLogs);filterLogs(tag);setSearchText(tag)}} className="tag" key={tag}>{tag}</div>
            })}{indexs[1]!==tags.length?<div className="tag" onClick={showMore}>more...</div>:<div className="tag" onClick={()=>{setIndexs([0,8])}}>...back</div>}
            </div>
        </div>

        <div>
            <h3>Entries</h3> 
            <LogList logs={logs}/> 
        </div>
    
        </div>)
}