import './App.css';
import Home from './component/Home';
import SignIn from "./component/routers/signIn.jsx"
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Shop from './component/routers/Shop';
import SignUp from './component/routers/SignUp';
import CheckOut from './component/checkout/checkout';
import PasswordReset from './component/resetpassword/resetpassword';
import Footer from './component/footer/footer';
import { useEffect } from 'react';




function App() {
  
 useEffect(() => {
  window.scrollTo(0,0)
 }, [])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='SignIn' element={<SignIn />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='Shop/*' element={<Shop />} />
          <Route path='PasswordReset' element={<PasswordReset />} />
          <Route path='CheckOut' element={<CheckOut />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
