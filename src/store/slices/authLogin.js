import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  accessToken: null,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.isLoading = true
    },
    loginSuccess(state, { payload }) {
      state.isLoggedIn = true
      state.isLoading = false
      state.accessToken = payload?.data.accessToken
      state.error = null
    },
    logout(state) {
      state.isLoggedIn = false
      state.accessToken = null
      state.error = null
    },
    loginFailed(state, { payload }) {
      state.error = payload
      state.isLoading = false
    },
    resetError(state) {
      state.error = null
    }
  }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
