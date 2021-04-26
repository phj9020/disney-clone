import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name: "",
    email: "",
    photo: ""
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setSignOutState: (state,action) => {
            state.isLoggedIn = action.payload.isLoggedIn;
        },
    },
});

export const {setUserLoginDetails, setSignOutState} = userSlice.actions;

export const selectUserName = state => state.user.name;
export const selectUserEmail = state => state.user.email;
export const selectUserPhoto = state => state.user.photo;

export const loggedInState = state => state.user.isLoggedIn;

export default userSlice.reducer;