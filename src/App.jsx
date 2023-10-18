import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormVoluntarios from "./FormVoluntarios/FormVoluntarios";
import Home from "./Home/Home";
import Nav from './Nav/Nav';

function App() {

  return (
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-voluntarios" element={<FormVoluntarios/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App