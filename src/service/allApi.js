import { BASEURL } from "./baseUrl";
import { commonApi } from "./commonStructure";


export const register=async(body)=>{
    
    return await commonApi('POST',`${BASEURL}/user/register`,body,"")

}
export const login=async(body)=>{
    return await commonApi('POST',`${BASEURL}/user/login`,body,"")
}