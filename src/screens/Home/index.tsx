import { Header } from "@components/Header";
import { Typography } from "@components/Typography";
import { Container } from "./styles";
import { Card } from "@components/Card";
import { Button } from "@components/Button";
import { SectionList, Text, View } from "react-native";
import { Plus } from "phosphor-react-native";
import { Meal } from "@components/Meal";

export function Home() {

    const meals = [
        {
            title: '12.08.2025',
            data: [
                {
                    id: '1',
                    hour: '20:00',
                    description: 'X-tudo',
                    isOnTheDiet: false,
                }
            ]
        },
        {
            title: '11.08.2025',
            data: [
                {
                    id: '2',
                    hour: '21:00',
                    description: 'Salada',
                    isOnTheDiet: true,
                }
            ]
        },
    ]

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
                    icon={<Plus color="white" size={18} />}
                    type="solid"
                />
            </View>

            <SectionList
                sections={meals}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Meal key={item.id} {...item} onPress={() => { console.log(item.description) }} />}
                showsVerticalScrollIndicator={false}
                renderSectionHeader={({ section: { title } }) => (
                    <Typography
                        fontSize="title_sm"
                        fontFamily="bold"
                        color="gray_1"
                        style={{ marginBottom: 8, marginTop: 32 }}
                    >
                        {title}
                    </Typography>
                )}
                contentContainerStyle={
                    meals.length === 0 && {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }
                }
                ListEmptyComponent={() => (
                    <>
                        <Typography>Não há refeições cadastradas ainda.</Typography>
                        <Typography>Vamos cadastrar refeições hoje?</Typography>
                    </>
                )}
            />

        </Container>
    )
}