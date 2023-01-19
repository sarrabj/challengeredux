import {ADD,CHECK} from './actionType'

export const Add =(payload)=>{
return{
    type:ADD,
    payload:payload
}}
export const Check =(id)=>{
    return{
type:CHECK,
payload:id
    }
}
