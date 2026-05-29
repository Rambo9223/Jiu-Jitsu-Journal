import {  Form } from "react-bootstrap";
import { useForm,SubmitHandler  } from "react-hook-form";
import { MediaFormValues } from "../types/formTypes";
import PageOne from "./new-media-form/PageOne";
import SubmittedMedia from "./new-media-form/SubmittedMedia";
import resolver_MF from "../utils/resolver_MF";

import { useState } from "react";
import { ChevronLeft } from "react-bootstrap-icons";
import {  Link } from "react-router";


type Props = {
    defaultValues:Object
}

type submitted = {
    show:boolean,
    data:MediaFormValues | null
}

/* Work on resolver for the media for 
added defaults for the date so should work
 */
const resolver = resolver_MF;

export default function NewMediaForm({defaultValues}:Props){

    const [submitted,setSubmitted] = useState<submitted>({show:false,data:null});

    const {register,
        handleSubmit,
        control,
        reset,
        formState:{ errors },
    } = useForm<MediaFormValues>({
      resolver,
      defaultValues:defaultValues
    });

    

    const onSubmit:SubmitHandler<MediaFormValues>=(data)=>{
        // backend call then onsuccess
        //setSubmitted({show:true,data:data})
        console.log(data)
        setSubmitted({show:true,data:data});
        reset();
    }
    
    return (
    <div>
    <Link to={"/"}>
    <ChevronLeft size={"40px"}/>
    </Link>
    <h1>New Media</h1>

    {submitted.show===false?
    <Form onSubmit={handleSubmit(onSubmit)}>
        {<PageOne errors={errors} register={register}/>}
    </Form>:
    <SubmittedMedia data={submitted.data}/>}
    </div>
)

}