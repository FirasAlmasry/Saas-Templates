import axios from "../utils/axios";


export const getNameSection = async (pageName) => {
    const { data } = await axios.get(`/pages?page=${pageName}`);
    return data;
};