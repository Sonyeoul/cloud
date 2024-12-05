import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout";
import MenuPage from "./pages/MenuPage";
import Main from "./pages/Main";

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="menupage" element={<MenuPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
