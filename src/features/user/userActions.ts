import {createAsyncThunk} from "@reduxjs/toolkit"
import {api} from "../../utils/api"
import {RootState} from "../../app/store"
import {UserLoginType, CreatedUserType} from 'types';


export const userLogin: any = createAsyncThunk<CreatedUserType,
    UserLoginType,
    { state: RootState }>('/login',
    async ({email, password}: UserLoginType, {rejectWithValue}) => {
        try {
            const response = await api.post(`${process.env.REACT_APP_API_URL}/login`, {email, password})
            const data = await response.data

            if (response.status === 201) {
                localStorage.setItem('userToken', data.token)
                return data
            } else {
                return rejectWithValue(data.message)
            }
        } catch (e: any) {
            return rejectWithValue(e.response.data.message);
        }
    })