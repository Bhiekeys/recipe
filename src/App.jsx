import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Landing, Error, SinglePageError, Recipe, About } from './pages/Index';
import HomeLayout from './Layout/HomeLayout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'recipe/:id',
        errorElement: <SinglePageError />,
        element: <Recipe />,
      },
      {
        path: 'about',
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
