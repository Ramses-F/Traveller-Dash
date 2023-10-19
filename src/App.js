import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Users from './pages/users';
import Company from './pages/company';
import Transac from './pages/transaction';
import Createcomp from './pages/createcomp';
import Notifs from './pages/notif';
import Header from './Components/header';
import Sidebar from './Components/sidebar';
import './Components/styles.css';
import './Components/style2.css'
 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' index element={<Home />}></Route>
        <Route path='header' element={<Header />}></Route>
        <Route path='sidebar' element={<Sidebar />}></Route>
        <Route path='users' element={<Users />}></Route>
        <Route path='company' element={<Company />}></Route>
        <Route path='transaction' element={<Transac />}></Route>
        <Route path='createcomp' element={<Createcomp />}></Route>
        <Route path='notif' element={<Notifs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

//export default App;