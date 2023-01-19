import React from 'react'
import Table from 'react-bootstrap/Table';

const Userss = ({el}) => {
 
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>{el.name}</th>
          <th>{el.age}</th>
          <th>{el.isWorking? <th>working</th>: <th>not working</th>}</th>
        </tr>
      </thead>
      
        
    </Table>
        
      

        
    </div>
  )
  
}

export default Userss