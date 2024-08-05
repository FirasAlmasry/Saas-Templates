import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBlogs } from "../api/apiBlogs";
import { PAGE_SIZE } from "../utils/constants";
import i18next from "i18next";

export function useBlogs(page) {
    const queryClient = useQueryClient();

    const {
        isLoading,
        data: blogs,
        error,
    } = useQuery({
        queryKey: ["blogs", page, i18next.language],
        queryFn: () => getBlogs(page),
        retry: false,
    });

    // PRE-FETCHING
    const pageCount = Math.ceil(blogs?.length / PAGE_SIZE);
    
    if (page < pageCount)
        queryClient.prefetchQuery({
            queryKey: ["blogs", page + 1],
            queryFn: () => getBlogs({ page: page + 1 }),
        });

    if (page > 1)
        queryClient.prefetchQuery({
            queryKey: ["blogs", page - 1],
            queryFn: () => getBlogs({ page: page - 1 }),
        });
    return { isLoading, error, blogs };
}
