import { useQuery } from "@tanstack/react-query"
import { CommentType } from "../types"
import { getComments } from "../sevices/commentService"

export const useComments = () => {
    return useQuery<CommentType[]>({
        queryKey: ['comment'],
        queryFn: getComments,
        staleTime: 300000,
        refetchOnReconnect: true
    })
}