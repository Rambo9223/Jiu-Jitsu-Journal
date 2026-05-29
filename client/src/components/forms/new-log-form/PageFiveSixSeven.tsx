import {  Form } from "react-bootstrap";
import { FieldErrors, UseFormRegister,  } from "react-hook-form";
import { LogFormValues } from "../../types/formTypes";


type Props = {
    errors?:FieldErrors<LogFormValues>,
    register:UseFormRegister<LogFormValues>,
    page:Number
}

export default function PageFiveSixSeven({errors,register,page}:Props){

    return (<>
            {page===5?<>
            <Form.Group>
            <Form.Label>Strengths & weaknesses</Form.Label>
            <p>What worked well? Any Challenges? What do you need to work on?</p>
            <Form.Control type="textarea" placeholder="What did you learn today?"
            {...register("strengths_weaknesses")}></Form.Control>
              {errors?.strengths_weaknesses && <p>{errors.strengths_weaknesses.message}</p>}
            </Form.Group>
            
            </>:null}
            {page===6?<>
            <Form.Group>
            <Form.Label>Questions & things to review</Form.Label>
            <p>Anything you were unsure of or would like to review from the session.</p>
            <Form.Control type="textarea" placeholder="Anything you didnt understand or want to review?"
            {...register("toReview")}></Form.Control>
              {errors?.toReview && <p>{errors.toReview.message}</p>}
            </Form.Group>
            </>:null}
            {page===7?<>
            <Form.Group>
            <Form.Label>Goals & what to work on next</Form.Label>
            <p>Your goals for the next session and steps you take to achieve them</p>
            <Form.Control type="textarea" placeholder="What do you want to focus on in the next session?"
            {...register("goals")}></Form.Control>
              {errors?.goals && <p>{errors.goals.message}</p>}
            </Form.Group>
            </>:null}
    </>)
}