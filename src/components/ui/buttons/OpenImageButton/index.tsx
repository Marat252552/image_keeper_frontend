import { Button } from "antd"
import styles from './lib/styles.module.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';



const OpenImageButton = () => {
    return <Button className={styles.container} ><RemoveRedEyeIcon /></Button>
}

export default OpenImageButton