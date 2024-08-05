import { useQuery } from "@tanstack/react-query";
import i18next from "i18next";
import { getNameSection } from "../api/apiNameSections";

export function useNameSection(pageName) {

    const {
        isLoading,
        data: nameSection,
        error,
    } = useQuery({
        queryKey: ["nameSection", pageName, i18next.language],
        queryFn: () => getNameSection(pageName),
        retry: false,
    });

    return { isLoading, error, nameSection };
}
