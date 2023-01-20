import React from 'react'
import Table from 'react-bootstrap/Table';
import EditUser from './EditUser';
import {Delete} from '../Actions/actions'
import {useDispatch} from 'react-redux'
import Badge from 'react-bootstrap/Badge';
const Userss = ({el}) => {
  const dispatch=useDispatch()
  return (
    <div style={{}}>
        <Table striped bordered hover style={{backgroundColor:'lightsalmon',borderStyle:'double',borderColor:'gray'}} >
      <thead>
        <tr>
          <th style={{width:'200px'}} >{el.name}</th>
          <th style={{width:'200px'}}>{el.age}</th>
          <th style={{width:'250px',}} ><EditUser el={el}/>
          <button style={{backgroundColor:'white',borderRadius:'5px',margin:'5px',borderColor:'white'}} onClick={() => dispatch(Delete(el.id)) }>Delete</button> </th>
        
          <th  style={{width:'200px'}} > {el.isWorking? <><Badge bg="success">
        Working
      </Badge>{' '} </>
      :<>
       <Badge bg="danger">
        Not Working
      </Badge>{' '} </> } </th>
        
        
        </tr>
     
      </thead>
      
        
    </Table>
        
      

        
    </div>
  )
  
}

export default Userss