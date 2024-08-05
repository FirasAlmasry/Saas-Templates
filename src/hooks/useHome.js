import { useQuery } from "@tanstack/react-query";
import { getHome } from "../api/apiHome";
import i18next from 'i18next';

export function useHome() {

    const {
        isLoading,
        data: home,
        error,
    } = useQuery({
        queryKey: ["home", i18next.language],
        queryFn: () => getHome(),
        retry: false,
    });

    return { isLoading, error, home };
}
