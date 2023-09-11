import {  EditOutlined } from "@ant-design/icons"
import { Button } from "antd"
import styles from './lib/styles.module.css'



const EditImageButton = (props: any) => {
    return <Button {...props} className={styles.container} ><EditOutlined /></Button>
}

export default EditImageButton