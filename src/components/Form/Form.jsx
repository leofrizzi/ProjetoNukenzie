import { useState } from 'react'
import { PrimaryButton } from '../../styles/generalStyles'
import { Input } from '../../styles/generalStyles'
import { Select } from '../../styles/generalStyles'
import { Label, P } from '../../styles/generalStyles'
import { Form } from './styles'
import { v4 as uuidv4 } from 'uuid'

export const FormCard = ({ setSummaryList }) => {
    const [text, setText] = useState('')
    const [money, setMoney] = useState('')
    const [typeValue, setTypeValue] = useState('')

    const addCardToList = () => {
        const newCard = { id: uuidv4(), text, money, typeValue }
        setSummaryList((summary) => [...summary, newCard])
    }

    const submit = (e) => {
        e.preventDefault()
        addCardToList()
        setText('')
        setMoney('')
        setTypeValue('')
    }

    return (
        <Form onSubmit={submit}>
            <Label>Descrição</Label>
            <div>
                <Input
                    value={text}
                    type='text'
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Digite aqui sua descrição'
                    required
                />
                <P>Ex: Compra de Roupas</P>
            </div>
            <div>
                <Label>Valor (R$)</Label>
                <Input
                    value={money}
                    type='number'
                    onChange={(e) => setMoney(e.target.value)}
                    placeholder='1'
                    required
                />
            </div>
            <div>
                <Label>Tipo de Valor</Label>
                <Select
                    value={typeValue}
                    onChange={(e) => setTypeValue(e.target.value)}
                    required
                >
                    <option hidden>Selecionar uma opção</option>
                    <option value='Entrada'>Entrada</option>
                    <option value='Despesa'>Despesa</option>
                </Select>
            </div>
            <PrimaryButton>Inserir valor</PrimaryButton>
        </Form>
    )
}