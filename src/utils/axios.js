import axios from "axios";
import i18next from 'i18next';

// إنشاء Axios instance
const transport = axios.create({
    // baseURL: "https://api.reheltk.net",
    baseURL: "https://psiteapi.revampbrands.com/api/v1"
});

// استخدام interceptor لتحديث الهيدر قبل كل طلب
transport.interceptors.request.use((config) => {
    const currentLanguageCode = localStorage.getItem('i18nextLng') || 'default';
    config.headers['local'] = currentLanguageCode;
    return config;
}, (error) => {
    return Promise.reject(error);
});

// تغيير اللغة وتحديث الهيدر باستخدام interceptor
i18next.on('languageChanged', (lng) => {
    localStorage.setItem('i18nextLng', lng);
    transport.defaults.headers['local'] = lng;
});

export default transport;
