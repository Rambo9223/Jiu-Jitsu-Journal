import { FieldErrors, Resolver } from "react-hook-form";
import { MediaFormValues } from "../types/formTypes";
import { errorFields } from "./errorFields";
/* Continue working on resolver, this contains the error logic for the form types */

const resolver_MF:Resolver<MediaFormValues> = async(values) => {

    const errors: FieldErrors<MediaFormValues> = {};

    const file = values.file?.[0];
    console.log(file);

    if(!values.title){
    errors.title = errorFields.title.required
    };
    if(values.title.length<5 && values.title.length>0){
        errors.title = errorFields.text.minLength;
    }; 
    if(values.title.length>50){
        errors.title = errorFields.text.maxLength;
    };
    if(!values.date){
        errors.date = errorFields.date.required;
    };
    if(!values.type){
        errors.type = errorFields.type.required;
    }
    if(values.type==="video"&&!values.link&&!values.file){
        errors.type = errorFields.type.validation;
    }if(values.type==="image"&&!values.link&&!values.file){
        errors.type = errorFields.type.validation;
    }
    if(file){
    if(!errorFields.file.validation.includes(file.type)){
        errors.file = errorFields.file.accept; 
    }if(Number(file.size)>20971520){
        errors.file = errorFields.file.size;
    }
    }

    // errors we want for media, maximum size, filetype, required if not link, 
    
    
    
    return {
    values: Object.keys(errors).length ? {} : values,
    errors,
  
}
}


export default resolver_MF