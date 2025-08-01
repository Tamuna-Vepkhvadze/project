import React, { useEffect } from "react"
import useInfinitiHook from "../../hook/query/useInfinitiHook"


const TecnikPage = () => {
    
    const {data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfinitiHook()
    

    useEffect(() => {
        const getNextPage = () => {
            const bildshirmHeigth = window.innerHeight
            const scrolPosishen = window.scrollY
            const kontentHeigth = document.documentElement.scrollHeight

            if(bildshirmHeigth + scrolPosishen >= kontentHeigth -150) {
                if(hasNextPage && !isFetchingNextPage) {
                    fetchNextPage()
                    console.log("BOTTOM REACHED")
                }
            }
        }

        window.addEventListener("scroll", getNextPage)
        return () => window.removeEventListener("scroll", getNextPage)
    }, [fetchNextPage, isFetchingNextPage, hasNextPage])


     if(isLoading) return <h1>Loading....</h1>
  return (
    <div className="jewelery-grid">
      {
        data?.pages.map((page, index) =>
          <React.Fragment key={index}>

            {page.products.map(product => 
                <div key={product.id} className="jewelery-card">
                <div className="image-wrapper">
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="info">
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                </div>
                </div>
            ) }

          </React.Fragment>
        )
      }

     
    </div>
  )
}

export default TecnikPage

