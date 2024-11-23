import { NavLink } from 'react-router-dom';
export default function Navbar() {
  //* href => reload page => (Link ,Navlink) => it's componet
  return (
    <>
      <div className="Container text-white mb-8">
        <ul className="py-5 bg-gray-600 px-3 flex justify-center items-start gap-5">
          <li className="text-lg font-medium">
            <NavLink
              className={function ({ isActive }) {
                return isActive ? 'bg-red-500' : '';
              }}
              to="home"
            >
              Home
            </NavLink>
          </li>
          <li className="text-lg font-medium">
            <NavLink
              className={function ({ isActive }) {
                return isActive ? 'bg-red-500' : '';
              }}
              to="signup"
            >
              Signup
            </NavLink>
          </li>
          <li className="text-lg font-medium">
            <NavLink
              className={function ({ isActive }) {
                return isActive ? 'bg-red-500' : '';
              }}
              to="login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
