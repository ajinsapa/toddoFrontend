import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Auth() {
  const [isRegister,setIsRegister]=useState(false)
const registerPage=()=>{
  setIsRegister(true)
}
const loginPage=()=>{
  setIsRegister(false)
}

  // const isRegister=register?true:false
  return (


    <div>
   
<div className='container w-50 mt-5 mb-5 shadow-lg p-5' >

<Row className='mb-2'>

<Col className='p-3' lg={6} md={6} xs={12}>
<Link style={{textDecoration:"none"}} to="/" > <i class="fa-solid fa-house  " ></i> Home</Link>
<img className='w-100 mt-5' src={isRegister?"https://i.postimg.cc/yNRLGZD6/1317-png-860-removebg-preview.png":"https://i.postimg.cc/kM0BJPH1/3105-png-860-removebg-preview.png"} alt="" />

</Col>
<Col className='p-3 text-center mb-1'lg={6} md={6} xs={12}>
{isRegister?<h2 className='my-2'>Sign Up</h2>
:<h2 className='my-2'>Login</h2>


}
{
isRegister&& 
<FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-2 mt-3"
      >
        <Form.Control type="text" placeholder="username" />
      </FloatingLabel>
}
<FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-2 mt-2"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" className='mt-2' label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      { isRegister? 
              <Button className='mt-3 px-5 py-1 rounded-pill' as="input" type="submit" value="Sign Up" />

     :<Button className='mt-5 px-5 py-1 rounded-pill' as="input" type="submit" value="Login" />}
     {
      isRegister?       <p onClick={loginPage}>  Already have Account? <Link style={{textDecoration:"none"}} >Login</Link></p>
:       <p onClick={registerPage}>  New User? <Link style={{textDecoration:"none"}} >SignUp here</Link></p>

     }
</Col>


</Row>



</div>


     
    </div>
  )
}

export default Auth
