
import {  NavLink } from 'react-router-dom';
import '/src/Components/Header/Sideber.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            
            <ul>
            <li>
                <NavLink
                to="/rockingchair"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-400 underline":""
                }
              >
                Rocking Chair
                </NavLink>
                </li>
                <li>
                    <NavLink
                to="/sidechair"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-400 underline":""
                }
              >
                Side Chair
                    </NavLink>
                </li>
                
              
                
                <li>
                <NavLink
                to="/loungechai"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-400 underline":""
                }
              >
                Lounge Chair
                </NavLink>
                </li>
                    
                    
                
            </ul>
        </div>
    );
};

export default Sidebar;
