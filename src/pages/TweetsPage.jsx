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
const CARDS_PER_PAGE = 3;

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

  const handleFilterChange = event => {
    setFilterType(event.target.value);
    setLoadMoreCount(CARDS_PER_PAGE);
  };

  return (
    <>
      <h1>This is Tweets page</h1>
      <div>{isLoading && 'Request in progress...'}</div>
      <div>
        <button onClick={handleGoBack}>GO BACK</button>
        <label>
          Filter By:
          <select value={filterType} onChange={handleFilterChange}>
            <option value="all">all</option>
            <option value="following">following</option>
            <option value="follow">follow</option>
          </select>
        </label>
      </div>
      <Tweets users={displayedUsers} />
      {displayedUsers.length < filteredUsersRef.current.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </>
  );
};
