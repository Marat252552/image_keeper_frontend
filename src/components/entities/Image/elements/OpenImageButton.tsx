import { Link } from "react-router-dom"
import OpenImageButton from "../../../ui/buttons/OpenImageButton"


const OpenButton = ({src}: {src: string}) => {
    return <Link to={src}>
    <OpenImageButton />
  </Link>
}

export default OpenButton