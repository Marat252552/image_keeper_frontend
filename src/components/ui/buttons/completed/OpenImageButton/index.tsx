import styles from './lib/styles.module.css'
import { Button } from "antd"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const OpenButton = ({onClick}: {onClick: () => void}) => {
    return <Button onClick={onClick} className={styles.container} ><RemoveRedEyeIcon /></Button>
}

export default OpenButton