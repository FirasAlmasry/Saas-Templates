import { useQuery } from "@tanstack/react-query";
import { getBlogByTag } from "../api/apiBlogs";
import i18next from "i18next";

export function useBlogsByTag(tagSlug) {
    const {
        isLoading,
        data: blogs,
        error,
    } = useQuery({
        queryKey: ["blogsByTag", tagSlug, i18next.language],
        queryFn: () => getBlogByTag(tagSlug),
        retry: false,
    });

    return { isLoading, error, blogs };
}
