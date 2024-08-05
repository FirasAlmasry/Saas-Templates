import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProjects } from "../api/apiProjects";
import { PAGE_SIZE } from "../utils/constants";
import i18next from "i18next";

export function useProjects(page) {
    const queryClient = useQueryClient();

    const {
        isLoading,
        data: projects,
        error,
    } = useQuery({
        queryKey: ["projects", page, i18next.language],
        queryFn: () => getProjects(page),
        retry: false,
    });

    // PRE-FETCHING
    const pageCount = Math.ceil(projects?.length / PAGE_SIZE);
    
    if (page < pageCount)
        queryClient.prefetchQuery({
            queryKey: ["projects", page + 1],
            queryFn: () => getProjects({ page: page + 1 }),
        });

    if (page > 1)
        queryClient.prefetchQuery({
            queryKey: ["projects", page - 1],
            queryFn: () => getProjects({ page: page - 1 }),
        });
    return { isLoading, error, projects };
}
