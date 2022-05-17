import { Route, Routes } from "react-router-dom";
import LinkMain from "./components/main-link/main-link";
import Feedback from "./screns/feedback/feedback";
import Add from "./screns/add-feedback/add-feedback";
import Main from "./screns/main/main";
import "./assets/css/main.scss"
import {createContext, useContext, useEffect, useState} from "react"
export const ProductContext = createContext();

function App() {

  const [ posts, setPosts ] = useState();
  useEffect(()=>{
      fetch('/data.json')
    .then(response => response.json())
    .then(data => setPosts(data))
  },[]);

  if (!posts) {
    return null
}

  return (
    <ProductContext.Provider value={{posts, setPosts}}>
     <Routes>
      <Route path="/" element={<Main /> }/>
      <Route path={"/feedback/:id"} element={<Feedback/> }/>
      <Route path="/add-feedback" element={<Add />}/>
    </Routes>
    </ProductContext.Provider>
  );
}

export default App;
