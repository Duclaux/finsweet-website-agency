import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Container from "../components/Container"

function MainLayout() {
  return (
    <>
        <Container>
          <Navbar />
          <Outlet />
        </Container>
    </>
  )
}

export default MainLayout
