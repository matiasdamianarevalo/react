import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"; 
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import { CartWidget } from "./Components/CartWidget/CartWidget";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/Jordan/:categoryId' element={<ItemListContainer presentation="Jordan Category" />}/>
          <Route path='/Sneakers/:categoryId' element={<ItemListContainer presentation="Sneakers Category" />}/>
          <Route path='/CartWidget' element={<CartWidget />}/>
          <Route path='/Detail/:detailId' element={<ItemDetailContainer/> }/>
          <Route path='/Contactanos'/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
