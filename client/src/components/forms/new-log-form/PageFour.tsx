import {  Form } from "react-bootstrap";
import { FieldErrors, UseFieldArrayReturn, UseFormRegister,  } from "react-hook-form";
import { LogFormValues } from "../../types/formTypes";
import { X,CircleFill } from "react-bootstrap-icons";


type Props = {
    errors?:FieldErrors<LogFormValues>,
    register:UseFormRegister<LogFormValues>,
    detailsArray:UseFieldArrayReturn<LogFormValues,"keyDetails","id">
}

export default function PageFour({errors,register,detailsArray}:Props){

    return (<>
    <Form.Group>
            <Form.Label>Key details</Form.Label>
            <p>Share points or keywords about what you earned during the session.</p>
            {errors?.keyDetails && <p className="form-errrors">{errors.keyDetails.message}</p>}
            {detailsArray.fields.map((field,index)=>{
              return <div key={field.id}>
              <CircleFill/>
              <input maxLength={50}
              {...register(`keyDetails.${index}.name`)}
              ></input>
              <X onClick={()=>detailsArray.remove(index)}/>
              </div>
            })}
            <button type="button" onClick={()=>
              detailsArray.append({name:""})
            }>+ add a point</button>
            </Form.Group>

    </>)
}