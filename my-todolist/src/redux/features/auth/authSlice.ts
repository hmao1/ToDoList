import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

/*
interface loginState {
    isLogin: boolean,
    userName: string,
    jwtToken: string,
    errorMsg: string
};
*/

interface IUserInfo {
    username: string,
    jwtToken: string
}

interface loginState {
    isLogin: boolean,
    userInfo: IUserInfo
}

const initialState: loginState = {
    isLogin: false,
    userInfo: { username: '', jwtToken: '' }
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLogin = true;
            state.userInfo = action.payload;

        },
        loginFail: (state) => {
            state.isLogin = false;
            //state.userInfo = action.payload;
        },

        logOut: (state) => {
            state.isLogin = false;
            state.userInfo = {
                username: '', jwtToken: ''
            };
        }

    }
});

//export the action creators?
export const { loginSuccess, loginFail, logOut } = authSlice.actions;

export const selectIsLgoin = (state: RootState) => state.auth.isLogin;
export const selectUserInfo = (state: RootState) => state.auth.userInfo;

export default authSlice.reducer;