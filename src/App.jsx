import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
