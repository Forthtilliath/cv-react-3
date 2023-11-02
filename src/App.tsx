import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
      </>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "experiences",
        element: <Experiences />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
