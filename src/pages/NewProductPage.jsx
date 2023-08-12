import React, { useState } from 'react'
import { useGlobalInventory } from '../contexts/inventoryManagementContext';

const NewProductPage = () => {
    const [product, setProduct] = useState({
        department: '',
        name: '',
        description: '',
        price: 0,
        stock: 0,
        sku: '',
        supplier: '',
        delivered: 0,
        imageUrl: '',
    })

    const { allDetartments, addNewProduct } = useGlobalInventory()

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addNewProduct(product);
        setProduct({
            department: '',
            name: '',
            description: '',
            price: 0,
            stock: 0,
            sku: '',
            supplier: '',
            delivered: 0,
            imageUrl: '',
        })
    }

    return (
        <div className='add-product p-10'>
            <h1 className='text-2xl font-semibold mb-6'>Add New Product</h1>
            <form onSubmit={submitHandler} className='flex flex-col gap-4 w-[60vw] max-w-[600px]'>
                <label htmlFor="">
                    <p>Department:</p>
                    <select required name="department" onChange={changeHandler} value={product.department} className='border-2 w-full p-2 rounded mt-1'>
                        <option value="">--Select Department--</option>
                        {
                            allDetartments.map(department => (
                                <option key={department} value={department}>{department}</option>
                            ))
                        }
                    </select>
                </label>
                <label htmlFor="">
                    <p>Name:</p>
                    <input required name='name' type="text" onChange={changeHandler} value={product.name} className='border-2 w-full p-2 rounded mt-1' />
                </label>
                <label htmlFor="">
                    <p>Description:</p>
                    <textarea required name="description" cols="30" rows="2" onChange={changeHandler} value={product.description} className='border-2 w-full p-2 rounded mt-1'></textarea>
                </label>
                <label htmlFor="">
                    <p>Price:</p>
                    <input required name='price' type="number" onChange={changeHandler} value={product.price} className='border-2 w-full p-2 rounded mt-1' />
                </label>
                <label htmlFor="">
                    <p>Stock:</p>
                    <input required name='stock' type="number" onChange={changeHandler} value={product.stock} className='border-2 w-full p-2 rounded mt-1' />
                </label>
                <label htmlFor="">
                    <p>SKU:</p>
                    <input required name='sku' type="text" onChange={changeHandler} value={product.sku} className='border-2 w-full p-2 rounded mt-1' />
                </label>
                <label htmlFor="">
                    <p>Supplier:</p>
                    <input required name='supplier' type="text" onChange={changeHandler} value={product.supplier} className='border-2 w-full p-2 rounded mt-1' />
                </label>
                <label htmlFor="">
                    <p>Delivered:</p>
                    <input required name='delivered' type="number" onChange={changeHandler} value={product.delivered} className='border-2 w-full p-2 rounded mt-1' />
                </label>
                <label htmlFor="">
                    <p>Image URL:</p>
                    <input required name='imageUrl' type="text" onChange={changeHandler} value={product.imageUrl} className='border-2 w-full p-2 rounded mt-1' />
                </label>
                <button type="submit" className='bg-blue-600 text-white p-2 rounded w-fit px-4'>Add Product</button>
            </form>
        </div>
    )
}

export default NewProductPage;