import { ProductCard, ProductImage,  ProductTitle, ProductButtons } from "../components"

export const ShoppingPage = () => {


  const product = {
    id:'1',
    title:'Coffee-Mug',
    img:'./coffee-mug.png'
  }

  return (
    <div>

      <h1>Shoping Store</h1>
      <hr />
      <div style={{ 
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
       }}>

      <ProductCard  product={ product } >
        <ProductCard.Image />
        <ProductCard.Title />
        <ProductCard.Buttons />
      </ProductCard>

      <ProductCard  product={ product } >
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </ProductCard>
      
      </div>


    </div>
  )
}
