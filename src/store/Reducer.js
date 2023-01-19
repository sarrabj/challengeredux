import {ADD,CHECK} from './actionType'
const initialState={
        users:[{id:'1',
        name:"Sarra",
        age:'30',
        isWorking:false
        }]};


const Reducer= (state=initialState,action)=>{
    switch (action.type){
        case ADD:
            
            return{
                ...state,users:[...state.users,action.payload]}
        
                default:
                    return state
        }

}
export default Reducer