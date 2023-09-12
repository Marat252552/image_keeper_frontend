import FilledElement from '../../../other/templates/FilledElement'
import TransparentButtonContainer from '../../../other/templates/TransparentButtonContainer'


const IconOutlinedButton = ({IconComponent}: {IconComponent: any}) => (
    <TransparentButtonContainer>
        <FilledElement
            style={{ border: 'solid 2px white', cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'center' }}>
            {IconComponent}
        </FilledElement>
    </TransparentButtonContainer>
)

export default IconOutlinedButton