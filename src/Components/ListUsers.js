import React from 'react'

import {useSelector} from 'react-redux'
import Userss from './Userss'
import Form from 'react-bootstrap/Form';
import {useState} from 'react'

const ListUsers = () => {
  
    const initialState = useSelector(state => state.Reducer)
const [status,setStatus]=useState("ALL")
return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <Form.Select style={{margin:'20px',width:'200px'}} aria-label="Default select example" onChange={(e)=>setStatus(e.target.value)}>
      
      <option value="ALL">All</option>
      <option value="Working">Working</option>
      <option value="NotWorking"  >Not Working</option>
    </Form.Select>
    
      {status==="ALL"?
      <>{initialState.users.map(el=><div> <Userss el={el}/>
      </div>)}</>:status==="Working"? initialState.users.filter((el)=>el.isWorking===true).map(el=><div> <Userss el={el}/></div>):
      initialState.users.filter((el)=>!el.isWorking===true).map(el=><div> <Userss el={el}/></div>)}

    </div>
  
  )}

export default ListUsers