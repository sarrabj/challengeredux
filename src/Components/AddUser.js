import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import {Add} from '../store/actions';

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


  return (
    <div>
      <Form >
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
          <Form.Check type="checkbox" label="Working" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => dispatch(Add(user))}>
          Add
        </Button>
      </Form>
      
      </div>
  );
};

export default AddUser;
