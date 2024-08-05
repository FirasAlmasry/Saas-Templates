import axios from "../utils/axios";

export const getContactData = async () => {
    const { data } = await axios.get("/contact");
    return data;
};

export const sendMessage = async (userData) => {

    const formData = new FormData();
    formData.append('name', userData.name);
    formData.append('email', userData.email);
    formData.append('phone', userData.phone);
    formData.append('notes', userData.notes);

    const { data } = await axios.post('/contact/message', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Accept": "application/json"
        },
    });

    return data;
};