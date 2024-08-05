import { useQuery } from "@tanstack/react-query";
import { getBasicData } from "../api/apiBasicData";
import i18next from "i18next";

export function useBasicData() {

    const {
        isLoading,
        data: basicData,
        error,
    } = useQuery({
        queryKey: ["basicData", i18next.language],
        queryFn: () => getBasicData(),
        retry: false,
    });

    return { isLoading, error, basicData };
}
