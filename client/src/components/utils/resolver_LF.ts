import { FieldErrors, Resolver } from "react-hook-form";
import { LogFormValues } from "../types/formTypes";
import { errorFields } from "./errorFields";
/* Continue working on resolver, this contains the error logic for the form types */

const resolver_LF:Resolver<LogFormValues> = async(values) => {

    const errors: FieldErrors<LogFormValues> = {};

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
    if(!values.coach){
        errors.coach = errorFields.coach.required;
    }
    if(values.coach.length<5&&values.coach.length>0){
        errors.coach = errorFields.text.minLength;
    }
    if(values.coach.length>50){
        errors.coach = errorFields.text.maxLength;
    }
    if(values.tags.length<1){
        errors.tags = errorFields.tags.minLength;
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
    if(values.keyDetails.length>10){
        errors.keyDetails = errorFields.keyDetails.maxLength;
    }
    if(values.sparring.length>6){
        errors.sparring = errorFields.sparring.maxLength;
    }
    
    return {
    values: Object.keys(errors).length ? {} : values,
    errors,
  
}
}


export default resolver_LF

/* 
values: values? values : {},
    errors: values
      ? {
          date: {
            type: "required",
            message: "Date is required.",
          },
          topic:{
            type:"validate",
            types:{}
          },
        }
      : {},*/