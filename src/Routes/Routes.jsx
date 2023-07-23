import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from "../Pages/Home/Home";
import WaifuPics from "../Pages/Waifupics/WaifuPics";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/waifupics" element={<WaifuPics/>} />
      </Routes>
    </BrowserRouter>
  );
};
