import { BASEURL } from "./baseUrl";
import { commonApi } from "./commonStructure";


export const register=async(body)=>{
    
    return await commonApi('POST',`${BASEURL}/user/register`,body,"")

}
export const login=async(body)=>{
    return await commonApi('POST',`${BASEURL}/user/login`,body,"")
}

//addproject

export const addProjectApi=async(body)=>{
    return await commonApi('POST',`${BASEURL}/projects/addProject`,body,"")
}
export const getProjectApi=async()=>{
    return await commonApi('GET',`${BASEURL}/projects/allProjects`,"","")
}

export const addToddoApi=async(body)=>{
    return await commonApi('POST',`${BASEURL}/todo/addTodo`,body,"")
}
export const getToddoApi=async(id)=>{
    return await commonApi('GET',`${BASEURL}/todo/todoList/${id}`,"","")
}

export const deleteToddoApi=async(data)=>{
    const id = {id:data._id}
    return await commonApi('DELETE',`${BASEURL}/todo/deleteTodo`,id)
  }

  export const editToddoApi=async(id,body)=>{
    return await commonApi('POST',`${BASEURL}/todo/editTodo/${id}`,body,"")
}

export const statusToddoApi=async(id)=>{
    return await commonApi('PUT',`${BASEURL}/todo/updateStatus/${id}`,"")
}

export const deleteProjectApi=async(data)=>{
    const id = {id:data}
    return await commonApi('DELETE',`${BASEURL}/deleteProject/delete`,id)
  }

  export const editProjectApi=async(id,body)=>{
    return await commonApi('POST',`${BASEURL}/project/editProject/title/${id}`,body,"")
}

export const getSingleToddoApi=async(id)=>{
    return await commonApi('GET',`${BASEURL}/todos/getSingleTodo/${id}`,"","")
}

export const getProjectTitleApi=async(id)=>{
    return await commonApi('GET',`${BASEURL}/project/viewProject/${id}`,"","")
}