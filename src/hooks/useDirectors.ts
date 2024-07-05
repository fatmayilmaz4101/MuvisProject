import { useQuery } from "@tanstack/react-query"
import { DirectorType } from "../types"
import { getDirectors } from "../sevices/directorService"

export const useDirector = () => {
    return useQuery<DirectorType[]>({
        queryKey: ['director'],
        queryFn: getDirectors,
        staleTime: 300000,
        refetchOnReconnect: true
    })
}