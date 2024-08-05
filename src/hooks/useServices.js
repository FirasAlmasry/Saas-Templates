import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getServices } from "../api/apiServices";
import { PAGE_SIZE } from "../utils/constants";
import i18next from "i18next";

export function useServices(page) {
    const queryClient = useQueryClient();

    const {
        isLoading,
        data: services,
        error,
    } = useQuery({
        queryKey: ["services", page, i18next.language],
        queryFn: () => getServices(page),
        retry: false,
    });

    // PRE-FETCHING
    const pageCount = Math.ceil(services?.length / PAGE_SIZE);
    
    if (page < pageCount)
        queryClient.prefetchQuery({
            queryKey: ["services", page + 1],
            queryFn: () => getServices({ page: page + 1 }),
        });

    if (page > 1)
        queryClient.prefetchQuery({
            queryKey: ["services", page - 1],
            queryFn: () => getServices({ page: page - 1 }),
        });
    return { isLoading, error, services };
}
