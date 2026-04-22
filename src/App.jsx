import Nav from "./components/Nav";
import Home from "./pages/Home";
import NewTechno from "./pages/NewTechno";
import TechnoList from "./pages/TechnoList";
import "./styles/app.css";
const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <NewTechno />
      <TechnoList />
    </>
  );
};

export default App;
