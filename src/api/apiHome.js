import axios from "../utils/axios";

export const getHome = async () => {
    const { data } = await axios.get("/home");
    return data;
};