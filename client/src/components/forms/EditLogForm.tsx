import { Button, Form } from "react-bootstrap";
import { useForm,SubmitHandler, useFieldArray  } from "react-hook-form";
import { LogFormValues } from "../types/formTypes";
import resolver_LF from "../utils/resolver_LF";
import { JournalBookmarkFill, FloppyFill} from "react-bootstrap-icons";
import PageTwo from "./new-log-form/PageTwo";
import EditLog2 from "./edit-log-form/EditLog2";
import EditLog3 from "./edit-log-form/EditLog3";
import { useState } from "react";

const resolver = resolver_LF;

type Props ={
    log:Object
}

export default function EditLogForm({log}:Props){

    const [edited,setEdited] = useState<boolean>(false);
    const {register,handleSubmit,control,
        reset,formState:{ errors },
    } = useForm<LogFormValues>({
      resolver,
      defaultValues:log
    });

     const tagsArray = useFieldArray({
      control,
      name:"tags"
    });

    const detailsArray = useFieldArray({
      control,
      name:"keyDetails",
    });

    const sparringArray = useFieldArray({
      control,
      name:"sparring"
    });

      const onSubmit:SubmitHandler<LogFormValues>=(data) => {
        console.log(data);
        //console.log(status?.target.children);
        const body = <h2>Your Log has been updated succesfully.<JournalBookmarkFill/></h2>
        //reset()
      
    }

    return (<Form onChange={()=>{setEdited(true)}} onSubmit={handleSubmit(onSubmit)}>
    
    <PageTwo tagsArray={tagsArray} errors={errors} register={register} />
    <EditLog2 errors={errors} register={register} detailsArray={detailsArray} />
    <EditLog3 errors={errors} register={register} sparringArray={sparringArray} />
    {edited===true?<Button variant="warning" type="submit"/* */>Save Changes <FloppyFill/></Button>:null}

    

    </Form>)

}