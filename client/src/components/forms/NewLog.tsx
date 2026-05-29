import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft } from "react-bootstrap-icons";
import ContinueNewLog from "../buttons/ContinueNewLog";
import NewLogForm from "./NewLogForm";
import handlePageChange from "../utils/handlePageChange";
import "./NewLogForm.css"
import { newLogDefaults } from "../utils/formDefaults";


export default function NewLog(){

    // this page handles the form page changes

    const [page,setPage]=useState<number>(1);


    return (<>
        {(page===1)?<>
        <Link to={"/"}>
        <ChevronLeft size={"40px"}/>
        </Link>
        </>:null}
        {(page<9&&page>1)?<><ChevronLeft size={"40px"} onClick={()=>{handlePageChange({nextPage:false,setPage:setPage,page:page})}}></ChevronLeft>
        <h2>New training log</h2>
        </>:null}

        
        {/*Form component with page as props */}
        <NewLogForm defaultValues={newLogDefaults}></NewLogForm>
        
        {(page<8)?<ContinueNewLog handler={()=>{handlePageChange({nextPage:true,setPage:setPage,page:page})}}/>:null}

    </>)
}