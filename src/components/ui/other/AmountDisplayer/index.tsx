import styles from './lib/styles.module.css'
import { AmountDisplayer_T } from './lib/types'


const AmountDisplayer: AmountDisplayer_T = ({amount}) => {
    return <div className={styles.container}>
        {amount}
    </div>
}

export default AmountDisplayer