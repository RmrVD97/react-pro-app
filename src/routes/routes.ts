import { lazy, LazyExoticComponent } from 'react';
import { LazyloadPage1,LazyloadPage2,LazyloadPage3 } from '../LazyLoad/pages/';

type JSXComponent = () => JSX.Element;

interface routesInterface {
    to:string,
    path:string,
    Component:LazyExoticComponent<JSXComponent> | JSXComponent,
    name:string,
}

const lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../LazyLoad/pages/lazyloadPage1'));
const lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../LazyLoad/pages/lazyloadPage2'));
const lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../LazyLoad/pages/lazyloadPage3'));


export const routes:routesInterface[] = [

    {
        to:'/lazyload1',
        path:'/lazyload1',
        Component:lazy1,
        name:'LazyLoad 1',
    },
    {
        to:'/lazyload2',
        path:'/lazyload2',
        Component:lazy2,
        name:'LazyLoad 2',
    },
    {
        to:'/lazyload3',
        path:'/lazyload3',
        Component:lazy3,
        name:'LazyLoad 3',
    }



]