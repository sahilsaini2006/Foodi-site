import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AllSection from "./pages/AllSection";
// import States from "./components/States";
// import { Route, Routes } from "react-router-dom";

function App() {

// const data="this is a heading text"
 

  return (
    <>
      {/* <States dataName = {data} /> */}

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
