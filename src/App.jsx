import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Sidebar from "./components/Sidebar.jsx";
import './App.css'
import Departments from "./pages/Departments.jsx";
import Products from "./pages/Products.jsx";
import NewProductPage from "./pages/NewProductPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const App = () => {
    return (
        <div className='app-main flex gap-6'>
            <Sidebar />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/departments' element={<Departments />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products-details/:id' element={<ProductDetails />} />
                <Route path='/add-product' element={<NewProductPage />} />
            </Routes>
        </div>
    );
};

export default App;