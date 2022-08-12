import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StockService from "../services/StockService";

const AddStock = () => {

        const [stock, setStock] = useState({
            id: "",
            code: "",
            price: "",
        });

        const navigate = useNavigate();

        const handleChange = (e) => {
            setStock({...stock,...{code:e.target.value}});
        };

        const handlePriceChange = (e) => {
            setStock({...stock,...{price:e.target.value}});
        };


        const saveStock = (e) => {
            e.preventDefault();
            StockService.saveStock(stock).then((response) => {
                navigate("/companyList");
            }).catch((error) => {
                console.log(error);
            })
        };

        const reset = (e) => {
            e.preventDefault();
            setStock({
                id: "",
                code: "",
                price: "",
            });
        };

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b pt-2">
            <div className='px-8 py-8'>
                <div className='font-semibold text-grey-600 text-2xl tracking-wider'>
                    <h1>Add New Stock Price</h1>
                </div>
                <div className='item-centered justify-center h-14 w-full my-4'>
                    <label className='block text-grey-600 text-sm font-normal text-2xl'>Company Code</label>
                    <input 
                        type="text" 
                        placeholder="Company Code" 
                        name="code" 
                        onChange={(e) => handleChange(e)}
                        value={stock.code}
                        className='rounded border-2 mt-1 px-2 py-1'>
                    </input>
                </div>
                <div className='item-centered justify-center h-14 w-full my-4'>
                    <label className='block text-grey-600 text-sm font-normal text-2xl'>Current Price</label>
                    <input 
                        type="number"
                        placeholder="Current Price" 
                        name='price'
                        id='price'
                        value={stock.price}
                        onChange={(e) => handlePriceChange(e)}
                        className='rounded border-2 mt-1 px-2 py-2'>
                    </input>
                </div>
                <div className='item-centered justify-center h-14 w-full my-4 space-x-8 pt-4'>
                    <button 
                        onClick={saveStock}
                        className='rounded text-white font-semibold bg-sky-500 hover:bg-sky-600 py-2 px-4'>Add Stock</button>

                    <button
                        onClick={reset} 
                        className='rounded text-white font-semibold bg-red-500 hover:bg-red-600 py-2 px-6'>Clear</button>
                </div>
            </div>
        </div>
    );
  };
  
  export default AddStock;