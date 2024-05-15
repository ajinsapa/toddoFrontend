import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useParams } from "react-router-dom";
import { editToddoApi, getSingleToddoApi } from "../../service/allApi";


function EditProjects() {
  const location = useLocation()
  
  const values = location.state
  const [data,setData] = useState()
  const [editInputs, setEditInputs] = useState({
  tName:data?.tName,
description:data?.description});


const  {id} = useParams()

const handleEdit = async()=>{
  try {
    const id = values?._id
    const result = await editToddoApi(id,editInputs)
    if(result.status >=200 && result.status<=300){
      
      alert("edit Succesful")
    }
  } catch (error) {
    console.log(error);
    alert("not Succesful")
  } 
}

const handleSingleToDo = async()=>{

  try {
    const result = await getSingleToddoApi(id)
 
  setEditInputs({tName:result.data.singleTodo.tName,description:result.data.singleTodo.description})
  } catch (error) {
    
  }

}
useEffect(()=>{
  handleSingleToDo()
},[])
 
  return (
    <Container
      className="m-5 p-5 shadow-lg    "
      style={{ border: "1px black solid" }}
    >
      <div className="w-40% ">
       
        <h1 className="text-center">Edit Toddo</h1>
        <FloatingLabel controlId="floatingInput" label="Toddo" className="mb-3">
          <Form.Control type="text" value={editInputs.tName} onChange={(e)=>setEditInputs({...editInputs,tName:e.target.value})} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Description">
          <Form.Control as="textarea" style={{ height: "100px" }} value={editInputs.description} onChange={(e)=>setEditInputs({...editInputs,description:e.target.value})} />{" "}
        </FloatingLabel>
        <div className="text-center">
          <Button className="mt-5 " variant="primary" size="lg" onClick={handleEdit}>
            Edit
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default EditProjects;
