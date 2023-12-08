import { createSlice } from "@reduxjs/toolkit";


interface User{
    id:number
    name:string,
    email:string,
    gender:string,
    role:string
}

interface UserData{
    user:User[]
    loading:boolean
}

const initialState:UserData = {
    user:[],
    loading:false
}

const UserSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        addUser:()=>{

        },
        removeUser:()=>{

        },
        updateUser:()=>{

        }
    }
})

export default UserSlice.reducer
export const{addUser,removeUser,updateUser} = UserSlice.actions