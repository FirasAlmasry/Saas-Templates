import axios from "../utils/axios";

export const getServices = async (page) => {
    const { data } = await axios.get(`/services?page=${page}`);
    return data;
};

export const getService = async (serviceSlug) => {
    const { data } = await axios.get(`/services/${serviceSlug}`);
    return data;
};