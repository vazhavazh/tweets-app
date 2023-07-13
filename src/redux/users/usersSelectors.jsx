export const selectLoading = state => state.users.isLoading;

export const selectAllUsers = state => state.users.users;

export const selectFollowedUsers = state => state.users.followedUsers;

export const selectUnfollowedUsers = state => {
  const allUsers = selectAllUsers(state);
  const followedUsers = selectFollowedUsers(state);

  return allUsers.filter(
    user => !followedUsers.some(followedUser => followedUser.id === user.id)
  );
};