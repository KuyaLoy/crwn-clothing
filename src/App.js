import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home";

const App = () => {
  return (
    <Routes>
      <Route pathe="/" element={<Home />} />
    </Routes>
  );
};

export default App;
