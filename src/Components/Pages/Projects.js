import React, { useState, useEffect } from "react";
import "./Projects.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Dropdown } from "react-bootstrap";
import {
  addProjectApi,
  deleteProjectApi,
  editProjectApi,
  getProjectApi,
  getProjectTitleApi,
} from "../../service/allApi";
import Swal from "sweetalert2";

function Projects() {
  const [show, setShow] = useState(false);
  const [addProject, setAddProject] = useState({ title: "" });
  const [editForm, setEditForm] = useState(false);
  const [listProject, setListProject] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(3);
  const [projectTitle, setProjectTitle] = useState({title:""});
  const[projectId,setProjectId]=useState(null)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showEditForm = async (e, _id) => {
    e.preventDefault();
    const response = await getProjectTitleApi(_id);
    setProjectTitle({title:response.data.ProjectDetails.title});
    // console.log(response.data);
    handleShow();
    setEditForm(true);
    setProjectId(_id)
  };

  const showAddForm = () => {
    handleShow();
    setEditForm(false);
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    const { title } = addProject;
    if (!title) {
      alert("Fill all data");
    } else {
      const result = await addProjectApi(addProject);
      if (result.status >= 200 && result.status <= 300) {
        Swal.fire({
          title: "Your Project Added!",
          icon: "success",
        });
        setAddProject({ title: "" });
        getAllProjects();
        handleClose(); // Reset the title after adding
      } else {
        Swal.fire({
          title: "Project Not Added",
          icon: "warning",
        });
      }
      // console.log(result);
    }
  };

  const deleteProject = async (i) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
  
      if (result.isConfirmed) {
        const response = await deleteProjectApi(i);
  
        if (response.status >= 200 && response.status <= 300) {
          await Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          getAllProjects();
        } else {
          throw new Error("Delete request failed.");
        }
      }
    } catch (error) {
      // Handle error
      console.error("Error deleting project:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to delete project.",
        icon: "error",
      });
    }
  };
  


  const getAllProjects = async () => {
    const result = await getProjectApi();
    setListProject(result.data.allProjects);
  };

  const handleEdit=async()=>{
    console.log(projectId);
    console.log(projectTitle,"title");
    const response=await editProjectApi(projectId,projectTitle)
    console.log(response,"edit");
    alert("Edited")
    handleClose()
    getAllProjects()
  }

  const setData = (e) => {
    const { value, name } = e.target;
    if (editForm) {
      setProjectTitle({ ...projectTitle,title: value });
    } else {
      setAddProject({ ...addProject, [name]: value }); 
    }
    console.log(projectTitle);
  };
  
  

  useEffect(() => {
    getAllProjects();
  }, []);

  // Logic for pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = listProject.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  console.log(projectTitle);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="p-3">
        <div className="d-flex ">
          <h4>My Projects</h4>
          <div className="ms-auto">
            <Button
              className="mb-3 "
              onClick={showAddForm}
              as="input"
              type="button"
              value="Add Projects"
            />
          </div>
        </div>

        <div className="p-3 shadow-lg mb-3">
          {currentProjects.length > 0 ? (
            currentProjects.map((project) => (
              <div key={project.id} className="pb-3">
                <div className="d-flex justify-content-between ">
                  {/* Wrap the project title in a Link component */}
                  <Link
                    to="/view"
                    state={project}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <p className="fs-5">
                      <b>{project.title}</b>
                      <br />
                      <span style={{ fontSize: "15px" }}>
                        {project.created_date.slice(0, 10)}
                      </span>
                    </p>
                  </Link>
                  <div>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="secondary"
                        id={`dropdown-basic-${project.id}`}
                      >
                        <i className="fa-solid fa-bars"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={(e) => showEditForm(e, project._id)}
                        >
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e) => deleteProject(project?._id)}>
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {/* Pagination */}
        <nav>
          <ul className="pagination">
            {listProject.length > 0 &&
              listProject.map((project, index) => (
                <li key={index} className="page-item">
                  <a
                    onClick={() => paginate(index + 1)}
                    href="#"
                    className="page-link"
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ marginLeft: "35%" }}>
            {editForm ? "Edit Project" : "Add Project"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Project Title"
            className="mb-1"
          >
            {editForm ? (
              <Form.Control
                type="text"
                name="title"
                value={ projectTitle.title }
                onChange={(e) => setProjectTitle({...projectTitle,title:e.target.value})}
              />
            ) : (
              <Form.Control
                type="text"
                name="title"
                value={addProject.title}
                onChange={(e) => setData(e)}
              />
            )}
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          {editForm ? (
            <Button onClick={(e) => handleEdit(e)}>Edit</Button>
          ) : (
            <Button onClick={(e) => handleAddProject(e)}>Add</Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Projects;
