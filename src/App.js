import './App.css';
import Routing from './Components/Pages/Routing';
import UserRouting from './Components/UserPanel/UserRouting';
import AdminRouting from './Components/AdminPanel/AdminRouting';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
       <Route path="/*" element={<Routing />} />
        <Route path="/user/*" element={<UserRouting/>} />
        <Route path="/admin/*" element={<AdminRouting />} />                                                                

      </Routes>
      
    </>
  );
}



export default App;
