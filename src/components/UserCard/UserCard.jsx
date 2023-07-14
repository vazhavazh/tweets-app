import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { follow, unFollow } from 'redux/users/usersOperations';
import { selectFollowedUsers } from 'redux/users/usersSelectors';
import { updateFollowers } from 'redux/users/usersSlice';
import { formatNumberWithCommas } from 'helpers/formatNumberWithCommas';
import {
  Avatar,
  CardLabel,
  FollowButton,
  FollowersQuantity,
  FrameStyled,
  StyledLogo,
  TweetsQuantity,
  UserCardContainer,
  WhiteLine,
} from './UserCardStyled';

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
        <Avatar src={avatar} alt="avatar" />
        <TweetsQuantity>{formatNumberWithCommas(tweets)} TWEETS</TweetsQuantity>
        <FollowersQuantity>
          {formatNumberWithCommas(followers)} FOLLOWERS
        </FollowersQuantity>
        <FollowButton
          isFollowed={isFollowed}
          onClick={isFollowed ? handleUnfollow : handleFollow}
        >
          <span>{isFollowed ? 'Following' : 'Follow'}</span>
        </FollowButton>
      </UserCardContainer>
    </>
  );
};
