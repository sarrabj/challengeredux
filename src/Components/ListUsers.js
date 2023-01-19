import React from 'react'
import {Delete} from '../Actions/actions'
import {useSelector,useDispatch} from 'react-redux'
import Userss from './Userss'

const ListUsers = () => {
  const dispatch=useDispatch()
    const initialState = useSelector(state => state.Reducer)

  return (
    <div>
      {initialState.users.map(el=><div> <Userss el={el}/>
      <button onClick={() => dispatch(Delete(el.id)) }>delete</button>
      <button>Edit</button>
      </div>
      )}
    </div>
  
  )}

export default ListUsers