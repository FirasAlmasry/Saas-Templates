import axios from "../utils/axios";

export const getBlogs = async (page) => {
    const { data } = await axios.get(`/blogs?page=${page}`);
    return data;
};

export const getBlog = async (blogSlug) => {
    const { data } = await axios.get(`/blogs/${blogSlug}`);
    return data;
};

export const getBlogByTag = async (blogSlug) => {
    const { data } = await axios.get(`/blog-tag/${blogSlug}`);
    return data;
};

export const getBlogByCat = async (blogSlug) => {
    const { data } = await axios.get(`/blog-category/${blogSlug}`);
    return data;
};

export const BlogSearch = async (search) => {
    const formData = new FormData();
    formData.append('search', search);

    const { data } = await axios.post('/blogs/search', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Accept": "application/json"
        },
    });

    return data;
};