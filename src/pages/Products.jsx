import { useNavigate } from "react-router-dom";
import ProductTable from "../components/ProductTable";
import { useGlobalInventory } from "../contexts/inventoryManagementContext";

const Products = () => {
    const { allDetartments, setSelectedDepartmentFilter, setSortBy, setIsLowStockItem, selectedDepartmentFilter } = useGlobalInventory()
    const navigate = useNavigate();

    const checkboxHandler = (e) => {
        setIsLowStockItem(e.target.checked)
    }

    return (
        <div className='products-main p-10'>
            <header className='flex w-[76vw] justify-around items-center'>
                <h1 className="text-2xl font-semibold">Products</h1>
                <select onChange={(e) => setSelectedDepartmentFilter(e.target.value)} value={selectedDepartmentFilter} className="border-2 border-black/40 p-2">
                    <option value=''>All Departments</option>

                    {
                        allDetartments.map(department => (
                            <option key={department} value={department}>{department}</option>
                        ))
                    }
                </select>
                <div className="low-stock text-lg flex items-center">
                    <label htmlFor="low-stock" className="flex gap-1">
                        <input onChange={checkboxHandler} type="checkbox" name="low-stock" id="low-stock" className="w-4 aspect-square" />
                        <p className="select-none">Low Stock Items</p>
                    </label>
                </div>
                <div className="order">
                    <select onChange={(e) => setSortBy(e.target.value)} className="border-2 border-black/40 p-2">
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                        <option value="stock">Stock</option>
                    </select>
                </div>
                <button className="new-btn bg-blue-500 text-white p-2 px-6 rounded" onClick={() => navigate('/add-product')}>New</button>
            </header>
            <ProductTable />

        </div>
    );
};

export default Products;