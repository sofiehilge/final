import { Routes, Route } from "react-router-dom";
import SecondMap from "../../pages/Secondmap";
import ThirdMap from "../../pages/Thirdmap";
import "../../styles/App.css";
import Firstmap from "../../pages/Firstmap";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Firstmap />} />
        <Route path="/secondmap" element={<SecondMap />} />
        <Route path="/thirdmap" element={<ThirdMap />} />
      </Routes>
    </>
  );
}

export default App;
