import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native';

export default function WelcomePage() {

    const itemstodisplay = [
        {
            chatname: "Wushang Clan",
            members: ["archit sehgal", "avneet singh", "pardeep dhawan"],
            recentmessage: ["hope you doing great guys"],
            image: require("../assets/wushangclan.jpg")
        },
        {
            chatname: "Tate Brothers",
            members: ["andrew tate", "tristan tate", "mike tyson", "archit sehgal"],
            recentmessage: ["life will break u into pieces! You gotta keep your head up and walk towards your goals."],
            image: require("../assets/tateBrothers.jpg")
        },
        {
            chatname: "The College",
            members: ["archit sehgal", "avneet singh", "manish kachar", "pardeep dhawan", "abay singh"],
            recentmessage: ["class at 10 in the morning"],
            image: require("../assets/college.jpg")
        },
        {
            chatname: "Midtown Madness Cars",
            members: ["catty blwon", "archit sehgal", "vansh khoob", "pardeep dhawan"],
            recentmessage: ["fully modified ram picka available at just $300k"],
            image: require("../assets/cars.webp")
        },
        {
            chatname: "Night Riders Club",
            members: ["mike akon", "winson church", "johan obama"],
            recentmessage: ["next ride to los santos at 7PM est sharp"],
            image: require("../assets/nightriders.avif")
        },{
            chatname: "Illuminati",
            members: ["terris jung", "wint markin", "nyke mellon"],
            recentmessage: ["meeting to be held at red bridge, london 12PM sharp"],
            image: require("../assets/illuminati.avif")
        },
    ];

    const Item = ({ chatname, members, recentmessage, image }) => (
        <Pressable>
            <View style={Styles.innerContainer}>
                <View>
                    <Image style={Styles.logo} source={image} />
                </View>
                <View>
                    <Text style={Styles.headerText}>{chatname}</Text>
                    <Text style={Styles.middleText}>{members[0]}</Text>
                    <Text style={Styles.itemText}>{recentmessage + "..."}</Text>
                </View>
            </View>
        </Pressable>
    );

    const renderItem = ({ item }) => <Item {...item} />;

    return (
        <View style={Styles.container}>
            <FlatList
                data={itemstodisplay}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'contain',
        marginRight: 12,
    },
    innerContainer: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: 'fffe',
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottomWidth: .5,
    },
    itemText: {
        color: '#000e',
        fontSize: 14,
    },
    headerText: {
        fontSize: 23,
        fontWeight: "bold",
    },
    middleText: {
        fontSize: 18,
    }
});
