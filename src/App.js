import Classic from "./components/Classic";
import Ballon from "./components/Ballon";
import BallonBlock from "./components/BallonBlock";
import Inline from "./components/Inline";
import DeCouppled from "./components/DeCouppled";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Classic />} />
        <Route path="/ballon" element={<Ballon />} />
        <Route path="/ballonblock" element={<BallonBlock />} />
        <Route path="/inline" element={<Inline />} />
        <Route path="/decouppled" element={<DeCouppled />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
