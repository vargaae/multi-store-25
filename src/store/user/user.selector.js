import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

export const selectCurrentUser = (state) => state.user.currentUser;

export const selectCurrentCity = (state) => state.user.currentCity;

export const selectCurrentUserAuthOpen = createSelector(
  [selectUserReducer],
  (user) => user.isComponentVisible
);
