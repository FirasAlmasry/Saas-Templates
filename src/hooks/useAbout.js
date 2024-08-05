import { useQuery } from "@tanstack/react-query";
import { getAbout } from "../api/apiAbout";
import i18next from "i18next";

export function useAbout() {

    const {
        isLoading,
        data: about,
        error,
    } = useQuery({
        queryKey: ["about", i18next.language],
        queryFn: () => getAbout(),
        retry: false,
    });

    return { isLoading, error, about };
}
