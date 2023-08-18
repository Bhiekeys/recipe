import { Navigate, useRoutes, Routes, Route } from 'react-router-dom';
import HomeLayout from './Layout/HomeLayout';
import { Landing, Error, SinglePageError, Recipe, About } from './pages/Index';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <Error />,
        },
        {
          path: 'recipe/:id',
          errorElement: <SinglePageError />,

          element: <Recipe />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);
};

export default Router;
