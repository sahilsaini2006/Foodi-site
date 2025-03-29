import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AllSection from "./pages/AllSection"
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <AllSection />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes> */}
      <Footer />
    </>
  );
}

export default App;
