import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyService from '../services/CompanyService';

const cretentials = {
  username: "zerodha",
  password: "password",
};

const CompanyList = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [companyList, setCompany] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const token = await CompanyService.getToken(cretentials);
            const response = await CompanyService.getCompanyList(token.data.jwttoken);
            setCompany(response.data);
          } catch (error){
              console.log(error);
          }
          setLoading(false);
        };
        fetchData();
      }, []);

    const deleteCompany = async (e, code) => {
        e.preventDefault();
        const jwtTkn = await CompanyService.getToken(cretentials);
        CompanyService.removeCompany(code,jwtTkn.data.jwttoken).then((response) => {
            if(companyList){
              setCompany((prevElement) => {
                return prevElement.filter((company) => company.code !== code);
              });
            }
        }).catch((error) => {
            console.log(error);
        })
    };

    return (
      <div className='container mx-auto my-8'>
          <div className='space-x-8'>
            <button 
              onClick={() => navigate("/addCompany")}
              className='rounded bg-slate-500 hover:bg-slate-600 text-white px-2 py-2 font-semibold'>Add Company</button>
            <button 
              onClick={() => navigate("/addStock")}
              className='rounded bg-slate-500 hover:bg-slate-600 text-white px-2 py-2 font-semibold'>Add Stock</button>
          </div>
          <div className='flex shadow border-b py-3'>
            <table className='min-w-full'>
              <thead className='bg-gray-300'>
                <tr>
                  <td className='text-left font-medium text-grey-500 uppercase tracking-wider py-2 px-4'>Company Name</td>
                  <td className='text-left font-medium text-grey-500 uppercase tracking-wider py-2 px-4'>CODE</td>
                  <td className='text-left font-medium text-grey-500 uppercase tracking-wider py-2 px-4'>CEO</td>
                  <td className='text-left font-medium text-grey-500 uppercase tracking-wider py-2 px-4'>TurnOver</td>
                  <td className='text-left font-medium text-grey-500 uppercase tracking-wider py-2 px-4'>Website</td>
                  <td className='text-left font-medium text-grey-500 uppercase tracking-wider py-2 px-4'>Stock Price</td>
                  <td className='text-left font-medium text-grey-500 uppercase tracking-wider py-2 px-4'>Stock Exchange</td>
                  <td className='text-left font-medium text-grey-500 uppercase tracking-wider py-2 px-4'>Action</td>
                </tr>
              </thead>
              {!loading && (
              <tbody className='bg-white'>
                {companyList.map((company) =>(
                <tr key={company.id}>
                  <td className='text-left tracking-wider px-3 whitespace-nowrap'>
                    <div className='text-sm text-grey-500'>{company.companyName}</div>
                  </td>
                  <td className='text-left tracking-wider px-3 whitespace-nowrap'>
                    <div className='text-sm text-grey-500'>{company.code}</div>
                  </td>
                  <td className='text-left tracking-wider px-3 whitespace-nowrap'>
                    <div className='text-sm text-grey-500'>{company.ceo}</div>
                  </td>
                  <td className='text-left tracking-wider px-3 whitespace-nowrap'>
                    <div className='text-sm text-grey-500'>{company.turnOver}</div>
                  </td>
                  <td className='text-left tracking-wider px-3 whitespace-nowrap'>
                    <div className='text-sm text-grey-500'>{company.website}</div>
                  </td>
                  <td className='text-left tracking-wider px-3 whitespace-nowrap'>
                    <div className='text-sm text-grey-500'>{company.stockPrice}</div>
                  </td>
                  <td className='px-16 whitespace-nowrap'>
                    <div className='text-sm text-grey-500'>{company.stockExchange}</div>
                  </td>
                  <td className='text-left tracking-wider px-3 whitespace-nowrap space-x-4'>
                    <button 
                      onClick={ (e,code) => deleteCompany(e, company.code)}
                      className='rounded bg-red-500 hover:bg-red-700 text-white px-2 py-2'>Delete</button>
                    
                  </td>
                </tr>
                ))}
              </tbody>
              )}
            </table>
          </div>
        </div>
      );
  };
  
  export default CompanyList;