import {  Button, Form } from "react-bootstrap";
import { FieldErrors, UseFormRegister,  } from "react-hook-form";
import { MediaFormValues } from "../../types/formTypes";
import { X } from "react-bootstrap-icons";


type Props = {
    errors:FieldErrors<MediaFormValues>,
    register:UseFormRegister<MediaFormValues>,
}

export default function PageOne({errors,register}:Props){

    


    return (<>

            <Form.Group >
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="title"
            {...register("title")}></Form.Control>
              {errors?.title && <p className="form-errors">{errors.title.message}</p>}
            </Form.Group>
   
            <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="datetime-local" 
            {...register("date")}></Form.Control>
              {errors?.date && <p className="form-errors">{errors.date.message}</p>}
            </Form.Group>

             <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Select aria-label="default-select-example" 
                {...register("type")}>
                    <option>Select Media</option>
                    <option value={"image"}>Image</option>
                    <option value={"video"}>Video</option>
                    <option value={"link"}>Link</option>
                </Form.Select>
                {errors?.type && <p className="form-errors">{errors.type.message}</p>}
             </Form.Group>

            <Form.Group >
            <Form.Label>Link</Form.Label>
            <Form.Control type="text" placeholder="link"
            {...register("link")}></Form.Control>
              {errors?.link && <p className="form-errors">{errors.link.message}</p>}
            </Form.Group>

            <Form.Group >
            <Form.Label>Upload File</Form.Label>
            <Form.Control type="file" placeholder="upload a file"
            {...register("file",{onChange:(e)=>{console.log(e.target.value)}})}></Form.Control>
              {errors?.file && <p className="form-errors">{errors.file.message}</p>}
            </Form.Group>


            <Button type="submit" variant="primary">Add Media</Button>

    </>)
}