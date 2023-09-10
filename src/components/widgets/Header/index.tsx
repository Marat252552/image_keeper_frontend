import UploadButton from '../../ui/buttons/UploadButton'
import Info from './elements/Info'
import Title from './elements/Title'
import styles from './lib/styles.module.css'
import { Header_T } from './lib/types'



const Header: Header_T = ({images_total}) => {
    return <div className={styles.container}>
        <div className={styles.main_module}>
            <Title />
            <Info images_total={images_total}/>

        </div>
        <div className={styles.button_module}>
            <UploadButton />
        </div>
    </div>
}

export default Header