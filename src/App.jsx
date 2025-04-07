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
