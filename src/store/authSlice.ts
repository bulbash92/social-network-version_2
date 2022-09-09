import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Auth } from '../services/auth/auth';
import { setAppError, setAppStatus } from './appSlice';

export type SubmitDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const initialState: InitStateType = {
  id: null,
  email: null,
  login: null,
  status: null,
  remember: false,
  isAuth: false,
  error: null,
  captchaUrl: null,
};

type InitStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  status: string | null;
  remember: boolean;
  isAuth: boolean;
  error: string | null;
  captchaUrl: string | null;
};

export const fetchAuthUserData = createAsyncThunk(
  'auth/fetchAuthUserData',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      let res = await Auth.me();
      if (res.resultCode === 0) {
        let { id, email, login } = res.data;
        // await dispatch(fetchFriends())
        // let {id, email, login} = res.data
        // let authProfile = await profileAPI.getUserProfile(id)
        // let status = await profileAPI.getUserStatus(id)
        return { id, email, login, isAuth: true };
      }
    } catch (e: any) {
      return rejectWithValue(null);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (data: SubmitDataType, { dispatch, rejectWithValue }) => {
    dispatch(setAppStatus('loading'));
    try {
      let res = await Auth.login(data);
      if (res.data.resultCode === 0) {
        await dispatch(fetchAuthUserData());
        dispatch(setAppError(null));
        dispatch(setAppStatus('succeeded'));
        return '';
      }
      if (res.data.resultCode === 10) {
        dispatch(setAppError(res.data.messages[0]));
        let captchaRes = await Auth.captchaRequest();
        dispatch(setAppStatus('failed'));
        return captchaRes.data.url;
      }

      if (res.data.messages.length > 0) {
        dispatch(setAppError(res.data.messages[0]));
        dispatch(setAppStatus('failed'));
        return rejectWithValue({});
      }
    } catch (e: any) {
      dispatch(setAppStatus('failed'));
      dispatch(setAppError(e.message));
      return rejectWithValue({});
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(setAppStatus('loading'));
    try {
      let res = await Auth.logout();
      if (res.data.resultCode === 0) {
        // dispatch(clearFriendsData())
        // dispatch(changeFriendsCount(null))
        dispatch(setAppStatus('succeeded'));
        return { id: null, email: null, login: null, isAuth: false };
      } else {
        dispatch(setAppStatus('failed'));
        dispatch(setAppError(res.data.messages[0]));
        return rejectWithValue({});
      }
    } catch (e: any) {
      dispatch(setAppStatus('failed'));
      dispatch(setAppError(e.message));
      return rejectWithValue({});
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled, (state) => {
        return {
          id: null,
          isAuth: false,
          error: null,
          login: null,
          status: null,
          email: null,
          authProfile: null,
          captchaUrl: null,
          remember: false,
        };
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload) {
          state.captchaUrl = action.payload;
        }
      })
      .addCase(fetchAuthUserData.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      });
  },
});

export default authSlice.reducer;
