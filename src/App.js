import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddCompany from './components/AddCompany';
import AddStock from './components/AddStock';
import CompanyList from './components/CompanyList';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<CompanyList />}></Route>
          <Route path="/" element={<CompanyList />}></Route>
          <Route path="/companyList" element={<CompanyList />}></Route>
          <Route path="/addStock" element={<AddStock />}></Route>
          <Route path="/addCompany" element={<AddCompany />}></Route>
        </Routes>
        </BrowserRouter>
      
    </>
  );
}

export default App;
