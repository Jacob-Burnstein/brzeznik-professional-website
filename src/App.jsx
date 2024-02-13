import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import PsychotherapyPage from "./components/PsychotherapyPage";
import MusicPage from "./components/MusicPage";
import ContactPage from "./components/ContactPage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/psychotherapy" element={<PsychotherapyPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
