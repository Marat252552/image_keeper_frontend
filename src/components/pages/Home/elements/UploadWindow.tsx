import styles from './../lib/styles.module.css'
import upload_logo from './../../../../assets/upload_logo.svg'

const UploadWindow = () => {
    return <div className={styles.uploadWindow_container}>
        <div className={styles.uploadWindowInfo}>
            <img className={styles.upload_logo} draggable='false' src={upload_logo}/>
            <span style={{fontWeight: '700'}}>Upload File</span>
            <span style={{fontSize: '8px'}}>Drop your file here to start uploading</span>
        </div>
    </div>
}

export default UploadWindow