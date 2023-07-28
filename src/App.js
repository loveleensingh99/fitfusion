import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import AA from "./components/aa";

function App() {
  return (
    <>
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
      </Box>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/exercise/:id" element={<ExerciseDetail />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
