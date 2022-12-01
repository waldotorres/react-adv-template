import { ProductCard, ProductImage,  ProductTitle, ProductButtons } from "../components"
import  '../styles/custom-styles.css';
import { products } from "../data/products";



const product = products[0];


export const ShoppingPage = ( ) => {
  
  return (
    <div >

      <h1>Shoping Store</h1>
      <hr />

      
        
      <ProductCard  key={ product.id }
                    product={ product } 
                    className="bg-dark text-white"
                    initialValues={{
                     count:5,
                     maxCount:10 
                    }}
                    >
                      {
                        ( args )=>(
                          <>
                            <ProductImage className="custom-image"/>
                            <ProductTitle />
                            <ProductButtons className="custom-buttons"/>
                            <button onClick={args.reset}> Reset </button>
                            <button onClick={()=> args.increaseBy(-2)}> -2 </button>
                             { !args.isMaxCountReached && <button onClick={()=>args.increaseBy(2)}> +2 </button>}
                            <span>{ args.count } </span>
                          </>
                        )
                      }
      </ProductCard>
       
      {/* <code>{  JSON.stringify(shoppingCart, null, 3) } </code> */}
    </div>

    
  )
}
