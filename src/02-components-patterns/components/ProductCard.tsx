import styles from "../styles/styles.module.css";
import { useProduct  } from '../hooks/useProduct';
import { createContext, ReactElement, Children } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCartHandlers } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product:Product,
  //children: ReactElement | ReactElement[],
  children:(args:ProductCartHandlers)=>JSX.Element,
  className?:string,
  style?:React.CSSProperties,
  onChange?: (args: onChangeArgs)=>void;
  value?:number,
  initialValues?:InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps  ) => {

  const { counter, increaseBy, maxCount, isMaxCountReached, reset }=  useProduct({ onChange, product, value, initialValues });

  return (

    <Provider  value= { {counter, increaseBy, product, maxCount}  }  >
      <div className={ `${styles.productCard}  ${className} `} style={style} >

        { children( {
          maxCount,
          count: counter,
          isMaxCountReached,
          product,
          increaseBy,
          reset
        }) }
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