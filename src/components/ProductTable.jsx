import React from 'react'
import { useGlobalInventory } from '../contexts/inventoryManagementContext'
import { useNavigate } from 'react-router-dom'

const ProductTable = ({ products }) => {
    const { filteredData } = useGlobalInventory()
    const navigate = useNavigate()

    const textShortener = (text) => {
        return text.length > 20 ? `${text.slice(0, 20)}...` : text;
    }

    return (
        <div>
            <table className='w-full my-10 flex flex-col'>
                <tr className='w-full bg-black/10 border flex justify-between p-3'>
                    <th>Image</th>
                    <th>Name</th>
                    <th className='w-[40%]'>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Supplier</th>
                </tr>
                {
                    filteredData.length ?
                        filteredData.map(({ id, imageUrl, name, description, price, stock, supplier }) => (
                            <tr key={id} className='w-full border flex items-center justify-between'>
                                <td>
                                    <img src={imageUrl} alt="" className='w-40' />
                                </td>
                                <td onClick={() => navigate(`/products-details/${id}`)} className='text-blue-600 hover:underline cursor-pointer'>{name}</td>
                                <td>{textShortener(description)}</td>
                                <td>${price}</td>
                                <td>{stock}</td>
                                <td>{supplier}</td>
                            </tr>
                        )) :
                        <p className='py-16 text-center text-2xl text-black/50'>No Product Found</p>
                }
            </table>
        </div>
    )
}

export default ProductTable






// <thead className='bg-black/10 border w-full'>
//                     <th className='w-full flex justify-between p-3'>
//                         <td>Image</td>
//                         <td>Name</td>
//                         <td className='w-[40%]'>Description</td>
//                         <td>Price</td>
//                         <td>Stock</td>
//                         <td>Supplier</td>
//                     </th>
//                 </thead>
//                 <tbody className='border'>
//                     {
//                         allInventoryData.map(({ id, imageUrl, name, description, price, stock, supplier }) => (
//                             <tr id={id} className='w-full flex items-center justify-between'>
//                                 <td>
//                                     <img src={imageUrl} alt="" className='w-40' />
//                                 </td>
//                                 <td className='text-blue-600 hover:underline cursor-pointer'>{name}</td>
//                                 <td>{textShortener(description)}</td>
//                                 <td>${price}</td>
//                                 <td>{stock}</td>
//                                 <td>{supplier}</td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>