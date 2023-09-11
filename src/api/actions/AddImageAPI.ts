import { AxiosResponse } from "axios"
import { instanse } from "../Intanse"
import { Image_T } from "../../components/shared/lib/types"

type AddImageAPI_T = (formData: FormData) => Promise<AxiosResponse<{
    image: Image_T
}>>

const AddImageAPI: AddImageAPI_T = (formData: FormData) => {
    return instanse.post('/images', formData)
}

export default AddImageAPI