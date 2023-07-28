import { H3 } from '../../styles/generalStyles'
import { Lista } from '../List/List'
import { EmptyList } from '../ListEmpty/ListEmpty'
import { Ul } from './styles'

export const FinancialSummary = ({ summaryList, setSummaryList }) => {
    const removeCard = (id) => {
        if (confirm('Você realmente deseja excluir?'))
            setSummaryList((summaryList) =>
                summaryList.filter((summary) => summary.id !== id)
            )
    }

    return (
        <>
            <H3>Resumo financeiro</H3>
            {summaryList.length == 0 ? (
                <EmptyList />
            ) : (
                <Ul>
                    {summaryList.map(({ id, text, money, typeValue }) => (
                        <Lista
                            key={id}
                            descriptionValue={text}
                            totalValue={Number(money).toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })}
                            selectedValue={typeValue}
                            summaryId={id}
                            removeCard={removeCard}
                        />
                    ))}
                </Ul>
            )}
        </>
    )
}