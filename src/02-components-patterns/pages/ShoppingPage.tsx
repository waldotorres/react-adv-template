import { ProductCard, ProductImage,  ProductTitle, ProductButtons } from "../components"
import  '../styles/custom-styles.css';

export const ShoppingPage = () => {


  const product = {
    id:'1',
    title:'Coffee-Mug',
    img:'./coffee-mug.png'
  }

  return (
    <div >

      <h1>Shoping Store</h1>
      <hr />
      <div style={{ 
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
       }}>

      <ProductCard  product={ product } 
                    className="bg-dark text-white">
        <ProductCard.Image className="custom-image"/>
        <ProductCard.Title />
        <ProductCard.Buttons className="custom-buttons"/>
      </ProductCard>

      <ProductCard  product={ product } 
                    className="bg-dark text-white"
                    >
        <ProductImage className="custom-image"/>
        <ProductTitle />
        <ProductButtons className="custom-buttons"/>
      </ProductCard>

      
      
      </div>


    </div>
  )
}
