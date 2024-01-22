import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DetailsPage } from "./pages/DetailsPage";
import { ListPage } from "./pages/ListPage";

const routerConfig = createBrowserRouter([
  {
    index: true,
    element: <ListPage />,
  },
  {
    path: "details/:id",
    element: <DetailsPage />,
  },
]);

export const App: React.FC = () => {
  return <RouterProvider router={routerConfig} />;
};
