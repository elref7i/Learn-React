import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import NotFound from './pages/Notfound/NotFound';
export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'home', element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

// <>
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route path="home" element={<Home />} />
//         <Route path="signup" element={<Signup />} />
//         <Route path="login" element={<Login />} />
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// </>
