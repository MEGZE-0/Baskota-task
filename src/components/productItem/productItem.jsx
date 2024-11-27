export default function ProductItem({product}) {
  return (
   <>
    <div className="w-1/6">
    <img src={product.image} alt="" />
    <h2>{product.title}</h2>
    <h2>{product.price}</h2>
    </div>
    </>
  )
}
