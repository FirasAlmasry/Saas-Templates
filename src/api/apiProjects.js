import axios from "../utils/axios";

export const getProjects = async (page) => {
    const { data } = await axios.get(`/projects?page=${page}`);
    return data;
};

export const getProject = async (projectSlug) => {
    const { data } = await axios.get(`/projects/${projectSlug}`);
    return data;
};