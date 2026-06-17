import {  Form } from "react-bootstrap";
import { FieldErrors, UseFormRegister,UseFieldArrayReturn  } from "react-hook-form";
import { LogFormValues } from "../../types/formTypes";
import { X } from "react-bootstrap-icons";



type Props = {
    errors:FieldErrors<LogFormValues>,
    register:UseFormRegister<LogFormValues>,
    sparringArray:UseFieldArrayReturn<LogFormValues,"sparring","id">
}

export default function EditLog3({errors,register,sparringArray}:Props){

    return (<>
            <Form.Group>
            <Form.Label>Strengths & weaknesses</Form.Label>
            <p>What worked well? Any Challenges? What do you need to work on?</p>
            <Form.Control type="textarea" placeholder="What did you learn today?"
            {...register("strengths_weaknesses")}></Form.Control>
              {errors?.strengths_weaknesses && <p>{errors.strengths_weaknesses.message}</p>}
            </Form.Group>
            
            <Form.Group>
            <Form.Label>Questions & things to review</Form.Label>
            <p>Anything you were unsure of or would like to review from the session.</p>
            <Form.Control type="textarea" placeholder="Anything you didnt understand or want to review?"
            {...register("toReview")}></Form.Control>
              {errors?.toReview && <p>{errors.toReview.message}</p>}
            </Form.Group>

            <Form.Group>
            <Form.Label>Goals & what to work on next</Form.Label>
            <p>Your goals for the next session and steps you take to achieve them</p>
            <Form.Control type="textarea" placeholder="What do you want to focus on in the next session?"
            {...register("goals")}></Form.Control>
              {errors?.goals && <p>{errors.goals.message}</p>}
            </Form.Group>

             {Object.keys(errors).length>1?<p className="form-errors">Check previous entries</p>:null}
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
    </>)
}