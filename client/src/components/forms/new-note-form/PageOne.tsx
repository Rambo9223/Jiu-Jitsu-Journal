import {  Button, Form } from "react-bootstrap";
import { FieldErrors, UseFieldArrayReturn, UseFormRegister,  } from "react-hook-form";
import { NoteFormValues } from "../../types/formTypes";
import Taglist from "../Taglist";
import { X } from "react-bootstrap-icons";


type Props = {
    errors:FieldErrors<NoteFormValues>,
    register:UseFormRegister<NoteFormValues>,
    tagsArray:UseFieldArrayReturn<NoteFormValues,"tags","id">
}

export default function PageOne({errors,register,tagsArray}:Props){

    


    return (<>
   
            <Form.Group controlId="formDate">
            <Form.Label>Date/time</Form.Label>
            <Form.Control type="datetime-local" 
            {...register("date")}></Form.Control>
              {errors?.date && <p className="form-errors">{errors.date.message}</p>}
            </Form.Group>

             <Form.Group >
            <Form.Label>Topic</Form.Label>
            <Form.Control type="text" placeholder="topic"
            {...register("topic")}></Form.Control>
              {errors?.topic && <p className="form-errors">{errors.topic.message}</p>}
            </Form.Group>

            <Form.Group>
            <Form.Label>Overview</Form.Label>
            <p>A more in-depth description of the techniques learned or practiced.</p>
            <Form.Control type="textarea" placeholder="What did you learn today?"
            {...register("overview")}></Form.Control>
              {errors?.overview && <p className="form-errors">{errors.overview.message}</p>}
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
            <Button type="submit" variant="primary">Add Note</Button>

    </>)
}