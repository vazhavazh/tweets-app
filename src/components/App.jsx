import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { TweetsPage } from 'pages/TweetsPage/TweetsPage';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
      </Route>
    </Routes>
  );
};
