import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Meals from "./components/Meals";
import Details from "./components/Details";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Meals" element={<Meals />}></Route>
        <Route path="/detail/:id" element={<Details />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
