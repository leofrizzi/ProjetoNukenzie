import { P, H3 } from '../../styles/generalStyles'
import { TotalDiv } from './styles'

export const TotalValue = ({ summaryList }) => {
    const totalMoney = summaryList.reduce((accValue, summary) => {
        return summary.typeValue === 'Entrada'
            ? accValue + Number(summary.money)
            : accValue - Number(summary.money)
    }, 0)

    const formattedTotalMoney = totalMoney.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return (
        <TotalDiv>
            <div>
                <H3>Valor Total</H3>
                <P>O valor se refere ao saldo</P>
            </div>
            <H3>{formattedTotalMoney}</H3>
        </TotalDiv>
    )
}