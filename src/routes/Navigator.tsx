import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink,Navigate } from "react-router-dom";
import { LazyloadPage1,LazyloadPage2,LazyloadPage3 } from "../LazyLoad/pages/";
import logo  from '../logo.svg';
import { routes } from "./routes";


export const Navigator = () => {
    return ( 
        <Suspense fallback={<span>Loading</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img  src={logo} alt='logo' />
                    <ul>

                    {
                        routes.map(route => <li key={route.to}>
                            <NavLink className={({isActive}) => isActive ? 'nav-active' : ''} to={route.to} >{route.name}</NavLink>
                        </li>)
                    }

                </ul>
                </nav>

                <Routes>
                    {
                    routes.map(route => <Route key={route.to} path={route.path} element={<route.Component />} /> )
                    }

                    <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
                 </Routes>
                
            </div>
        </BrowserRouter>
        </Suspense>
     )
}