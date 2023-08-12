import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalInventory } from "../contexts/inventoryManagementContext";

const Sidebar = () => {
    const { setSelectedDepartmentFilter } = useGlobalInventory()

    return (
        <div className='sidebar-main bg-black/80 text-white p-10 pt-20 h-[100vh] sticky top-0'>
            <ol className='flex flex-col gap-12 text-xl'>
                <NavLink to='/' className='cursor-pointer text-white/40'>Dashboard</NavLink>
                <NavLink to='/departments' className='cursor-pointer text-white/40'>Departments</NavLink>
                <NavLink to='/products' className='cursor-pointer text-white/40' onClick={() => setSelectedDepartmentFilter('')}>Products</NavLink>
            </ol>
        </div>
    );
};

export default Sidebar;