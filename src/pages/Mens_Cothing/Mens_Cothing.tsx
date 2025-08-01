import { useProductCategory } from "../../hook/query/useProductsCategory"


const Mens_Cothing = () => {

  const {data, isLoading} = useProductCategory("/men's%20clothing")

  if(isLoading) return <h1>Loading.....</h1>
  return (
    <div className="jewelery-grid">
      {
        data?.map(item => 
          <div key={item.id} className="jewelery-card">
          <div className="image-wrapper">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="info">
            <h2>{item.title}</h2>
            <p>${item.price}</p>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default Mens_Cothing