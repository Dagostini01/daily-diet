import { Typography } from '@components/Typography'
import { ButtonToStaticLeft, ButtonToStaticRight, Container, IconArrowUpLeft, IconArrowUpRight } from './styles'
import { ViewProps } from 'react-native'
import { FontSizesTitle } from '@components/Typography/types'

export type ButtonFloatProps = { iconPosition?: 'left' | 'right' }

export type TextSize = { titleFontSize?: FontSizesTitle }

export type CardColor = { bg?: 'gray' | 'green' | 'red' }

type CardProps = ViewProps & CardColor & TextSize & ButtonFloatProps & {
    title: string
    subtitle: string
    showIconButton?: boolean
    onPress?: () => void
}

export function Card({
    title,
    subtitle,
    bg = 'gray',
    titleFontSize = 'title_lg',
    iconPosition = 'right',
    showIconButton = true,
    onPress,
    ...rest }: CardProps) {

    return (
        <Container bg={bg} {...rest}>

            {showIconButton && iconPosition === 'right' ? (

                <ButtonToStaticRight onPress={onPress}>
                    <IconArrowUpRight bg={bg} />
                </ButtonToStaticRight>

            ) : (

                <ButtonToStaticLeft onPress={onPress}>
                    <IconArrowUpLeft bg={bg} />
                </ButtonToStaticLeft>

            )}


            <Typography fontSize={titleFontSize} lineHeight='lg' fontFamily='bold'>{title}</Typography>
            <Typography color='gray_2' fontSize='body_sm' textAlign='center'>{subtitle}</Typography>

        </Container>
    )
}
