import axios from "../utils/axios";

export const getAbout = async () => {
    const { data } = await axios.get("/about");
    return data;
};

export const getGoals = async () => {
    const { data } = await axios.get("/goal");
    return data;
};