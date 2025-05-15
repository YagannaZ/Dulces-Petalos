import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PlantList} from "./ui/views/PlantList/PlantList.tsx";
import {PlantDetail} from "./ui/views/PlantDetail/PlantDetail.tsx";

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlantList/>}/>
        <Route path="/flower/:id" element={<PlantDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}


