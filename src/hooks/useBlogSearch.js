import { useMutation } from "@tanstack/react-query";
import { BlogSearch } from "../api/apiBlogs";

export function useBlogSearch() {
    const {
        mutate: searchBlogs,
        isLoading,
        data: results,
        error,
    } = useMutation({
        mutationFn: (searchTerm) => BlogSearch(searchTerm),
    });

    return { searchBlogs, isLoading, error, results };
}
