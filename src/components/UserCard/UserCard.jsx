import React from 'react';
import { useDispatch } from 'react-redux';
import { follow, unFollow } from 'redux/users/usersOperations';
import { updateFollowers } from 'redux/users/usersSlice';

const UserCard = ({ id, user, avatar, tweets, followers }) => {
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(
      follow({
        userId: id,
        credentials: { user, avatar, tweets, followers: followers + 1 },
      })
    );
     dispatch(
       updateFollowers({
         userId: id,
         newFollowersCount: followers + 1,
       })
     );
  };

  const handleUnfollow = () => {
    dispatch(
      unFollow({
        userId: id,
        credentials: { user, avatar, tweets, followers: followers - 1 },
      })
    );
    dispatch(
      updateFollowers({
        userId: id,
        newFollowersCount: followers - 1,
      })
    );
  };

  return (
    <>
      <div>
        <h3>{user}</h3>
        <img src={avatar} alt="avatar" />
        <span>{tweets}</span>
        <h4>{followers}</h4>
        <button onClick={handleFollow}>Follow</button>
        <button onClick={handleUnfollow}>UnFollow</button>
      </div>
    </>
  );
};

export default UserCard;
