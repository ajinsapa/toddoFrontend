import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <Row className="bg-body-tertiary footer">
        <Col className="f1 p-5" lg={3} md={4}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img className="m2" src="https://i.postimg.cc/2jLQcmmJ/logo.png" alt="" />
              <h3 style={{ marginLeft: '5px', marginBottom: '0' }}>toDo</h3>
            </div>
            <p>A simple app with natural language processing for quick task creation, and a productivity tracker to help you stay on track.</p>
          </div>
        </Col>
        <Col lg={3} md={4} className="p-5 text-center">
          <div>
            <h5>Links</h5>
            <Link style={{ textDecoration: 'none', color: 'black' }}>Home</Link> <br />
            <Link style={{ textDecoration: 'none', color: 'black' }}>Login</Link> <br />
          </div>
        </Col>
        <Col lg={3} md={4} className="f1">
          <div className="p-5">
            <h5>Guides</h5>
            <h6>React</h6>
            <h6>React Bootstrap</h6>
            <h6>Routing</h6>
          </div>
        </Col>
        <Col lg={3} md={4}>
          <div className="p-5">
            <h5>Connect With Us</h5>
            <label htmlFor="">
              <input type="text" placeholder="email address" />
            </label>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
