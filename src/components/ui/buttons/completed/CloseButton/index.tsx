import { CloseOutlined } from "@ant-design/icons";
import GrayButtonTemplate from "../../../../shared/templates/GrayButtonTemplate";


const CloseButton = ({onClick}: {onClick: () => void}) => {
  return (
    <div
      onClick={onClick}
      style={{ width: "100%", display: "flex", justifyContent: "end" }}
    >
      <GrayButtonTemplate icon={<CloseOutlined />} text="Close Editor" />
    </div>
  );
};

export default CloseButton;
