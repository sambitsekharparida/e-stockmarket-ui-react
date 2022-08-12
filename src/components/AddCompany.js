import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import CompanyService from "../services/CompanyService";

const cretentials = {
    username: "zerodha",
    password: "password",
  };


const AddCompany = () => {

    const [company, setCompany] = useState({
        companyName: "",
        code: "",
        ceo: "",
        turnOver: "",
        website: "",
        stockExchange: "",
        stockPrice: "",
    });

    const navigate = useNavigate();

    const handleCompanyChange = (e) => {
        setCompany({...company,...{companyName:e.target.value}});
    };

    const handleCodeChange = (e) => {
        setCompany({...company,...{code:e.target.value}});
    };

    const handleCeoChange = (e) => {
        setCompany({...company,...{ceo:e.target.value}});
    };

    const handleTurnOverChange = (e) => {
        setCompany({...company,...{turnOver:e.target.value}});
    };

    const handleWebsiteChange = (e) => {
        setCompany({...company,...{website:e.target.value}});
    };

    const handlestockExchangeChange = (e) => {
        setCompany({...company,...{stockExchange:e.target.value}});
    };

    const saveCompany = async (e) => {
        e.preventDefault();
        const token = await CompanyService.getToken(cretentials);
        CompanyService.saveCompany(company,token.data.jwttoken).then((response) => {
            navigate("/companyList");
        delete axios.defaults.headers.common['Authorization'];
        }).catch((error) => {
            console.log(error);
        })
    };

    const reset = (e) => {
        e.preventDefault();
        setCompany({
            companyName: "",
            code: "",
            ceo: "",
            turnOver: "",
            website: "",
            stockExchange: "",
            stockPrice: "",
        });
    };

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b pt-2">
            <div className='px-8 py-8'>
                <div className='font-semibold text-grey-600 text-2xl tracking-wider'>
                    <h1>Add New Company Details</h1>
                </div>
                <div className='item-centered justify-center h-14 w-full my-4'>
                    <label className='block text-grey-600 text-sm font-normal text-2xl'>Company Name</label>
                    <input 
                        type="text"
                        placeholder="Company Name"
                        name="companyName" 
                        onChange={(e) => handleCompanyChange(e)}
                        value={company.companyName} 
                        className='rounded border-2 mt-1 px-2 py-1'>
                    </input>
                </div>
                <div className='item-centered justify-center h-14 w-full my-4'>
                    <label className='block text-grey-600 text-sm font-normal text-2xl'>Company Code</label>
                    <input 
                        type="text"
                        placeholder="Company Code"
                        name="code" 
                        onChange={(e) => handleCodeChange(e)}
                        value={company.code} 
                        className='rounded border-2 mt-1 px-2 py-1'>
                    </input>
                </div>
                <div className='item-centered justify-center h-14 w-full my-4'>
                    <label className='block text-grey-600 text-sm font-normal text-2xl'>CEO</label>
                    <input 
                        type="text"
                        placeholder="CEO"
                        name="ceo" 
                        onChange={(e) => handleCeoChange(e)}
                        value={company.ceo} 
                        className='rounded border-2 mt-1 px-2 py-1'>
                    </input>
                </div>
                <div className='item-centered justify-center h-14 w-full my-4'>
                    <label className='block text-grey-600 text-sm font-normal text-2xl'>TuenOver</label>
                    <input 
                        type="number" 
                        placeholder="TurnOver"
                        name="turnOver" 
                        onChange={(e) => handleTurnOverChange(e)}
                        value={company.turnOver}
                        className='rounded border-2 mt-1 px-2 py-1'>
                    </input>
                </div>
                <div className='item-centered justify-center h-14 w-full my-4'>
                    <label className='block text-grey-600 text-sm font-normal text-2xl'>Website</label>
                    <input 
                        type="text"
                        placeholder="Website" 
                        name="website" 
                        onChange={(e) => handleWebsiteChange(e)}
                        value={company.website}
                        className='rounded border-2 mt-1 px-2 py-1'>
                    </input>
                </div>
                <div className='item-centered justify-center h-14 w-full my-4'>
                    <label className='block text-grey-600 text-sm font-normal text-2xl'>Stock Exchange</label>
                    <input 
                        type="text" 
                        placeholder="Stock Exchange"
                        name="stockExchange" 
                        onChange={(e) => handlestockExchangeChange(e)}
                        value={company.stockExchange}
                        className='rounded border-2 mt-1 px-2 py-1'>
                    </input>
                </div>
                <div className='item-centered justify-center h-14 w-full my-4 space-x-8 pt-4'>
                    <button
                        onClick={saveCompany} 
                        className='rounded text-white font-semibold bg-sky-500 hover:bg-sky-600 py-2 px-6'>Save</button>

                    <button
                        onClick={reset} 
                        className='rounded text-white font-semibold bg-red-500 hover:bg-red-600 py-2 px-6'>Clear</button>
                </div>
            </div>
        </div>
    );
  };
  
  export default AddCompany;