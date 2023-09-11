import { AxiosResponse } from "axios"
import { instanse } from "../Intanse"
import { Image_T } from "../../components/shared/lib/types"

type GetImagesAPI_T = () => Promise<AxiosResponse<{
    images: Image_T[]
}>>

const GetImagesAPI: GetImagesAPI_T = () => {
    return instanse.get('/images')
}

export default GetImagesAPI