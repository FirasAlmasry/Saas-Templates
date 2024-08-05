import { useQuery } from "@tanstack/react-query";
import { getContactData } from "../api/apiContact";
import i18next from "i18next";

export function useContact() {

    const {
        isLoading,
        data: contacts,
        error,
    } = useQuery({
        queryKey: ["contacts", i18next.language],
        queryFn: () => getContactData(),
        retry: false,
    });

    return { isLoading, error, contacts };
}
