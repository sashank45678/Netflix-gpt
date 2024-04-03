import Login from "./login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import MovieCast from "./MovieCast";
const Body = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/moviecast/:id",
      element: <MovieCast />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
};
export default Body;
