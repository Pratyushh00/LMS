import Navbar from "./components/Navbar"
import Login from "./pages/Login"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Navbar />
      <Login />
    </div>
  )
}

export default App