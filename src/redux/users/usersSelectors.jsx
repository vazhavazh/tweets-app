import { createSelector } from 'reselect';

export const selectLoading = state => state.users.isLoading;

export const selectAllUsers = state => state.users.users;

export const selectFollowedUsers = state => state.users.followedUsers;

export const selectUnfollowedUsers = createSelector(
  [selectAllUsers, selectFollowedUsers],
  (allUsers, followedUsers) => {
    const isFollowed = user =>
      followedUsers.some(followedUser => followedUser.id === user.id);
    const unfollowedUsers = allUsers.filter(user => !isFollowed(user));
    return unfollowedUsers;
  }
);
