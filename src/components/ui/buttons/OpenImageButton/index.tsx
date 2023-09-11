import { Button } from "antd"
import styles from './lib/styles.module.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';



const OpenImageButton = ({onClick}: {onClick: () => void}) => {
    return <Button onClick={onClick} className={styles.container} ><RemoveRedEyeIcon /></Button>
}

export default OpenImageButton