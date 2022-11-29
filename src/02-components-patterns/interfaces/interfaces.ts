import { ProductCardProps } from "../components/ProductCard"
import { ProductImageProps as ProductImageProps } from "../components/ProductImage";
import { ProductTitleProp } from "../components/ProductTitle";
import { ProductButtonsProps } from '../components/ProductButtons';

// export interface ProductCardProps {
//     product:Product,
//     children: ReactElement | ReactElement[]
// }


export interface Product {
    id:string,
    title:string,
    img?:string

}


export interface ProductContextProps {
    counter:number,
    increaseBy: (value:number)=> void,
    product:Product
}

export interface ProductContextHOCProps {
    (Props: ProductCardProps):JSX.Element,
    Title: (Props: ProductTitleProp) => JSX.Element
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons:(Props:ProductButtonsProps) => JSX.Element
}
