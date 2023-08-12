import { useGlobalInventory } from "../contexts/inventoryManagementContext";

const Dashboard = () => {
    const { totalStock, totalDeleverd, lowStockItem } = useGlobalInventory()


    return (
        <div className={'home-main flex items-start gap-8 pt-8'}>
            <div className="ind-department bg-black/20 py-6 px-10 rounded-lg text-center">
                <p className='text-green-600 text-2xl font-semibold'>{totalStock}</p>
                <p className='text-xl'>Total Stock</p>
            </div>
            <div className="ind-department bg-black/20 py-6 px-10 rounded-lg text-center">
                <p className='text-yellow-600 text-2xl font-semibold'>{totalDeleverd}</p>
                <p className='text-xl'>Total Delivered</p>
            </div>
            <div className="ind-department bg-black/20 py-6 px-10 rounded-lg text-center">
                <p className='text-red-600 text-2xl font-semibold'>{lowStockItem}</p>
                <p className='text-xl'>Low Stock Items</p>
            </div>
        </div>
    );
};

export default Dashboard;