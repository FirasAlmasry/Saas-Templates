import axios from "../utils/axios";

export const getBasicData = async () => {
    const { data } = await axios.get("/basicData");
    return data;
};