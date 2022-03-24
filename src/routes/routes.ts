import { lazy, LazyExoticComponent } from 'react';
import { LazyComponent } from '../LazyLoad/components/LazyComponent';
import { NoLazyComponent } from '../LazyLoad/components/NoLazyComponent';


type JSXComponent = () => JSX.Element;

interface routesInterface {
    to:string,
    path:string,
    Component:LazyExoticComponent<JSXComponent> | JSXComponent,
    name:string,
}

const lazy1 = lazy(() => import(/* webpackChunkName: "LazyComponent" */'../LazyLoad/components/LazyComponent'));



export const routes:routesInterface[] = [

    {
        to:'/lazyload',
        path:'/lazyload/*',
        Component:LazyComponent,
        name:'LazyComponent',
    },
    {
        to:'/nolazy',
        path:'/nolazy',
        Component:NoLazyComponent,
        name:'NoLazyComponent',
    }


]