import { Typography } from '@components/Typography'
import { Container, Diviser, Status } from './styles'
import { PressableProps } from 'react-native'

export type MealStatus = {
    isOnTheDiet: boolean
}

type MealProps = MealStatus & PressableProps & {
    id: string
    hour: string
    description: string
}

export function Meal({ id, hour, description, isOnTheDiet, ...rest }: MealProps) {
    return (
        <Container {...rest} id={id}>
            <Typography fontSize="body_xs" fontFamily="bold">{hour}</Typography>
            <Diviser />
            <Typography style={{ flex: 1 }} numberOfLines={1}>{description}</Typography>
            <Status isOnTheDiet={isOnTheDiet} />
        </Container>
    )
}
