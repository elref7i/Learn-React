// import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Signup from './pages/Signup/Signup';
// import Login from './pages/Login/Login';
// import Home from './pages/Home/Home';
// import NotFound from './pages/Notfound/NotFound';
import Layout from './Components/Layout/Layout';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
