import { DeleteFilled } from "@ant-design/icons"
import { Button } from "antd"
import styles from './lib/styles.module.css'



const DeleteImageButton = (props: any) => {
    return <Button {...props} className={styles.container} danger><DeleteFilled /></Button>
}

export default DeleteImageButton