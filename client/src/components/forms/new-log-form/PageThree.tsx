import {  Form,Button } from "react-bootstrap";
import { FieldErrors, UseFormRegister,  } from "react-hook-form";
import { LogFormValues } from "../../types/formTypes";
import { ClockHistory } from "react-bootstrap-icons";

type Props = {
    errors:FieldErrors<LogFormValues>,
    register:UseFormRegister<LogFormValues>,
}

export default function PageThree({errors,register}:Props){


    return (
        <>
        {Object.keys(errors).length>1?<p className="form-errors">Check entries on previous page</p>:null}
            <Form.Group>
            <Form.Label>Overview</Form.Label>
            <p>A description of what you did, the techniques learned or practiced.</p>
            <Form.Control type="textarea" placeholder="What did you learn today?"
            {...register("overview")}></Form.Control>
              {errors?.overview && <p className="form-errors">{errors.overview.message}</p>}
            </Form.Group>
            <div><ClockHistory/><p>In a rush to shower after class? Save for now and edit your logs later!</p></div>
            
            <Button type="submit" variant="primary" >Save For Now</Button>
            <p>Otherwise, click Continue to finish completing your training log.</p>
        </>
    )
}