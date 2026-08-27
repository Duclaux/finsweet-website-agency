import Container from "./components/Container"
import Navbar from "./components/Navbar"
import { createBrowserRouter, RouterProvider } from "react-router-dom" 
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Careers from "./pages/Careers"
import Services from "./pages/Services"
import ContactUs from "./pages/ContactUs"
import Blog from "./pages/Blog"
import MainLayout from "./pages/MainLayout"

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <MainLayout />, 
    children : [
      { path: '/', element: <Home /> },
      { path: '/aboutUs', element: <AboutUs /> },
      { path: '/careers', element: <Careers /> },
      { path: '/services', element: <Services /> },
      { path: '/blog', element: <Blog /> },
      { path: '/contactus', element: <ContactUs /> },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
