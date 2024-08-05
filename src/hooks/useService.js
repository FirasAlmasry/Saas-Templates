import { useQuery } from "@tanstack/react-query";
import { getService } from "../api/apiServices";
import { useParams } from "react-router-dom";
import i18next from "i18next";

export function useService() {
    const { serviceSlug } = useParams();

    const {
        isLoading,
        data: service,
        error,
    } = useQuery({
        queryKey: ["service", serviceSlug, i18next.language],
        queryFn: () => getService(serviceSlug),
        retry: false,
    });

    return { isLoading, error, service };
}
