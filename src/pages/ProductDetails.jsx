import React from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalInventory } from '../contexts/inventoryManagementContext';

const ProductDetails = () => {
    const { id } = useParams()
    const { findProduct } = useGlobalInventory()

    const { department, name, description, price, stock, sku, supplier, delivered, imageUrl } = findProduct(id);

    return (
        <div className='p-10 flex flex-col gap-2'>
            <h1 className='text-2xl font-semibold'>{name}</h1>
            <img src={imageUrl} alt="image-details" className='w-60' />
            <p><b>Price:</b> ${price}</p>
            <p><b>Stock:</b> {stock}</p>
            <p><b>SKU:</b> {sku}</p>
            <p><b>Supplier:</b> {supplier}</p>
            <p><b>Delivered:</b> {delivered}</p>
            <p><b>Description:</b> {description}</p>
            <p><b>Department:</b> {department}</p>
        </div>
    )
}

export default ProductDetails;