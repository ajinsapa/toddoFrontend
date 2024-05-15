import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Landing.css'
import Button from 'react-bootstrap/Button';
import Header from '../Header';

function Landing() {
  return (
    <div>
        <Header></Header>

      <Container   >
        
<Row className='m-5 p-5' >
<Col lg={4} md={6} xs={12}  >
<div>
<img className='m5' src="https://i.postimg.cc/1t8Ng0JX/welcome-left.png" alt="" />

</div>
</Col>



<Col lg={4} md={6} xs={12} >
<div className='text-center'>
<img className='m6' src="https://i.postimg.cc/2jLQcmmJ/logo.png" alt="" />

<h3 className='mt-2' >toDo</h3>
<h4>To Do gives you to focus,from work to play.</h4>
<div className='text-center'> 
<Button  href="/Auth" className='mt-3' variant="primary" size="lg">
     Get Started
        </Button>{' '}</div>
</div>
</Col>

<Col lg={4} md={6} xs={12} >
<div >

<img className='m7' src="https://i.postimg.cc/cCs7vtgb/welcome-right.png" alt="" />

</div>

</Col>

</Row>







      </Container>
    </div>
  )
}

export default Landing
