import { AxiosResponse } from "axios"
import { instanse } from "../Intanse"
import { Image_T } from "../../components/shared/lib/types"

type SetlabelAPI_T = ({image_id, label}: {image_id: string, label: string}) => Promise<AxiosResponse<{
    image: Image_T
}>>

const SetLabelAPI: SetlabelAPI_T = ({image_id, label}) => {
    return instanse.post('/images/label', {image_id, label})
}

export default SetLabelAPI