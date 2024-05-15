import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Checkbox from '@mui/material/Checkbox';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addToddoApi, deleteToddoApi, getToddoApi, statusToddoApi } from '../../service/allApi';
import Swal from "sweetalert2";
import { Link, useLocation } from 'react-router-dom';

function ViewProjects() {
    const location = useLocation()
    const [checked, setChecked] = useState(true);
    const [show, setShow] = useState(false);
    const [listToddo, setListToddo] = useState([]);
    const id = location.state?._id
    const [addToddo, setAddToddo] = useState({
        tName: "",
        description: "",
        project_id: id,
        status: "pending"
    });
    

    const handleChange = async (id) => {
        try {
            const result = await statusToddoApi(id);
            if (result.status >= 200 && result.status <= 300) {
                console.log(result);
                getAllToddos();
                alert("Marked as Completed");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setData = (e) => {
        const { value, name } = e.target;
        setAddToddo({ ...addToddo, [name]: value });
    };

    const handleAddToddo = async (e) => {
        e.preventDefault();
        const { tName, description } = addToddo;
        if (!tName || !description) {
            alert("Fill all data");
        } else {
            const result = await addToddoApi(addToddo);
            if (result.status >= 200 && result.status <= 300) {
                Swal.fire({
                    title: "Your Toddo Added!",
                    icon: "success",
                });
                setAddToddo({ tName: "", description: "" });
                handleClose();
                getAllToddos();
            } else {
                Swal.fire({
                    title: "Toddo Not Added",
                    icon: "warning",
                });
            }
            console.log(result);
        }
    };

    const deleteToddo = async (e, i) => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { project_id } = addToddo;
                const response = await deleteToddoApi(i);
                console.log(response);
                if (response.status >= 200 && response.status <= 300) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    }).then(() => {
                        getAllToddos();
                    });
                }
            }
        });
    };

    const getAllToddos = async () => {
        try {
          
            console.log(id);
            const result = await getToddoApi(id);

            // Check if result.data is defined before accessing its properties
            if (result.data && result.data.getTodos) {
                setListToddo(result.data.getTodos);
                console.log(result);
            } else {
                console.log("Error: No todos found.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllToddos();
    }, []);

    return (
        <div>
            <div className='container w-100 m-5 p-5'>
                <h1 className='text-center'>{location.state.title}</h1>
                <div className='text-end mb-2'>
                    {/* Conditional rendering for button label */}
                    <Button as='input' type='button' value='Add Toddo' onClick={handleShow} />
                </div>

                <Table bordered className='text-center'>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Toddos</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Updated Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listToddo.map((i, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{i.tName}</td>
                                <td>{i.description}</td>
                                <td>{i.created_date.slice(0, 10)}</td>
                                <td> {i.updated_date.slice(0, 10)} </td>
                                <td>{i.status === 'completed' ? "Completed ✅" :
                                    <Checkbox
                                        checked={i.status === 'completed'}
                                        disabled={i.status === 'completed'}
                                        onChange={(e) => handleChange(i?._id)}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                }</td>
                                <td>
                                    <div className='mt-2'>
                                        {/* Call handleShow with 'edit' mode */}
                                        <Link to={`/edit/${i?._id}`} state={i}>
                                            <i
                                                style={{ color: 'green', cursor: 'pointer' }}
                                                className='fa-solid fa-pen-to-square'
                                            ></i></Link>
                                        <i style={{ color: 'Red', cursor: 'pointer' }} onClick={(e) => deleteToddo(e, i)} className='fa-solid fa-trash mx-3'></i>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Link to={"/home"} >
                    <i className="fa-solid fa-backward  "> back</i>
                </Link>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ marginLeft: '35%' }}>Add Toddo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId='floatingInput' label='Toddo' className='mb-3'>
                        <Form.Control type='text' onChange={(e) => setData(e)} name={"tName"} />
                    </FloatingLabel>
                    <Form.Control as='textarea' onChange={(e) => setData(e)} name={"description"} placeholder='Description' style={{ height: '100px' }} />

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={(e) => handleAddToddo(e)} variant='primary'>Add Toddo</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ViewProjects;
