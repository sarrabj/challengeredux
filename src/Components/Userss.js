import React from 'react'
import Table from 'react-bootstrap/Table';
import EditUser from './EditUser';
import {Delete} from '../Actions/actions'
import {useDispatch} from 'react-redux'
const Userss = ({el}) => {
  const dispatch=useDispatch()
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>{el.name}</th>
          <th>{el.age}</th>
          <th><EditUser el={el}/>
          <button style={{backgroundColor:'white',borderRadius:'5px',margin:'5px',borderColor:'aquamarine'}} onClick={() => dispatch(Delete(el.id)) }>Delete</button> </th>
        </tr>
      </thead>
      
        
    </Table>
        
      

        
    </div>
  )
  
}

export default Userss