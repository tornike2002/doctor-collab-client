import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home";

import MainLayout from "./components/MainLayout";

import { HelmetProvider } from "react-helmet-async";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import CardInformation from "./components/home/CardInformation/CardInformation";
import BlogInformation from "./components/Blog/BlogInformation/BlogInformation";

const routes = [
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "About", element: <AboutMe /> },
      { path: "Blog", element: <Blog /> },
      { path: "servicies/:id", element: <CardInformation /> },
      { path: "blog/:id", element: <BlogInformation /> },
    ],
  },
];

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}>
              {route.children?.map((child, idx) => (
                <Route key={idx} path={child.path} element={child.element} />
              ))}
            </Route>
          ))}
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
