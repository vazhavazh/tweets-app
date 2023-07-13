export const selectLoading = state => state.users.isLoading;

export const selectAllUsers = state => state.users.users;

export const selectFollowers = state => state.users.subscriptions;