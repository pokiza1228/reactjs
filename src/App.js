import { Route, Routes } from "react-router-dom";
import LinkMain from "./components/main-link/main-link";
import About from "./screns/about/about";
import Feedback from "./screns/add-feedback/add-feedback";
import Main from "./screns/main/main";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main /> }/>
      <Route path="/about" element={<About /> }/>
      <Route path="/add-feedback" element={<Feedback />}/>
    </Routes>

   
  );
}

export default App;
