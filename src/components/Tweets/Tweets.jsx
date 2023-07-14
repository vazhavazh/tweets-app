import {UserCard} from 'components/UserCard/UserCard';
import React from 'react';
import { Gallery } from './TweetsStyled';

export const Tweets = ({ users }) => {


  
  return (
    <>
    
      <Gallery>
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
      </Gallery>
    </>
  );
};
