
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
        <nav className="flex justify-between items-center py-6 shadow-md px-5">
          <div className="text-3xl font-bold">Furni<span className='text-blue-400'>Flex</span></div>
          <ul className="flex gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-400 underline":""
                }
              >
                Home
              </NavLink>
              
            </li>
            <li>
              <NavLink
                to="/favourites"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-green-400 underline":""
                }
              >
                Products
              </NavLink>
              
            </li>
            <li>
              <NavLink
                to="/categoris"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-green-400 underline":""
                }
              >
                Categories
              </NavLink>
              
            </li>
            <li>
              <NavLink
                to="/custom"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-green-400 underline":""
                }
              >
                Custom
              </NavLink>
              
              
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-green-400 underline":""
                }
              >
                Blog
              </NavLink>
              
            </li>

            
          </ul>
          <ul className='flex gap-4'>
          
          <li>
              <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-green-400 underline":""
                }
              >
                Cart
              </NavLink>
              
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ?  "text-green-400 underline":""
                }
              >
                Login
              </NavLink>
              
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default Navbar;