import { AxiosResponse } from "axios"
import { instanse } from "../Intanse"

type data_T = {
    login: string,
    password: string,
    remember: boolean
}

type signinAPI_T = (data: data_T) => Promise<AxiosResponse<{
    user: {
        user_id: string,
        login: string
    },
    accessToken: string
}>>

const signinAPI: signinAPI_T = (data) => {
    return instanse.post('/auth/signin', data)
}

export default signinAPI