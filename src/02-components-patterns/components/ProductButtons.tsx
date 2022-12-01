import styles from "../styles/styles.module.css";
import { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';


export interface ProductButtonsProps {
        className?:string,
        style?:React.CSSProperties
}

export const ProductButtons = ( {className, style}:ProductButtonsProps ) => {

    const { increaseBy, counter, maxCount=-1 } = useContext( ProductContext );

    
//console.log({counter ,  maxCount})

    const shouldDisabled = useCallback(
        ()=>( (counter >= maxCount)?true:false  ) ,
      [counter, maxCount],
    )
    

        //console.log(shouldDisabled())

    return (
    
    <div   className={ `${styles.buttonsContainer} ${className}` } 
           style={style}>
                
        <button className= { styles.buttonMinus }
                onClick ={ ()=>increaseBy(-1) } >-</button>
        <div className={ styles.countLabel }> { counter } </div>
        <button className={ `${styles.buttonAdd} ${ shouldDisabled() && styles.disabled } ` }
                onClick ={ ()=>increaseBy(1) }>+</button>
    </div>

  )
}
