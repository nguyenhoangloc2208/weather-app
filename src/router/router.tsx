import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import RootPage from '../pages/RootPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SettingsPage from '../pages/SettingsPage/SettingsPage';
import PrivacyPage from '../pages/PrivacyPage/PrivacyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />
      },
      {
        path: '/privacy',
        element: <PrivacyPage />
      }
    ],
  },
]);

export default router;