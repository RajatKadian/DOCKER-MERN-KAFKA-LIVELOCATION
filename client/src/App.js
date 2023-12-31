import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About';
import { Start } from './Pages/Start';
import { RentOutCar } from './Pages/RentOutCar';
import   Book   from './Pages/Book';
import { Host } from './Pages/Host';
import { RentOutPage } from './Pages/PostPage/PostPage';
import { AuthProvider } from './contexts/AuthContext';
// import { Login } from './Pages/Login/Login';
import { Signup } from './Pages/Signup/Signup';


import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <AuthProvider>
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> */}
      <Route path="/" element={<Start />} />
      <Route path="/start/host" element={<Host />} />
      <Route path="/start/rent-out-car" element={<RentOutCar />} />
      <Route path="/rental-form" element={<RentOutPage />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/sign-up" element={<Signup />} /> 
     <Route path="/rent-confirmation" element={<Book />} />
    </Routes>
  </AuthProvider>
  );
}

export default App;


