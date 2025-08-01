import { useInfiniteQuery } from '@tanstack/react-query'

import infinite from '../../Query/infiniteQuery'
import type { Product } from '../../interface/Interface';

interface PageData {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

const LIMIT = 20
const useInfinitiHook = () => {

  const result = useInfiniteQuery<PageData>({
    queryKey: ["infiniti"],
    queryFn: ({pageParam = 1}) => infinite(LIMIT, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
        if(lastPage.products.length < LIMIT) return undefined
        return allPage.length + 1
    }
    
  })

  return result
}

export default useInfinitiHook