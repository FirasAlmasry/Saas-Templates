import { useQuery } from "@tanstack/react-query";
import { getGoals } from "../api/apiAbout";
import i18next from "i18next";

export function useGoal() {

    const {
        isLoading,
        data: goal,
        error,
    } = useQuery({
        queryKey: ["goal", i18next.language],
        queryFn: () => getGoals(),
        retry: false,
    });

    return { isLoading, error, goal };
}
