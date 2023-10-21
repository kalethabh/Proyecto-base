import './App.css'
import { Route, Routes} from "react-router-dom"
import Nav from "./Nav/Nav"
import Home from "./Home/Home"
import About from "./About/About"

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
    </div>
  );
}

export default App