import './App.css';
import { Home } from './components/Home/Home'; // Named import
import { NavBar } from './components/NavBar/NavBar';
import Gallery from './components/Gallery/Gallery';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LayOut from './components/LayOut/LayOut';
import NotFound from './components/NotFound/NotFound';
import Ux from './components/Ux/Ux';
import Mobile from './components/Mobile/Mobile';
import Web from './components/Web/Web';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> }, // Home page at root path "/"
        { path: "footer", element: <Footer /> },
        { path: "navbar", element: <NavBar /> },
        {
          path: "gallery",
          element: <Gallery />,
          children: [
            { path: "Ux", element: <Ux /> },
            { path: "Mobile", element: <Mobile /> },
            { path: "Web", element: <Web /> },
          ],
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
