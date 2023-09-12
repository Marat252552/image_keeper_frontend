import { Checkbox } from '@mui/material'
import styles from './lib/styles.module.css'
import MainText from '../../../../shared/Texts/MainText'
import {forwardRef} from 'react'


const RememberMeCheckBox = forwardRef((props: any, ref: any) => {

    return <div className={styles.checkbox_container}>
        <Checkbox ref={ref} {...props} color='default' defaultChecked />
        <MainText>Запомнить меня</MainText>
    </div>
})

export default RememberMeCheckBox