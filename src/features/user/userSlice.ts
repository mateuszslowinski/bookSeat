import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {userLogin} from "./userActions";
import {CreatedUserType} from 'types';


export interface UserState {
    userData: CreatedUserType | null
    isSuccess: boolean
    isFetching: boolean
    isError: boolean
    errorMessage: string
}

const initialState: UserState = {
    userData: null,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //LOGIN USER
        builder.addCase(userLogin.pending, (state) => {
            state.isFetching = true
        })
        builder.addCase(userLogin.rejected,
            (state,
             {payload}: PayloadAction<{ message: string }>
            ) => {
                state.isFetching = false
                state.isError = true
                state.errorMessage = payload.message
            })
        builder.addCase(userLogin.fulfilled,
            (state,
             {payload}: PayloadAction<CreatedUserType>
            ) => {
                state.userData = payload
                state.isFetching = false
                state.isSuccess = true
                state.isError = false
                state.errorMessage = ''
                return state
            })
    }
})