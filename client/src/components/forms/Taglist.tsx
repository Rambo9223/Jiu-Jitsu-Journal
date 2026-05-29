import { bjj_tags } from "../utils/bjj_tags";
import { useState } from "react";
import { Modal,Button,ListGroup,FormSelect } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
import { UseFieldArrayAppend } from "react-hook-form";
import { LogFormValues, NoteFormValues } from "../types/formTypes";


type selects = {
    head:string,
    body:string[];
}

type Props = {
    append:UseFieldArrayAppend<LogFormValues, "tags">|UseFieldArrayAppend<NoteFormValues,"tags">;
}

export default function Taglist({append}:Props){
const [show, setShow] = useState(false);
const [tags,setTags] = useState<string[]>([])
const [category,setCategory] = useState<selects>({
    head:"positions",
    body:Object.values(bjj_tags)[0]
});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a tag
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tags</Modal.Title>
          <FormSelect value={category.head} onChange={(e)=>{
            let target = e.target.value;
            setCategory({
                head:e.target.value,
                body:Object.values(bjj_tags)[Object.keys(bjj_tags).indexOf(target)]
            })
            }}>
            <option disabled >select a category</option>
            {Object.keys(bjj_tags).map((key)=>{
                return <option key={key} value={key}>{key}</option>
            })}
          </FormSelect>
        </Modal.Header>
        
        <Modal.Body>
            <ListGroup>
            {category.body.map((item)=>{
                const itemProps={
                    disabled:false,color:"white"
                }
                if(tags.includes(item)){
                    itemProps.disabled = true; 
                    itemProps.color = "red";
                }
                return <ListGroup.Item disabled={itemProps.disabled} style={{backgroundColor:itemProps.color}}  key={item} onClick={()=>{
                    console.log(item);
                    const newTags = [...tags]
                    newTags.push(item);
                    setTags(newTags);
                }}>{item}</ListGroup.Item>
            })}
            </ListGroup>
            <ListGroup>
             {tags.map((tag)=>{
                return <div key={tag}>{tag}<span onClick={()=>{
                const index = tags.indexOf(tag);
                tags.splice(index,1);
                const newTags = [...tags];
                setTags(newTags);
                
                }}><XLg/></span></div>
            })}
            </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            tags.forEach((tag)=>{
                append({name:tag})
            })
            setTags([])
            handleClose();
          }}>
            Add Tags
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}