import styles from "../styles/styles.module.css";
import { useProduct  } from '../hooks/useProduct';
import { createContext } from "react";
import { ProductContextProps, Product, ProductCardProps } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps  ) => {

  const { counter, increaseBy}=  useProduct();
 
  return (

    <Provider  value= { {counter, increaseBy, product}  }  >
      <div className={ styles.productCard }>

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