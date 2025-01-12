import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData: null,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData(state, action) {
            state.userData = action.payload;
        },
        setIsLoggedIn(state, action) {
            state.isLoggedIn = action.payload;
        },
        logout(state) {
            state.userData = null;
            state.isLoggedIn = false;
        },
    },
});

export const { setUserData, setIsLoggedIn, logout } = userSlice.actions;

export default userSlice.reducer;