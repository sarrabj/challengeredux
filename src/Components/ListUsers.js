import React from 'react'

import {useSelector,useDispatch} from 'react-redux'
import Userss from './Userss'


const ListUsers = () => {
  const dispatch=useDispatch()
    const initialState = useSelector(state => state.Reducer)

  return (
    <div style={{margin:'10px'}}>
      {initialState.users.map(el=><div> <Userss el={el}/>
      
     
      </div>
      )}
    </div>
  
  )}

export default ListUsers