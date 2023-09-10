import { AxiosResponse } from "axios"
import { instanse } from "../Intanse"

type data_T = {
    login: string,
    password: string,
    remember: boolean
}

type loginAPI_T = (data: data_T) => Promise<AxiosResponse<{
    user: {
        user_id: string,
        login: string
    },
    accessToken: string
}>>

const loginAPI: loginAPI_T = (data) => {
    return instanse.post('/auth/login', data)
}

export default loginAPI