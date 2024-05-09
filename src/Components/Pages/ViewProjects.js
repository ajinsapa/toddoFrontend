import React from 'react';
import Table from 'react-bootstrap/Table';

function ViewProjects() {
  return (
    <div>
      <div className='container w-100 m-5 p-5'>
        <Table bordered className='text-center'>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Toddos</th>
              <th>Description</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>todoo description</td>
              <td>date</td>
              <td>
               
              </td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ViewProjects;
