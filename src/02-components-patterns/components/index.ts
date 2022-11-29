import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';
import { ProductContextHOCProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from './ProductImage';
export { ProductTitle } from "./ProductTitle";


export const ProductCard:ProductContextHOCProps = Object.assign( ProductCardHOC, 
                                {   Image: ProductImage, 
                                    Buttons: ProductButtons, 
                                    Title: ProductTitle } )