import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface signUpState {
    submitSignUp: boolean,
    isSignUp: boolean
}

const initialState: signUpState = {
    submitSignUp: false,
    isSignUp: false
}

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        submitSignUpSuccess: (state) => {
            state.submitSignUp = true;
        },
        submitSignUpFail: (state) => {
            state.submitSignUp = false;
        },
        successSignUp: (state) => {
            state.submitSignUp = true;
            state.isSignUp = true;
        },
        failSignUp: (state) => {
            state.submitSignUp = true;
            state.isSignUp = false;
        }
    }
})


export const { submitSignUpSuccess, submitSignUpFail, successSignUp, failSignUp } = signUpSlice.actions;

//used for accessing the store state
export const selectSubmitSignUp = (state: RootState) => state.signUp.submitSignUp;
export const selectIsSignUp = (state: RootState) => state.signUp.isSignUp;

export default signUpSlice.reducer;