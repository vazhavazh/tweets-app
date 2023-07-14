import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { MainContainer } from './LayoutStyled';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <MainContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  );
};
