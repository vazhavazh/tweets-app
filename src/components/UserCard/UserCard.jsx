import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { follow, unFollow } from 'redux/users/usersOperations';
import { selectFollowedUsers } from 'redux/users/usersSelectors';
import { updateFollowers } from 'redux/users/usersSlice';
import { formatNumberWithCommas } from 'helpers/formatNumberWithCommas';
import { CardLabel, FrameStyled, StyledLogo, UserCardContainer, WhiteLine } from './UserCardStyled';

export const UserCard = ({ id, user, avatar, tweets, followers }) => {
  const dispatch = useDispatch();
  const followedUsers = useSelector(selectFollowedUsers);

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

  const isFollowed = followedUsers.some(user => user.id === id);

  return (
    <>
      <UserCardContainer>
        <StyledLogo />
        <CardLabel />
        <WhiteLine />
        <FrameStyled />
        {/* <h3>{user}</h3>
        <img src={avatar} alt="avatar" />
        <span>{tweets}</span>
        <h4>{formatNumberWithCommas(followers)}</h4>
        {isFollowed ? (
          <button onClick={handleUnfollow}>UnFollow</button>
        ) : (
          <button onClick={handleFollow}>Follow</button>
        )} */}
      </UserCardContainer>
    </>
  );
};
