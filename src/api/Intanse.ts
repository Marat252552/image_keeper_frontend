import axios from 'axios'


export const instanse = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.backend_url || 'http://localhost:3300',
    headers: {
        "Content-Type": "multipart/form-data"
    }
})
// Interceptor, устанавливающий в headers каждого запроса AccessToken
instanse.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
})

// Interceptor, отлавливающий ошибку, которую вызывает отсутствие AccessToken-а, и посылающий запрос на получение новой пары токенов
instanse.interceptors.response.use((config: any) => {
    return config;
}, async (error) => {
    const OriginalRequest = error.config
    if (error.response.status === 403 && error.config && !error.config._isRetry) {
        localStorage.removeItem('accessToken')
        OriginalRequest._isRetry = true
        try {
            const response = await instanse.get('/auth/refresh')
            localStorage.setItem('accessToken', response.data.accessToken)
            return instanse.request(OriginalRequest)
        } catch (e) {
            console.log(e)
        }
    }
    throw error;
})

export const uploadFileAPI = (formData: FormData) => {
    return instanse.post('/files', formData)
}