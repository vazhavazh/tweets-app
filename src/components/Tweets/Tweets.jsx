import UserCard from 'components/UserCard/UserCard';
import React from 'react';

export const Tweets = ({ users }) => {
  return (
    <ul>
      {users.map(({ id, user, avatar, tweets, followers }) => (
        <li key={id}>
          <UserCard
            id={id}
            user={user}
            avatar={avatar}
            tweets={tweets}
            followers={followers}
          />
        </li>
      ))}
    </ul>
  );
};
