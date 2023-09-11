import {  EditOutlined } from "@ant-design/icons"
import { Button } from "antd"
import styles from './lib/styles.module.css'



const EditImageButton = ({onClick}: {onClick: () => void}) => {
    return <Button onClick={onClick} className={styles.container} ><EditOutlined /></Button>
}

export default EditImageButton