import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";


function App() {

  return (
    <Router>
      <header className="px-1 pt-1 absolute w-full">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer className="body-font bg-black text-white">
        <Footer/>
      </footer>
    </Router >
  )
}

export default App
