import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LogFormValues } from '../types/formTypes';
import EditLogForm from '../forms/EditLogForm';


type Props = {
    log : LogFormValues,
}


export default function EntryModal({log}:Props){

    // a simple function to display a modal component when user clicks a button 

  // the title,body and text values are supplied as props

  

  const [show, setShow] = useState(false);
  const [editing,setEditing] = useState(false);
  const handleClose = () => {setShow(false);setEditing(false)}
  const handleShow = () => setShow(true);

  return (
    <>
      {/*<Button variant={buttonVariant} onClick={handleShow}>{buttonText}</Button>*/}
        <div onClick={handleShow} className="action">{`Read >`}</div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{"textAlign":"center","margin":"0 auto",
          "paddingLeft":"75px"
          }}>Training Log</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{"textAlign":"center","margin":"0 auto"}}>
          <EditLogForm editing={editing} setEditing={setEditing} log={log}/>
        </Modal.Body>
        <Modal.Footer style={{"position":"sticky"}}>
          {(editing===false)?<Button variant='warning' onClick={()=>{setEditing(true)}}>Edit</Button>:null}
          <Button variant='danger' /*add onclick delete */ >Delete</Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );


}