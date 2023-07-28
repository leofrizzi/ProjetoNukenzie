import { DivHeader } from '../../styles/generalStyles'
import { HeaderStyle } from './styles'
import logo from '../../assets/NuKenzie.svg'

export const Header = () => {
    return (
        <HeaderStyle>
            <DivHeader>
                <figure>
                    <img src={logo} />
                </figure>
            </DivHeader>
        </HeaderStyle>
    )
}