import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import NewTechno from "./pages/NewTechno";
import TechnoList from "./pages/TechnoList";
import "./styles/app.css";
import { useState } from "react";
const App = () => {
  const [technos, setTechnos] = useState([]);

  const handleNewTechno = (techno) => {
    console.log("handleNewTechno", techno);
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/add"
          element={<NewTechno handleNewTechno={handleNewTechno} />}
        ></Route>
        <Route path="/list" element={<TechnoList />}></Route>
      </Routes>
    </>
  );
};

export default App;
