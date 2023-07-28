import { DeleteButton } from '../../styles/generalStyles'
import { P, H3 } from '../../styles/generalStyles'
import { Li } from './styles'

export const Lista = ({
    summaryId,
    descriptionValue,
    selectedValue,
    totalValue,
    removeCard,
}) => {
    return (
        <Li borderColor={selectedValue}>
            <div>
                <H3>{descriptionValue}</H3>
                <P>{selectedValue}</P>
            </div>
            <div>
                <P>{totalValue}</P>
                <DeleteButton onClick={() => removeCard(summaryId)}>
                    Excluir
                </DeleteButton>
            </div>
        </Li>
    )
}