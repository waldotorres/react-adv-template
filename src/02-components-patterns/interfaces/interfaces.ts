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
    product:Product,
    maxCount?:number
}

export interface ProductContextHOCProps {
    (Props: ProductCardProps):JSX.Element,
    Title: (Props: ProductTitleProp) => JSX.Element
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons:(Props:ProductButtonsProps) => JSX.Element
}


export interface onChangeArgs{
    product:Product,
    count:number
}

export interface ProductInCart extends Product{
    count: number
  }
  
export interface InitialValues {
    count?:number,
    maxCount?:number
}

export interface ProductCartHandlers {
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: Product,
    increaseBy: (value:number)=>void,
    reset: ()=>void,
}