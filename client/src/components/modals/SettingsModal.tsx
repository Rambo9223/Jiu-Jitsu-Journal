import { JSX, ReactElement, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



type Props = {
    title:string,
    outerBody:ReactElement,
    innerBody?:JSX.Element
}


export default function SettingsModal({outerBody,title,innerBody}:Props){

    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        
        <div onClick={handleShow}>{outerBody}</div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{"textAlign":"center","margin":"0 auto"
          }}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{"textAlign":"center","margin":"0 auto"}}>
        {innerBody}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );


}