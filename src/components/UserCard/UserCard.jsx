import React from 'react';

const UserCard = ({ id, user, avatar, tweets, followers }) => {
  return (
    <>
      <div>
        <h3>{user}</h3>
        <img src={avatar} alt="avatar" />
        <span>{tweets}</span>
        <span>{followers}</span>
      </div>
    </>
  );
};

export default UserCard;
