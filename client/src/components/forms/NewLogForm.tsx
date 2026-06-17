import { Form } from "react-bootstrap";
import { useForm,SubmitHandler, useFieldArray  } from "react-hook-form";
import { LogFormValues } from "../types/formTypes";
import resolver_LF from "../utils/resolver_LF";
import { ReactElement, useState } from "react";
import { JournalBookmarkFill,ChevronLeft } from "react-bootstrap-icons";
import PageOne from "./new-log-form/PageOne";
import PageTwo from "./new-log-form/PageTwo";
import PageThree from "./new-log-form/PageThree";
import PageFour from "./new-log-form/PageFour";
import PageFiveSixSeven from "./new-log-form/PageFiveSixSeven";
import PageEight from "./new-log-form/PageEight";
import ContinueNewLog from "../buttons/ContinueNewLog";
import handlePageChange from "../utils/handlePageChange";
import { Link } from "react-router";
//import "./NewLogForm.css"


type Props = {
    test?:number
    //setPage:Dispatch<SetStateAction<number>>
    defaultValues:Object
}

const resolver = resolver_LF;


export default function NewLogForm({defaultValues,test}:Props
){

    const [page,setPage]=useState<number>(test!==undefined?test:1);
    const [res,setRes] = useState<ReactElement>()

    const {register,
        handleSubmit,
        control,
        //watch,
        reset,
        formState:{ errors },
    } = useForm<LogFormValues>({
      resolver,
      defaultValues:defaultValues
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
        const body = <h2>Thank you for logging your training.</h2>

        if(page===3){
          // we will submit the required data to start a log, all other values are defaults
          // set the page to 9 and give body about - "Thank you, remember to update your log in"
          // reset form and required array
          setRes(<div>{body}<br/>
          <p>Remember to complete your log <JournalBookmarkFill/></p></div>)
          reset();
          setPage(9)
        }else if(page===8){
          // we submit the whole form 
          // set page to 9 and give body thank you for logging
          // reset form and all array
          setRes(<div>{body}<br/>
          <p>View and edit all your logs here <JournalBookmarkFill/></p></div>)
          reset();
          setPage(9);
        }
      
    }
    //console.log(watch("coach"));
    return (<>

        {(page<9&&page>1)?<>
        <ChevronLeft size={"40px"} onClick={()=>{handlePageChange({nextPage:false,setPage:setPage,page:page})}}></ChevronLeft>
        <h2>New training log</h2>
        </>:<Link to={"/"}>
            <ChevronLeft size={"40px"}/>
            </Link>}
        <Form  onSubmit={handleSubmit(onSubmit)}>
            {page===1?<PageOne/>:null}

            {page===2?<PageTwo tagsArray={tagsArray} errors={errors} register={register}/>:null}
            
            {page===3?<PageThree errors={errors} register={register} />:null}
            
            {page===4?<PageFour errors={errors} register={register} detailsArray={detailsArray} />:null}

            <PageFiveSixSeven errors={errors} register={register} page={page} />

            {page===8?<PageEight errors={errors} register={register} sparringArray={sparringArray}/>:null}

        </Form>
        {(page<8)?<ContinueNewLog handler={()=>{//implement when errors continue is not an option
          handlePageChange({nextPage:true,setPage:setPage,page:page})}}/>:null}
        {page===9?<>{res}</>:null}
    </>)
}


 