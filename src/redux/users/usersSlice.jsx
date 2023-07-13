import { createSlice } from '@reduxjs/toolkit';
import { fetchAllUsers, follow, unFollow } from './usersOperations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
    subscriptions: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addMatcher(
        action =>
          action.type === follow.fulfilled.type ||
          action.type === unFollow.fulfilled.type,
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          if (action.type === follow.fulfilled.type) {
            state.subscriptions.push(action.payload);
          } else if (action.type === unFollow.fulfilled.type) {
            const index = state.subscriptions.findIndex(
              user => user.id === action.payload.id
            );
            state.subscriptions.splice(index, 1);
          }
        }
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const usersReducer = usersSlice.reducer;
