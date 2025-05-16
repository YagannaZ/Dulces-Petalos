import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PlantList} from "./ui/views/PlantList/PlantList.tsx";
import {PlantDetail} from "./ui/views/PlantDetail/PlantDetail.tsx";
import {Header} from "@/ui/components/header/Header.tsx";
import './index.css'

export const App = () => {

  return (
    <BrowserRouter>
      <div className='app_container'>
        <Header/>
        <Routes>
          <Route path="/" element={<PlantList/>}/>
          <Route path="/plant/:id" element={<PlantDetail/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}


