import "./App.css";
import Home from "./assets/components/Home/Home";
import { NavBar } from "./assets/components/NavBar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./assets/components/Footer/Footer";
import LayOut from "./assets/components/LayOut/LayOut";
import NotFound from "./assets/components/NotFound/NotFound";
import OurWork from "./assets/components/OurWork/OurWork";
import About from "./assets/components/About/About";
import Contact from "./assets/components/Contact/Contact";
import CustomCursor from "./assets/components/CustomCursor/CustomCursor"; // Import CustomCursor component
import ScrollToTopButton from "./assets/components/Button/ScrollToTopButton"; // Adjust path if needed
import HistoryOf from "./assets/components/HistoryOf/HistoryOf";
import Work from "./assets/components/Work/Work";
import Appointment from "./assets/components/Appointment/Appointment";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { index: true, element: <Home />},
          {path:"History",element:<HistoryOf/>},
          {path:"Work",element:<Work/>},
          {path:"Appointment",element:<Appointment/>},
          { path: "footer", element: <Footer /> },
          { path: "navbar", element: <NavBar /> },
          { path: "OurWork", element: <OurWork /> },
          { path: "About", element: <About /> },
          { path: "Contact", element: <Contact /> },
          { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      {/* Place CustomCursor outside the RouterProvider to apply globally */}
      <CustomCursor />

      <RouterProvider router={router} />
      <ScrollToTopButton />
    </>
  );
}

export default App;
