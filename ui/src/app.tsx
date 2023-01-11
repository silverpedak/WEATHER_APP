import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage, ErrorPage, Root, WeatherPage } from "./pages";

export interface IApplicationProps {}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <WeatherPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
