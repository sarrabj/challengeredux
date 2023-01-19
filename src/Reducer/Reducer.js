import {ADD,CHECK,DELETE,EDIT} from '../Actions/actionType'
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
                        case DELETE:
                            return{...state,
                                users:[...state.users.filter(el=>el.id !== action.payload)  ]
                            }
                            case EDIT:
                                return{
                                    ...state,
                                    users:[...state.users.map((el)=>el.id === action.payload.id?{...el,name:action.payload.name}:el)]
                                }

                default:
                    return state
        }

}
export default Reducer