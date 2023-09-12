import FilledElement from '../../../other/templates/FilledElement'
import TransparentButtonContainer from '../../../other/templates/TransparentButtonContainer'


const IconFilledButton = ({IconComponent}: {IconComponent: any}) => (
    <TransparentButtonContainer>
        <FilledElement
            style={{ backgroundColor: 'white', cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'center' }}>
            {IconComponent}
        </FilledElement>
    </TransparentButtonContainer>
)

export default IconFilledButton