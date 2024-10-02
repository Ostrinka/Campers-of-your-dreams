import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Loader from '../Loader/Loader.jsx';

export default function Layout () {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader/>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

 