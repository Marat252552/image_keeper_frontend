import UploadButton from '../../../ui/buttons/UploadButton'
import Title from '../../../ui/other/TitleLogo/Title'
import styles from './../lib/styles.module.css'


const NoImagesWindow = () => {
    return <div className={styles.noImagesWindow_container}>
        <Title />
        <span style={{fontSize: '20px'}}>No images uploaded yet</span>
        <span style={{fontSize: '10px'}}>Upload your first image by drag and dropping the file on screen or click the button below</span>
        <UploadButton />
    </div>
}

export default NoImagesWindow