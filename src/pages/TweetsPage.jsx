import { Tweets } from 'components/Tweets/Tweets';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from 'redux/users/usersOperations';
import { selectAllUsers, selectLoading } from 'redux/users/usersSelectors';
import ReactPaginate from 'react-paginate';

export const TweetsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const users = useSelector(selectAllUsers);

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * cardsPerPage;
  const paginatedUsers = users.slice(offset, offset + cardsPerPage);

  return (
    <>
      <h1>This is Tweets page</h1>
      <div>{isLoading && 'Request in progress...'}</div>
      <Tweets users={paginatedUsers} />
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={Math.ceil(users.length / cardsPerPage)}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
      />
    </>
  );
};
