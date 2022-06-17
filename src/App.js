import logo from './logo.svg';
import './App.css';
import MainScreen from './components/MainScreen';
import AddScreen from './components/AddScreen';
import EditScreen from './components/EditScreen';
import CalendarScreen from './components/CalendarScreen';
import ShopScreen from './components/ShopScreen/ShopScreen';
import AddShopScreen from './components/ShopScreen/AddShopScreen';
import EditShopScreen from './components/ShopScreen/EditShopScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products_calculation" element={<MainScreen />} />
          <Route path="/products_calculation/add" element={<AddScreen />} />
          <Route path="/products_calculation/edit/*" element={<EditScreen />} />
          <Route path="/products_calculation/calendar" element={<CalendarScreen />} />
          <Route path="/products_calculation/shop" element={<ShopScreen />} />
          <Route path="/products_calculation/shop/add" element={<AddShopScreen />} />
          <Route path="/products_calculation/shop/edit/*" element={<EditShopScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
