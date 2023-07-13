import { Tweets } from 'components/Tweets/Tweets';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from 'redux/users/usersOperations';
import { selectAllUsers, selectFollowedUsers, selectLoading, selectUnfollowedUsers } from 'redux/users/usersSelectors';
import ReactPaginate from 'react-paginate';

export const TweetsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const users = useSelector(selectAllUsers);
  const followedUsers = useSelector(selectFollowedUsers);
  const unFollowedUsers = useSelector(selectUnfollowedUsers);
  const [currentPage, setCurrentPage] = useState(0);
  const [filterType, setFilterType] = useState('All');

  const cardsPerPage = 3;

  const paginateUsers = users => {
    const offset = currentPage * cardsPerPage;
    const result = users.slice(offset, offset + cardsPerPage);
    return result;
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

//  selectFollowedUsers;
//  selectUnfollowedUsers;

  const handleFilterChange = event => {
    setFilterType(event.target.value);
  };

   let filteredUsers = [];
   if (filterType === 'All') {
     filteredUsers = users;
   } else if (filterType === 'Followed') {
     filteredUsers = followedUsers;
   } else if (filterType === 'Unfollowed') {
     filteredUsers = unFollowedUsers;
  }
  
  const paginatedUsers = paginateUsers(filteredUsers)

   useEffect(() => {
     dispatch(fetchAllUsers());
   }, [dispatch]);
  
  return (
    <>
      <h1>This is Tweets page</h1>
      <div>{isLoading && 'Request in progress...'}</div>
      <div>
        <label>
          Filter By:
          <select value={filterType} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Followed">Followed</option>
            <option value="Unfollowed">Unfollowed</option>
          </select>
        </label>
      </div>
      <Tweets users={paginatedUsers} />
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={Math.ceil(filteredUsers.length / cardsPerPage)}
        onPageChange={handlePageChange}
        containerClassName="pagination-container" // Применение класса контейнера
        activeClassName="active" // Применение класса для активной страницы
        pageClassName="pagination-item" // Применение класса для каждой страницы
        previousClassName="pagination-previous" // Применение класса для кнопки "Previous"
        nextClassName="pagination-next" // Применение класса для кнопки "Next"
        disabledClassName="pagination-disabled" // Применение класса для отключенных кнопок
      />
    </>
  );
};
