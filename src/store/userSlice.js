import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:null,
    drawerIsOpen:false
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserDetails:(state,action) =>{
            state.user = action.payload
        },
        drawer:(state,action) =>{
            state.drawerIsOpen = action.payload
        }
    }
})

export const {setUserDetails,drawer} = userSlice.actions

export default userSlice.reducer