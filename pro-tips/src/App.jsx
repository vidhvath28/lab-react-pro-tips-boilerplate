import Navbar from "./components/Navbar"
import Contacts from "./components/Contacts"
import Home from "./components/Home"
import RegistrationForm from "./components/RegistrationForm"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/registration-form" element={<RegistrationForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App