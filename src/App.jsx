import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import MusicPage from "./components/MusicPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
