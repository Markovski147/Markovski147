export const selectAuthState = (state) => state.auth;
export const selectIsLoggedIn = (state) => selectAuthState(state).isLoggedIn;
export const selectIsLoading = (state) => selectAuthState(state).isLoading;
export const selectAccessToken = (state) => selectAuthState(state).accessToken;
export const selectError = (state) => selectAuthState(state).error;
