import { TextProps } from "react-native";
import { Container } from "./styles";
import theme from "@theme";
import * as T from "./types";

export type TypographyStyle = {
    textAlign?: T.TextAlign
    fontFamily?: T.FontFamily
    lineHeight?: T.LineHeight
    fontSize?: T.FontSizes
    color?: T.Colors
}

type Typography = TextProps & TypographyStyle;

export function Typography({ ...props }: Typography) {
    return (
        <Container {...props}>{props.children}</Container>
    )
}