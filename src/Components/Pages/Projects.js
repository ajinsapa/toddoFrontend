import React from 'react'
import './Projects.css'
import Button from 'react-bootstrap/Button';
function Projects() {
  return (
    <div  >
      <div  className='p-3' >

<h4> My Projects</h4>
<div  className='p-3 shadow-lg mb-3 d-flex justify-content-between' >

<p className='fs-5' >Project Title <i class="fa-solid fa-1x fa-pen-to-square"></i>  </p>
<div className='d-flex'>
<Button   as="input" type="button" value="View" />
    </div>
</div>
      </div>
    </div>
  )
}

export default Projects
