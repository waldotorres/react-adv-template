import { ProductCard, ProductImage,  ProductTitle, ProductButtons } from "../components"
//import  '../styles/custom-styles.css';
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = ( ) => {
  
  return (
    <div >

      <h1>Shoping Store</h1>
      <hr />

      
        
      <ProductCard  key={ product.id }
                    product={ product } 
                    initialValues={{
                     count:5,
                     maxCount:10 
                    }}
                    >
                      {
                        ( args )=>(
                          <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                             
                          </>
                        )
                      }
      </ProductCard>
       
      {/* <code>{  JSON.stringify(shoppingCart, null, 3) } </code> */}
    </div>

    
  )
}
