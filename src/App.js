import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import ListUser from './components/ListUser';
import AdminLogin from './components/AdminLogin';
import AdminUser from './components/AdminUser';
import SignUp from './components/SignUp';
import { useState } from "react";

function App() {

  const [value, setValues] = useState([])
  

  return (
    <div className="App">
      <BrowserRouter>       
        <Routes>
          <Route index element={<AdminLogin App={value}/>} />
          <Route path="adminUser/create" element={<CreateUser setValues={setValues}/>} />
          <Route path="adminUser" element={<AdminUser/>} />
          <Route path="signUp" element={<SignUp/>} />
          <Route path="adminUser/list/user/:id/edit" element={<EditUser />} />
          <Route path="adminUser/list" element={<ListUser/>}/>
          <Route path="list" element={<ListUser/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
