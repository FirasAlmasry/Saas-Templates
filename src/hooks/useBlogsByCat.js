import { useQuery } from "@tanstack/react-query";
import { getBlogByCat } from "../api/apiBlogs";
import i18next from "i18next";

export function useBlogsByCat(catSlug) {

    const {
        isLoading,
        data: blogs,
        error,
    } = useQuery({
        queryKey: ["blogsByCat", catSlug, i18next.language],
        queryFn: () => getBlogByCat(catSlug),
        retry: false,
    });

    return { isLoading, error, blogs };
}
