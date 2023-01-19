import React from 'react'

import {useSelector} from 'react-redux'
import Userss from './Userss'

const ListUsers = () => {
  
    const initialState = useSelector(state => state.Reducer)

  return (
    <div>
      {initialState.users.map(el=><div> <Userss el={el}/></div>)}
    </div>
  
  )}

export default ListUsers