import { Header } from "@components/Header";
import { Typography } from "@components/Typography";
import { Container, Title } from "./styles";
import { Card } from "@components/Card";
import { Button } from "@components/Button";
import { View } from "react-native";
import { Plus } from "phosphor-react-native";

export function Home() {
    return (
        <Container>

            <Header />

            <Card
                title="90,86%"
                subtitle="das refeições dentro da dieta"
                bg="green"
                iconPosition="right"
            />

            <View style={{ marginTop: 40 }}>

                <Typography fontSize="title_sm" style={{ marginBottom: 8 }}>Refeições</Typography>

                <Button
                    title="Nova refeição"
                    icon={<Plus color="white" size={18}/>}
                    type="solid"
                    isActive={false}
                />
            </View>

        </Container>
    )
}