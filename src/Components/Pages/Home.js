import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Projects from "./Projects";

function Home() {
  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setUser(JSON.parse(localStorage.getItem("currentUser")).userName);
    } else {
      setUser("");
    }
  }, []);
  console.log(user);
  return (
    <div>
      <Row className="my-5 p-3 container w-100 ms-5 shadow-lg ">
        <Col lg={12}>
          <div className="p-3  mb-3">
            <h1 style={{ color: "#326da8" }}> Welcome {user}</h1>

            <hr />
          </div>

          <Projects></Projects>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
