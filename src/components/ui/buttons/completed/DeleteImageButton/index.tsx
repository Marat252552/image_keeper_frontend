import { DeleteFilled } from "@ant-design/icons"
import { Button } from "antd"
import styles from './lib/styles.module.css'



const DeleteImageButton = ({onClick}: {onClick: () => void}) => {
    return <Button onClick={onClick} className={styles.container} danger><DeleteFilled /></Button>
}

export default DeleteImageButton