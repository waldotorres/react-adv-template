import { lazy } from "react";
import {  LazyPage3 } from "../01-lazyload/pages/LazyPage3";


const lazy1 = lazy( ()=> import(/* webpackChunkName: "ChunkLazy1" */ '../01-lazyload/pages/LazyPage1') )
const lazy2 = lazy( ()=> import(/* webpackChunkName: "ChunkLazy2" */ '../01-lazyload/pages/LazyPage2') )
//const lazy3 = lazy( ()=> import(/* webpackChunkName: "ChunkLazy3" */ '../01-lazyload/pages/LazyPage3') )

interface Route {
    to:string,
    path:string,
    Component: React.LazyExoticComponent<() => JSX.Element> | (()=> JSX.Element),
    name:string

}
export const routes:Route[] = [
    {
        to:'/lazy1',
        path:'/lazy1',
        Component: lazy1,
        name:'Lazy-1'
    },
    {
        to:'/lazy2',
        path:'/lazy2',
        Component: lazy2,
        name:'Lazy-2'
    },
    {
        to:'/lazy3',
        path:'/lazy3',
        Component: LazyPage3,
        name:'Lazy-3'
    }
]