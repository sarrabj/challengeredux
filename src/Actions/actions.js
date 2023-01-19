import {ADD,CHECK,DELETE} from './actionType'

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
export const Delete =(id)=>{
    return{
type:DELETE,
payload:id
    }
}