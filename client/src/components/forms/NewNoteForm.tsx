import {  Form } from "react-bootstrap";
import { useForm,SubmitHandler, useFieldArray  } from "react-hook-form";
import { NoteFormValues } from "../types/formTypes";
import resolver_NF from "../utils/resolver_NF";
import PageOne from "./new-note-form/PageOne";
import { useState } from "react";
import { ChevronLeft } from "react-bootstrap-icons";
import {  Link } from "react-router";
import Submitted from "./new-note-form/Submitted";

type Props = {
    defaultValues:Object
}

type submitted = {
    show:boolean,
    data:NoteFormValues | null
}

const resolver = resolver_NF;

export default function NewNote({defaultValues}:Props){

    const [submitted,setSubmitted] = useState<submitted>({show:false,data:null});

    const {register,
        handleSubmit,
        control,
        reset,
        formState:{ errors },
    } = useForm<NoteFormValues>({
      resolver,
      defaultValues:defaultValues
    });

    const tagsArray = useFieldArray({
      control,
      name:"tags"
    });

    const onSubmit:SubmitHandler<NoteFormValues>=(data)=>{
        // backend call then onsuccess
        setSubmitted({show:true,data:data})
        console.log(data)
        reset();
    }
    
    return (
    <div>
    <Link to={"/"}>
    <ChevronLeft size={"40px"}/>
    </Link>
    <h1>New Note</h1>

    {submitted.show===false?
    <Form onSubmit={handleSubmit(onSubmit)}>
        <PageOne errors={errors} register={register} tagsArray={tagsArray}/>
    </Form>:
    <Submitted data={submitted.data}/>}
    </div>
)

}