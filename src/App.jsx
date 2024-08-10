import { Route, Routes } from "react-router-dom";
import Home from "./components/public/Home";
import "./styles/css/globals.css";

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/"></Route>
    </Routes>
  );
};

export default App;
