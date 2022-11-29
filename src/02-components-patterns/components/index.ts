import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from './ProductImage';
export { ProductTitle } from "./ProductTitle";


export const ProductCard = Object.assign( ProductCardHOC, { Image: ProductImage, Buttons: ProductButtons, Title: ProductTitle } )