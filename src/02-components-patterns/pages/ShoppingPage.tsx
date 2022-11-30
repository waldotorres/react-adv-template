import { ProductCard, ProductImage,  ProductTitle, ProductButtons } from "../components"
import  '../styles/custom-styles.css';
//import { Product, ProductInCart } from '../interfaces/interfaces';
//import { useState } from 'react';
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";






export const ShoppingPage = ( ) => {

  const {  shoppingCart, onProductCountChange } = useShoppingCart();

  
  return (
    <div >

      <h1>Shoping Store</h1>
      <hr />
      <div style={{ 
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
       }}>

       {
        products.map( e => (

      <ProductCard  key={ e.id }
                    product={ e } 
                    className="bg-dark text-white"
                    onChange = {onProductCountChange}
                    // value={  shoppingCart[e.id]? shoppingCart[e.id].count:0  }
                    value={  shoppingCart[e.id]?.count || 0  }
                    >
        <ProductImage className="custom-image"/>
        <ProductTitle />
        <ProductButtons className="custom-buttons"/>
      </ProductCard>

        ) )

       }
      
      </div>
      <div className="shopping-card">
                          
        {
            
           Object.entries( shoppingCart ).map( ([key, producto])=>(
            
              <ProductCard  key={key}
                            product ={  producto  } 
                            className="bg-dark text-white"
                            style={{ width:'100px' }}
                            value={ producto.count }
                            onChange = {onProductCountChange}
                            >
                <ProductImage className="custom-image"/>
                <ProductTitle />
                <ProductButtons className="custom-buttons"
                                style={{
                                  display:'flex',
                                  justifyContent:'center'
                                }}
                                />
              </ProductCard>

          ) ) 
        }
       



      </div>

      {/* <code>{  JSON.stringify(shoppingCart, null, 3) } </code> */}
    </div>

    
  )
}
