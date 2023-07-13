import { createSlice } from '@reduxjs/toolkit';
import { fetchAllUsers, follow, unFollow } from './usersOperations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
    newSubscriptions: [],
  },
  reducers: {
    updateFollowers(state, action) {
      const { userId, newFollowersCount } = action.payload;
      const user = state.users.find(user => user.id === userId);
      if (user) {
        user.followers = newFollowersCount;
      }
    },
  },
  extraReducers: builder => {
    builder

      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(follow.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.newSubscriptions.push(action.payload);
      })
      .addCase(unFollow.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.newSubscriptions.findIndex(
          user => user.id === action.payload.id
        );
        state.newSubscriptions.splice(index, 1);
      })
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

export const { updateFollowers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;

