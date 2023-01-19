import {ADD,CHECK,DELETE,EDIT} from './actionType'

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
export const Edit =(id,name)=>{
    return{
type:EDIT,
payload:{id,name}
    }
}