import React from "react";
import "./Projects.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
function Projects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//add projects

const[addProject,setAddProject]=useState({
  title:""
})

//input

const setData=(e)=>{

const{value,name}=e.target
setAddProject({...addProject,[name]:value})

}



  return (
    <div>
      <div className="p-3">
        <div>
          <h4> My Projects</h4>
          <Button
            className="mb-3"
            onClick={handleShow}
            as="input"
            type="button"
            value="Add Projects"
          />
        </div>
        <div className="p-3 shadow-lg mb-3 d-flex justify-content-between">
          <p className="fs-5">
            Project Title <i class="fa-solid fa-1x fa-pen-to-square"></i>{" "}
          </p>
          <div className="d-flex">
            <Button as="input" type="button" value="View Project" />
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ marginLeft: "35%" }}>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Project Title"
            className="mb-1"
          >
            <Form.Control type="text" name="title"  onChange={(e)=>setData(e)}  />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Projects;
