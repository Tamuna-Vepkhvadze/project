import { useProductCategory } from "../../hook/query/useProductsCategory"
import PageComponent from "./PageComponent"


const Women_Cothing = () => {
  
  const {data, isLoading} = useProductCategory("/women's%20clothing")

  if(isLoading) return <h1>Loading.....</h1>
  return <PageComponent data={data}/>
}

export default Women_Cothing