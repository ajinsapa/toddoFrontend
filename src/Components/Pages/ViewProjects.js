import React from 'react';
import Table from 'react-bootstrap/Table';
import Checkbox from '@mui/material/Checkbox';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function ViewProjects() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
      <div className='container w-100 m-5 p-5'>

        <h1 className='text-center'>Project Title</h1>
        <div className='text-end mb-2'>        
        <Button  onClick={handleShow}  as="input" type="button" value="Add Toddo" />
</div>


        <Table bordered className='text-center'>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Toddos</th>
              <th>Description</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>todoo description</td>
              <td>date</td>
              <td>
              <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
              </td>
              <td>




              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton >
    <Modal.Title style={{marginLeft:"35%"}}>Project Title</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <FloatingLabel
        controlId="floatingInput"
        label="Toddo"
        className="mb-3"
      >
        <Form.Control type="text" />
      </FloatingLabel>
      <Form.Control
          as="textarea"
          placeholder="Description"
          style={{ height: '100px' }}
        />
      <FloatingLabel  className='mt-3' controlId="floatingPassword" label="Date">
        <Form.Control type="text" placeholder="Password" />
      </FloatingLabel>
  </Modal.Body>
  <Modal.Footer>
   
    <Button variant="primary">
    Add Toddo
    </Button>
  </Modal.Footer>
</Modal>

    </div>
  );
}

export default ViewProjects;
