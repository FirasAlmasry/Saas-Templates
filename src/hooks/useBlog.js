import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../api/apiBlogs";
import { useParams } from "react-router-dom";
import i18next from "i18next";

export function useBlog() {

    const { blogSlug } = useParams();
    const {
        isLoading,
        data: blog,
        error,
    } = useQuery({
        queryKey: ["blog", blogSlug, i18next.language],
        queryFn: () => getBlog(blogSlug),
        retry: false,
    });

    return { isLoading, error, blog };
}
