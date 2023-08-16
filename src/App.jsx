import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Landing, Error, SinglePageError, Recipe, About } from './pages/Index';
import HomeLayout from './Layout/HomeLayout';

const router = createBrowserRouter([
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
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
