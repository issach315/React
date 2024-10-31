import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/About';
import MyProfile from './pages/MyProfile';
import Appointment from './pages/Appointment';
import MyAppointments from './pages/MyAppointments';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> {/* Assuming MyProfile is your contact page */}
        <Route path='/my-profile' element={<MyProfile />} /> {/* Assuming MyProfile is your contact page */}
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment' element={<Appointment />} />
      </Routes>
    </div>
  );
};

export default App;