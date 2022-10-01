import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './home-page/homePage';
import './App.css';
import ErrorPage from './error/error';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />
    },
  ])

    return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
