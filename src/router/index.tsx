import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '~/layouts/MainLayout';

const GameWordle = lazy(() => import('~/components/Wordle/GameWordle'));

export default createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        element: <GameWordle />,
        path: '/',
      },
    ],
  },
]);
