import {ADD,CHECK} from '../Actions/actionType'
const initialState={
        users:[{id:"1",
        name:"Sarra",
        age:'30',
        isWorking:false
        }]};


const Reducer= (state=initialState,action)=>{
    switch (action.type){
        case ADD:
            
            return{...state,
                users:[...state.users,action.payload]}
                case CHECK :
                    return{
                    ...state,
                    users: [...state.users.map(el=>el.id ===action.payload?{...el,isWorking:!el.isWorking}:el
                        )]}
                default:
                    return state
        }

}
export default Reducer