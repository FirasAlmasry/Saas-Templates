import { useQuery } from "@tanstack/react-query";
import { getProject } from "../api/apiProjects";
import { useParams } from "react-router-dom";
import i18next from "i18next";

export function useProject() {
    const { projectSlug } = useParams();

    const {
        isLoading,
        data: project,
        error,
    } = useQuery({
        queryKey: ["project", projectSlug, i18next.language],
        queryFn: () => getProject(projectSlug),
        retry: false,
    });

    return { isLoading, error, project };
}
