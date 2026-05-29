import {  Form,Button } from "react-bootstrap";
import { FieldErrors, UseFieldArrayReturn, UseFormRegister,  } from "react-hook-form";
import { LogFormValues } from "../../types/formTypes";
import { X } from "react-bootstrap-icons";


type Props = {
    errors:FieldErrors<LogFormValues>,
    register:UseFormRegister<LogFormValues>,
    sparringArray:UseFieldArrayReturn<LogFormValues,"sparring","id">
}

export default function PageEight({errors,register,sparringArray}:Props){


    return (<>
      {Object.keys(errors).length>1?<p className="form-errors">Check entries on previous page - add a quick link -</p>:null}
    <Form.Group>
            <Form.Label>Sparring</Form.Label>
            <p>Short points or keywords about what you learned during the session.</p>
            {errors?.sparring && <p className="form-errors">{errors.sparring.message}</p>}
            <div>
            {sparringArray.fields.map((field,index)=>{
              return <div key={field.id}>
              <label>Partners name:</label>
              <input maxLength={50}
              {...register(`sparring.${index}.partner`)}
              ></input>
              <label>Notes / outcome:</label>
              <input maxLength={50}
              {...register(`sparring.${index}.notes`)}
              ></input>
              <X onClick={()=>sparringArray.remove(index)}/>
              </div>
            })}
            <button type="button" onClick={()=>
              sparringArray.append({partner:"",notes:""})
            }>+ add another</button>
            </div>
            </Form.Group>
            <Button type="submit">Save Log</Button>
    </>)
}