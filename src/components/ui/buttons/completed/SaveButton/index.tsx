import { SaveOutlined } from "@ant-design/icons"
import GrayButtonTemplate from "../../../../shared/templates/GrayButtonTemplate"


const SaveButton = ({onClick}: {onClick: () => void}) => {
    return <div onClick={onClick}>
    <GrayButtonTemplate text="Save" icon={<SaveOutlined />} />
  </div>
}

export default SaveButton