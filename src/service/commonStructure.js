import axios from "axios";

export const commonApi=async(method,url,body,header)=>{
  const config={
    method,
    url,
    data:body,
    header:header?header:{'Content-Type':'application/json'}
  }
 return  await axios(config).then(response=>{
    return response
  }).catch(response=>{
    return response
  })

}