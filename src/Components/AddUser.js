import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import {Add} from '../Actions/actions';
import {Check} from '../Actions/actions'
const AddUser = () => {
  const [user, setUser] = useState({
    id:"",
    name: "",
    age: "",
    isWorking: false,
  });

const dispatch=useDispatch()

const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser({...user,[name]:value});
}
const handleadd=(e)=>{
  e.preventDefault();

  dispatch(Add(user))
}
const handleChangeisWorking=(e)=>{
  setUser({...user,isWorking:e.target.checked})
}

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'40px' }}>
      <Form style={{display:"flex",flexDirection:"column", alignItems:"center",borderStyle:'outset',width:'30%',borderColor:'pink'}} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your Name"
          name='name'
          value={user.name}
          onChange={handleChange}/>
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" placeholder="Enter your Age"  name='age'
          value={user.age}
          onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Working" onChange={handleChangeisWorking}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleadd} style={{backgroundColor:'lightsalmon',borderColor:'white'}}>
          Add
        </Button>
      </Form>
      
      </div>
  );
};

export default AddUser;
