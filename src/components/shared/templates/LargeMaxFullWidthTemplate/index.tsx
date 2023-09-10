import styles from './lib/styles.module.css'


const LargeMaxFullWidthTemplate = ({ children }: { children: JSX.Element }) => {
    return <div className={styles.mainContainer}>
        <div className={styles.container}>
            <div style={{ width: '100%' }}>
                {children}
            </div>
        </div>
    </div>
}

export default LargeMaxFullWidthTemplate