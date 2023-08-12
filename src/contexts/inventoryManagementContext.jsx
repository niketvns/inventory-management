import { createContext, useContext, useEffect, useState } from "react";
import { inventoryData } from '../db/data'
import { v4 as uuid } from 'uuid'
import { useNavigate } from "react-router-dom";

const inventoryManagementContext = createContext()

const InventoryManagementContextProvider = ({ children }) => {
    const [allInventoryData, setAllInventoryData] = useState(inventoryData)
    const [selectedDepartmentFilter, setSelectedDepartmentFilter] = useState('')
    const [sortBy, setSortBy] = useState('name')
    const [isLowStockItem, setIsLowStockItem] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        // setAllInventoryData(JSON.parse(localStorage.getItem('inventoryData')) ?? inventoryData)
        setSelectedDepartmentFilter(localStorage.getItem('selectedDepartmentFilter') ?? '')
        setSortBy(localStorage.getItem('sortBy') ?? 'name')
    }, [])

    useEffect(() => {
        localStorage.setItem('selectedDepartmentFilter', selectedDepartmentFilter)
        localStorage.setItem('sortBy', sortBy)
    }, [selectedDepartmentFilter, sortBy])

    const totalStock = allInventoryData.reduce((acc, curObj) => acc + curObj.stock, 0)

    const totalDeleverd = allInventoryData.reduce((acc, curObj) => acc + curObj.delivered, 0)

    const lowStockItem = allInventoryData.reduce((acc, curObj) => acc + (curObj.stock <= 10 ? 1 : 0), 0)

    const allDetartments = allInventoryData.reduce((acc, data) => {
        acc.includes(data.department) ? null : acc.push(data.department)
        return acc;
    }, []);

    const addNewProduct = (product) => {
        setAllInventoryData(prev => [{ id: uuid(), ...product }, ...prev])
        alert('Product Added Successfully!')
        navigate('/products')
        localStorage.setItem("inventoryData", localStorage.setItem(JSON.stringify([{ id: uuid(), ...product }, ...allInventoryData])))
    }

    let filteredData = [];
    filteredData = allInventoryData.filter(data => data.department.includes(selectedDepartmentFilter))
    if (isLowStockItem) {
        filteredData = filteredData.filter(data => data.stock <= 10)
    }
    if (sortBy === 'name') {
        filteredData = filteredData.slice().sort((a, b) => a.name.localeCompare(b.name))
    } else {
        filteredData = filteredData.sort((a, b) => a[sortBy] - b[sortBy])
    }


    return (
        <inventoryManagementContext.Provider value={{ allInventoryData, totalStock, totalDeleverd, lowStockItem, allDetartments, allInventoryData, addNewProduct, setSelectedDepartmentFilter, filteredData, setSortBy, setIsLowStockItem, selectedDepartmentFilter }}>
            {children}
        </inventoryManagementContext.Provider>
    )
}

const useGlobalInventory = () => useContext(inventoryManagementContext)

export { InventoryManagementContextProvider, useGlobalInventory }