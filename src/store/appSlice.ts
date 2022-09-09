import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootStateType } from '.';
import { fetchAuthUserData } from './authSlice';

export type RequestStatusType = 'loading' | 'idle' | 'failed' | 'succeeded'

type AppType = {
    initialized: boolean,
    status: RequestStatusType,
    error: null | string,
}

const initialState: AppType = {
    initialized: false,
        status: 'idle' as RequestStatusType,
        error: null,
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppInit(state) {
            state.initialized = true
        },
        setAppStatus(state, action: PayloadAction<RequestStatusType>) {
            state.status = action.payload;
        },
        setAppError(state, action: PayloadAction<string | null>) {
            state.error = action.payload
        }
    },
})

export const appSlice = slice.reducer
export const {setAppStatus, setAppError, setAppInit} = slice.actions

export const initializeApp = createAsyncThunk<void, void, { state: RootStateType }>('app/initializeApp',
    async (_, {dispatch, rejectWithValue}) => {
        dispatch(setAppStatus('loading'))
        try {
            await dispatch(fetchAuthUserData())
            dispatch(setAppStatus('succeeded'))
        } catch (e: any) {
            dispatch(setAppStatus('failed'))
            setAppError('Login failed')
            return rejectWithValue({})
        } finally {
            dispatch(setAppInit())
        }
    })