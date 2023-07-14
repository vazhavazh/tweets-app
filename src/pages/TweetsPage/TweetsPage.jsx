import { Tweets } from 'components/Tweets/Tweets';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAllUsers } from 'redux/users/usersOperations';
import {
  selectAllUsers,
  selectFollowedUsers,
  selectLoading,
  selectUnfollowedUsers,
} from 'redux/users/usersSelectors';
import {
  FilterContainer,
  GoBackButton,
  LoadMoreButton,
} from './TweetsPageStyled';
import FilterSelect from 'components/FilterSelect/FilterSelect';
const CARDS_PER_PAGE = 3;
const FILTER_OPTIONS = [
  { value: 'all', label: 'ALL' },
  { value: 'following', label: 'FOLLOWING' },
  { value: 'follow', label: 'FOLLOW' },
];

export const TweetsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const allUsers = useSelector(selectAllUsers);
  const followedUsers = useSelector(selectFollowedUsers);
  const unfollowedUsers = useSelector(selectUnfollowedUsers);

  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [loadMoreCount, setLoadMoreCount] = useState(CARDS_PER_PAGE);
  const [filterType, setFilterType] = useState('all');
  const filteredUsersRef = useRef([]);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (filterType === 'all') {
      filteredUsersRef.current = allUsers;
    } else if (filterType === 'following') {
      filteredUsersRef.current = followedUsers;
    } else if (filterType === 'follow') {
      filteredUsersRef.current = unfollowedUsers;
    }

    const paginatedUsers = filteredUsersRef.current.slice(0, loadMoreCount);
    setDisplayedUsers(paginatedUsers);
  }, [filterType, allUsers, followedUsers, unfollowedUsers, loadMoreCount]);

  const handleLoadMore = () => {
    setLoadMoreCount(prevCount => prevCount + CARDS_PER_PAGE);
  };

  const handleFilterChange = filterValue => {
    setFilterType(filterValue);
    setLoadMoreCount(CARDS_PER_PAGE);
  };

  return (
    <>
      <div>{isLoading && 'Request in progress...'}</div>
      <GoBackButton onClick={handleGoBack}>
        <span>Go back</span>
      </GoBackButton>
      <FilterContainer>
        <FilterSelect
          value={filterType}
          onChange={handleFilterChange}
          options={FILTER_OPTIONS}
        />
      </FilterContainer>
      <Tweets users={displayedUsers} />
      {displayedUsers.length < filteredUsersRef.current.length && (
        <LoadMoreButton onClick={handleLoadMore}>
          <span>Load more</span>
        </LoadMoreButton>
      )}
    </>
  );
};
