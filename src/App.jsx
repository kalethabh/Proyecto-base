import './App.css'
import { Route, Routes} from "react-router-dom"
import Nav from "./Nav/Nav"
import Home from "./Home/Home"
import About from "./About/About"
import Footer from "./Footer/Footer"
import Devps from './DevpsInfo/DevsInfo'

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>Ç
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
