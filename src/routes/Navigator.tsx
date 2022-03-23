import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink,Navigate } from "react-router-dom";
import { LazyloadPage1,LazyloadPage2,LazyloadPage3 } from "../LazyLoad/pages/";
import logo  from '../logo.svg';

export const Navigator = () => {
    return ( 
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img  src={logo} alt='logo' />
                    <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active' : ''} to='/lazyload1'>LazyLoad 1</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active' : ''} to='/lazyload2'>LazyLoad 2</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active' : ''} to='/lazyload3'>LazyLoad 3</NavLink>
                    </li>
                </ul>
                </nav>

                <Routes>
                    <Route path="/lazyload1" element={<LazyloadPage1 />} />
                    <Route path="lazyload2" element={<LazyloadPage2 />} />
                    <Route path="lazyload3" element={<LazyloadPage3 />} />
                    <Route path="/*" element={<Navigate to="/lazyload1" replace/>}/>
                 </Routes>
                
            </div>
        </BrowserRouter>
     )
}