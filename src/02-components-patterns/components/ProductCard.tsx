import styles from "../styles/styles.module.css";
import { useProduct  } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';




export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product:Product,
  children: ReactElement | ReactElement[],
  className?:string,
  style?:React.CSSProperties,
  onChange?: (args: onChangeArgs)=>void;
  value?:number
}

export const ProductCard = ({ children, product, className, style, onChange, value }: ProductCardProps  ) => {

  const { counter, increaseBy}=  useProduct({ onChange, product, value });

  return (

    <Provider  value= { {counter, increaseBy, product}  }  >
      <div className={ `${styles.productCard}  ${className} `} style={style} >

        { children }
      </div>

    </Provider>
 
  )
}


// ProductCard.Title =
// ProductCard.Buttons =
// ProductCard.Image =

 //   <div className= { styles.productCard } >

  //   {/* <img className={ styles.productImg } src="./coffee-mug.png" alt="Coffe Mug" /> */}
  //   {/* <img className={ styles.productImg } src= { noImage }  alt="Coffe Mug" /> */}

  //   {/* <span className={ styles.productDescription }>Coffe Mug</span> */}
  //   {/* <div className={ styles.buttonsContainer }>
  //       <button className= { styles.buttonMinus }
  //               onClick ={ ()=>increaseBy(-1) } >-</button>
  //       <div className={ styles.countLabel }> { counter } </div>
  //       <button className={ styles.buttonAdd }
  //               onClick ={ ()=>increaseBy(1) }>+</button>
  //   </div> */}
  // </div>