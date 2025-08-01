import React from 'react'
import type { WomensClothingProduct } from '../../interface/Interface'
import Cards from './Cards'

interface PageComponentProps {
    data: WomensClothingProduct[] | undefined
}

const PageComponent:React.FC<PageComponentProps> = ({data}) => {
  return (
    <div className="jewelery-grid">
      {
        data?.map(({id, image, price, title}) => 
          <Cards key={id} id={id} price={price} image={image} title={title} />
        )
      }
    </div>
  )
}

export default PageComponent