import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name:"account",
    initialState:{
        token:null,
        userName:null,
        isLoggedIn:false
    },
    reducers:{
        logInAction: (state, action) => {
            state.isLoggedIn = true
            state.token = action.payload.token
            state.userName = action.payload.userName
        },

        logOutAction: (state, action) => {
            state.isLoggedIn = false
            state.token = null
            state.userName = null
        },
        updateUser:(state, action) => {
            state.userName = action.payload
        }
    },
})

export const { logInAction, logOutAction, updateUser } = accountSlice.actions
export default accountSlice.reducer