import { FieldErrors, Resolver } from "react-hook-form";
import { NoteFormValues } from "../types/formTypes";
import { errorFields } from "./errorFields";
/* Continue working on resolver, this contains the error logic for the form types */

const resolver_NF:Resolver<NoteFormValues> = async(values) => {

    const errors: FieldErrors<NoteFormValues> = {};

    if(!values.date){
        errors.date = errorFields.date.required;
    }
    if(!values.topic){
    errors.topic = errorFields.topic.required
    };
    if(values.topic.length<5 && values.topic.length>0){
        errors.topic = errorFields.text.minLength;
    } 
    if(values.topic.length>50){
        errors.topic = errorFields.text.maxLength;
    }
    if(!values.overview){
        errors.overview = errorFields.overview.required;
    }
    if(values.overview.length<20){
        errors.overview = errorFields.textbox.minLength;
    }
    if(values.overview.length>500){
        errors.overview = errorFields.textbox.maxLength;
    }
    if(values.tags.length>10){
        errors.tags = errorFields.tags.maxLengthNote;
    }
    
    
    return {
    values: Object.keys(errors).length ? {} : values,
    errors,
  
}
}


export default resolver_NF