import { useQuery } from "@tanstack/react-query"
import fachData from "../../Query/FeatchData"
import type { QueryType } from "../../interface/Interface"

export const useProductCategory = (category: string) => {
    const result = useQuery<QueryType>({
        queryKey: ["category"],
        queryFn: () => fachData(category)
    })

    return result

}