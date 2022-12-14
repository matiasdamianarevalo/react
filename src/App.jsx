import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"; 
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import { CartWidget } from "./Components/CartWidget/CartWidget";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Page/Home";
import Contact from "./Components/Page/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/Jordan/:categoryId' element={<ItemListContainer title="Jordan" />}/>
          <Route path='/Sneakers/:categoryId' element={<ItemListContainer title="Sneakers" />}/>

          <Route path='/CartWidget' element={<CartWidget />}/>
          <Route path='/Detail/:detailId' element={<ItemDetailContainer/> }/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
