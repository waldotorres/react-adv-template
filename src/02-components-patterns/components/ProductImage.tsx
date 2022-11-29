import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from './ProductCard';

import noImage from '../assets/no-image.jpg';

export interface ProductImageProps {
  img?:string,
  className?:string,
  style?:React.CSSProperties

}

export const ProductImage = ({ img, className, style }:ProductImageProps) => {

  const { product }= useContext(ProductContext);
  let imgToShow = '';

  if( img ){
    imgToShow = img;
  }
  else if(product.img){
    imgToShow = product.img
  }
  else{
    imgToShow = noImage
  }

  return (
    
    <img  className={ `${styles.productImg} ${ className}` } src= { imgToShow }  
          style={style}
          alt="Coffe Mug" />
  )
}
