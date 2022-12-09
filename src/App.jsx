import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"; 
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import { CartWidget } from "./Components/CartWidget/CartWidget";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route caseSensitive path='/Home' element={<Home />} />
          <Route caseSensitive path='/Jordan/:categoryId' element={<ItemListContainer presentation="Jordan" />}/>
          <Route caseSensitive path='/Sneakers/:categoryId' element={<ItemListContainer presentation="Sneakers" />}/>
          <Route path='/CartWidget' element={<CartWidget />}/>
          <Route caseSensitive path='/Detail/:detailId' element={<ItemDetailContainer/> }/>
          <Route caseSensitive path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
