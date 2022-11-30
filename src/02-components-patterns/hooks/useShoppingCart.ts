import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]:ProductInCart }>({});
  
    const onProductCountChange = ({count, product}: { count:number, product:Product } )=>{

    setShoppingCart ( (oldValue:{ [key:string]:ProductInCart }) =>{

      
      //const productInCart:ProductInCart = oldValue[product.id] || { ...product, count:0 };


      // if( Math.max( productInCart.count + count, 0 ) > 0 )
      // {

      //   productInCart.count += count

      //   return {
      //     ... oldValue,
      //     [product.id]: productInCart
      //   }

      // }
      // const{ [product.id]:toDelete, ...rest } = oldValue;
      // return rest;


      if(count===0){
            // const otro = (Object.entries(oldValue).filter( e=> e[0] !== product.id ));
            // return Object.fromEntries(otro);
            //console.log( Object.fromEntries(otro) )

            const{ [product.id]:toDelete, ...rest } = oldValue;
            return rest;
          }      
        
      return {
        ...oldValue,
        [product.id]: { ...product, count }
      }


    });

 }

 return {
   shoppingCart, onProductCountChange
}

}