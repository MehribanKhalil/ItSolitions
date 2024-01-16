import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import DetailPage from "./pages/DetailPage";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Wishlist from "./pages/Wishlist";
import BasketPage from "./pages/Basket";
const helmetContext = {};
function App() {
  return (
    <HelmetProvider context={helmetContext}> 
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/:id" element={<DetailPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/basket" element={<BasketPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
