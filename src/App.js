import { Route, Routes } from "react-router-dom";
import LinkMain from "./components/main-link/main-link";
import About from "./screns/about/about";
import Main from "./screns/main/main";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main /> }/>
      <Route path="/about" element={<About /> }/>
      {/* <Route path="/" /> */}
    </Routes>

   
  );
}

export default App;
