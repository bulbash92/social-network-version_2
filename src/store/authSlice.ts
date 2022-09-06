import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  isLoggedIn: boolean;
  error: string;
};

type AuthState = {
  auth: AuthType;
};

type PayloadDataType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

const initialState: AuthState = {
  auth: {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoggedIn: false,
    error: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<PayloadDataType>) {
        return {
            ...state, 
            ...action.payload,
        }
    },
    stopSubmit(state, action: PayloadAction<string>) {
        return {
            ...state,
            error: action.payload,
        }
    }
  },
});

export const {setUserData, stopSubmit} = authSlice.actions
export default authSlice.reducer;