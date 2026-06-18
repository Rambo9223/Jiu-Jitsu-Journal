import { Button, Form } from "react-bootstrap";
import { useForm,SubmitHandler, useFieldArray  } from "react-hook-form";
import { LogFormValues } from "../types/formTypes";
import resolver_LF from "../utils/resolver_LF";
import { JournalBookmarkFill, FloppyFill} from "react-bootstrap-icons";
import PageTwo from "./new-log-form/PageTwo";
import EditLog2 from "./edit-log-form/EditLog2";
import EditLog3 from "./edit-log-form/EditLog3";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const resolver = resolver_LF;

type Props ={
    log:Object
    editing:boolean,
    setEditing:Dispatch<SetStateAction<boolean>>
}

export default function EditLogForm({editing,setEditing,log}:Props){

    const [edited,setEdited] = useState<boolean>(false);
    const [updated,setUpdated] = useState<LogFormValues|null>(null)

    const {register,handleSubmit,control,
        reset,formState:{ errors },watch
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
        // backend call to edit entry
        console.log(data);
        const body = <h2>Your Log has been updated succesfully.<JournalBookmarkFill/></h2>
        //reset()
      
    }
    const formValues = watch();
    //console.log(formValues);

    useEffect(()=>{
      if(updated===null){// on opening modal
        setUpdated(formValues)
      }else if(updated.tags.length!==formValues.tags.length || updated.sparring.length!==formValues.sparring.length || updated.keyDetails.length !== formValues.keyDetails.length){
        // any arrray field is edited
        setEdited(true);
        setUpdated(formValues);
      }
    },[updated,formValues]);

    // work on display page for entry new component
   
    return (<>
    {(editing===true)?
    <Form onChange={()=>{setEdited(true)}} onSubmit={handleSubmit(onSubmit)}>
    <PageTwo tagsArray={tagsArray} errors={errors} register={register} />
    <EditLog2 errors={errors} register={register} detailsArray={detailsArray} />
    <EditLog3 errors={errors} register={register} sparringArray={sparringArray} />
    {edited===true?<Button variant="warning" type="submit"/* */>Save Changes <FloppyFill/></Button>:null}
    </Form>
    :
    <div>A nice version of the entry not in the style of a form</div>
    }
    </>)

}