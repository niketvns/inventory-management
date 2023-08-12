import { useNavigate } from "react-router-dom";
import { useGlobalInventory } from "../contexts/inventoryManagementContext";

const Departments = () => {
    const { allDetartments, setSelectedDepartmentFilter } = useGlobalInventory()

    const navigate = useNavigate()

    return (
        <div className='departments-main'>
            <div className={'home-main flex flex-wrap items-start gap-8 pt-8'}>
                {
                    allDetartments.map(department => (
                        <div className="ind-department bg-black/20 py-6 px-10 rounded-lg text-center cursor-pointer" onClick={() => {
                            navigate('/products')
                            setSelectedDepartmentFilter(department)
                        }}>
                            <p className='text-2xl font-semibold'>{department}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Departments;