import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { login, register } from "../../service/allApi";
import Swal from "sweetalert2";

function Auth() {
  const [isRegister, setIsRegister] = useState(false);
  const registerPage = () => {
    setIsRegister(true);
  };
  const loginPage = () => {
    setIsRegister(false);
  };
const navigate=useNavigate()
  //validation state

  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passValid, setPassValid] = useState(false);

  //state

  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const { userName, email, password } = user;
    if (!userName || !email || !password) {
      alert("Please fill All Datas");
    } else {
      const result = await register(user);
      console.log(result);
      if (result.status == 200) {
        Swal.fire({
          title: "Registerd Successfully!",
          text: "You can login now",
          icon: "success",
        });
        setUser({
          userName: "",
          email: "",
          password: "",
        });
        setIsRegister(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You Are Registered Already!",
        });
        setUser({
          userName: "",
          email: "",
          password: "",
        });
      }
    }
  };

  const handleLogin = async (e) => {
    const { email, password } = user;

    if (!email || !password) {
      alert("Please fill All Datas");
    } else {
      const result = await login(user);
      console.log(result);
      if (result.status == 200) {
        
               //Store token

               localStorage.setItem("currentUser",JSON.stringify(result.data.user))
               localStorage.setItem("token",result.data.token)


        Swal.fire({
          title: "Login Successfully!",
          icon: "success",
        });
 navigate('/home')
        setUser({
          email: "",
          password: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "incorrect email or password !",
        });
        setUser({
          email: "",
          password: "",
        });
      }
    }
  };

  const setData = (e) => {
    const { value, name } = e.target;

    if (name == "userName") {
      if (value.match(/^[a-zA-Z0-9]+$/)) {
        setNameValid(false);
      } else {
        setNameValid(true);
      }
    }

    if (name == "email") {
      if (value.match(/^[a-zA-Z0-9@.]+$/)) {
        setEmailValid(false);
      } else {
        setEmailValid(true);
      }
    }

    if (name == "password") {
      if (value.match(/^[a-zA-Z0-9@$#!.*]+$/)) {
        setPassValid(false);
      } else {
        setPassValid(true);
      }
    }

    setUser({ ...user, [name]: value });
  };

  console.log(user);

  // const isRegister=register?true:false
  return (
    <div>
      <div className="container w-50 mt-5 mb-5 shadow-lg p-5">
        <Row className="mb-2">
          <Col className="p-3" lg={6} md={6} xs={12}>
            <Link style={{ textDecoration: "none" }} to="/">
              {" "}
              <i class="fa-solid fa-house  "></i> Home
            </Link>
            <img
              className="w-100 mt-5"
              src={
                isRegister
                  ? "https://i.postimg.cc/yNRLGZD6/1317-png-860-removebg-preview.png"
                  : "https://i.postimg.cc/kM0BJPH1/3105-png-860-removebg-preview.png"
              }
              alt=""
            />
          </Col>
          <Col className="p-3 text-center mb-1" lg={6} md={6} xs={12}>
            {isRegister ? (
              <h2 className="my-2">Sign Up</h2>
            ) : (
              <h2 className="my-2">Login</h2>
            )}
            {isRegister && (
              <div>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Username"
                  className="mb-2 mt-3"
                >
                  <Form.Control
                    name="userName"
                    value={user.userName}
                    onChange={(e) => setData(e)}
                    type="text"
                    placeholder="username"
                  />
                </FloatingLabel>
                {nameValid && (
                  <p style={{ color: "blue" }}>UserName Not valid</p>
                )}
              </div>
            )}
            <div>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-2 mt-2"
              >
                <Form.Control
                  name="email"
                  value={user.email}
                  onChange={(e) => setData(e)}
                  type="email"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              {emailValid && (
                <p style={{ color: "blue" }}>Email is Not valid</p>
              )}
            </div>

            <div>
              <FloatingLabel
                controlId="floatingPassword"
                className="mt-2"
                label="Password"
              >
                <Form.Control
                  value={user.password}
                  name="password"
                  onChange={(e) => setData(e)}
                  type="password"
                  placeholder="Password"
                />
              </FloatingLabel>
              {passValid && (
                <p style={{ color: "blue" }}>Password is Not valid</p>
              )}
            </div>

            {isRegister ? (
              <Button
                onClick={(e) => handleRegister(e)}
                className="mt-3 px-5 py-1 rounded-pill"
                as="input"
                type="submit"
                value="Sign Up"
              />
            ) : (
              <Button
                className="mt-5 px-5 py-1 rounded-pill"
                onClick={(e) => handleLogin(e)}
                as="input"
                type="submit"
                value="Login"
              />
            )}
            {isRegister ? (
              <p onClick={loginPage}>
                {" "}
                Already have Account?{" "}
                <Link style={{ textDecoration: "none" }}>Login</Link>
              </p>
            ) : (
              <p onClick={registerPage}>
                {" "}
                New User?{" "}
                <Link style={{ textDecoration: "none" }}>SignUp here</Link>
              </p>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Auth;
