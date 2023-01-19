import React from 'react'
import {Edit} from '../Actions/actions'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useDispatch } from 'react-redux';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const EditUser = ({el}) => {
    const [edittext, setEdittext] = useState("")
    const editchange = (e) => {
        setEdittext(e.target.value)
      }
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const dispatch = useDispatch()




  return (
    <div>
<Button variant="primary" onClick={() => {
            handleShow()
          }} style={{backgroundColor:'white',borderRadius:'5px',margin:'5px',borderColor:'aquamarine',color:'black'}}>
            Edit
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modify Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                  <Form.Control
                    type="email"
                    placeholder="Write modification"
                    onChange={editchange}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >

                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={() => dispatch(Edit(el.id,edittext))}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

    </div>
  )
}

export default EditUser