import {  Form } from "react-bootstrap";
import { FieldErrors, UseFieldArrayReturn, UseFormRegister,  } from "react-hook-form";
import { LogFormValues } from "../../types/formTypes";
import Taglist from "../Taglist";
import { X } from "react-bootstrap-icons";


type Props = {
    errors:FieldErrors<LogFormValues>,
    register:UseFormRegister<LogFormValues>,
    tagsArray:UseFieldArrayReturn<LogFormValues,"tags","id">
}

export default function PageTwo({errors,register,tagsArray}:Props){

    


    return (<>
   
            <Form.Group controlId="formDate">
            <Form.Label>Date/time</Form.Label>
            <Form.Control type="datetime-local" 
            {...register("date")}></Form.Control>
              {errors?.date && <p className="form-errors">{errors.date.message}</p>}
            </Form.Group>

             <Form.Group >
            <Form.Label>Class topic</Form.Label>
            <Form.Control type="text" placeholder="topic"
            {...register("topic")}></Form.Control>
              {errors?.topic && <p className="form-errors">{errors.topic.message}</p>}
            </Form.Group>

            <Form.Group >
            <Form.Label>Coach</Form.Label>
            <Form.Control type="text" placeholder="martin"
            {...register("coach")}></Form.Control>
              {errors?.coach && <p className="form-errors">{errors.coach.message}</p>}
            </Form.Group>

            <Form.Group >
            <Form.Label>Tags</Form.Label>
            <Taglist append={tagsArray.append}></Taglist>
            <div className="tags-container">
            {(tagsArray.fields.map((field,index)=>{
              return <div key={field.id}>
                <input hidden inputMode="none"
                {...register(`tags.${index}.name`)}
                />
            {field.name}
              <X onClick={()=>{
               tagsArray.remove(index);
              }}/>
              </div>
            }))}
            </div>
              {errors?.tags && <p className="form-errors">{errors.tags.message}</p>}
            </Form.Group>

    </>)
}