import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import {useNavigation} from "@react-navigation/native";
export default function Footer({ }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable onPress={()=>{navigation.navigate("contacts")}}>
                <Image
                    style={styles.logo}
                    source={require('../assets/contact.png')}
                />
            </Pressable>
            <Pressable onPress={()=>{navigation.navigate("welcome")}}>
                <Image
                    style={styles.logo}
                    source={require('../assets/chats.png')}
                />
            </Pressable>
            <Pressable onPress={()=>{navigation.navigate("setting")}}>
                <Image
                    style={styles.logo}
                    source={require('../assets/setting.png')}
                />
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10,
        backgroundColor: 'whitesmoke'
    }, logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
})
