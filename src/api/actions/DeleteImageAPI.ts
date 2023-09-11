import { instanse } from "../Intanse"


const DeleteImageAPI = (image_id: string) => {
    return instanse.delete(`/images/${image_id}`)
}

export default DeleteImageAPI