import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '~/layouts/MainLayout';
import AdminPage from '~/pages/Admin/AdminPage';
import PlayerPage from '~/pages/Player/PlayerPage';
import GameTicTacToePage from '~/pages/TicTacToe/GameTicTacToePage';
import GameWordlePage from '~/pages/Wordle/GameWordlePage';

export default createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        element: <GameWordlePage />,
        path: '/',
      },
      {
        element: <GameWordlePage />,
        path: '/wordle',
      },
      {
        element: <GameTicTacToePage />,
        path: '/tic-tac-toe',
      },
      {
        element: <AdminPage />,
        path: '/admin',
      },
      {
        element: <PlayerPage />,
        path: '/player',
      },
    ],
  },
]);
