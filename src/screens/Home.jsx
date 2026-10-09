import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";
import Title from "../components/Title";
import ButtonIcon from "../components/ButtonIcon";

export default function Home() {
    const navigation = useNavigation();
    return(
        <View style={{
            flex:1,
            padding: 32,
            paddingTop: 54,
        }}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon
                    icon="add-circle"
                    onPress={() => navigation.navigate("product")}
                />
            </Header>
        </View>
    )
}