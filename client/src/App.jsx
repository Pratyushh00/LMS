import { createBrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import HeroSection from "./pages/student/HeroSection"
import MainLayout from "./layout/MainLayout"

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <>
          <HeroSection />
          {/* <Courses /> */}
        </>
      }
    ]
  }
])

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Login />
    </main>
  )
}

export default App