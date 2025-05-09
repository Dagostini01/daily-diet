import { TouchableOpacityProps } from 'react-native'
import { Container, Title } from './styles'

export type ButtonType = {
    type?: 'solid' | 'outline'
    isActive?: boolean
}

type ButtonProps = TouchableOpacityProps & ButtonType & {
    title: string
    icon?: React.ReactNode
}

export function Button({ title, icon, type = 'solid', isActive = true, ...rest }: ButtonProps) {
    return (

        <Container type={type} isActive={isActive} disabled={isActive ? false : true} {...rest}>
            {icon && icon/*se icon existir renderiza ele*/}
            <Title type={type}>{title}</Title>
        </Container>
    )
}
