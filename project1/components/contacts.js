import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native';

export default function Contacts() {

    const itemstodisplay = [
        {
            name: "Pardeep Dhawan",
            lastseen: "recently",
            image: require("../assets/contactperson.png")
        },
        {
            name: "Avneet Sarna",
            lastseen: "recently",
            image: require("../assets/contactperson.png")
        }, {
            name: "Sarang Arora",
            lastseen: "recently",
            image: require("../assets/contactperson.png")
        }, {
            name: "Tushant Pandita",
            lastseen: "recently",
            image: require("../assets/contactperson.png")
        }, {
            name: "Ashutosh Singh",
            lastseen: "recently",
            image: require("../assets/contactperson.png")
        },
        {
            name: "Vansh puri",
            lastseen: "within a week",
            image: require("../assets/contactperson.png")
        }, {
            name: "Manish Dubey",
            lastseen: "a month ago",
            image: require("../assets/contactperson.png")
        },
        {
            name: "yogesh bhasin",
            lastseen: "a month ago",
            image: require("../assets/contactperson.png")
        }, {
            name: "Illuminati",
            lastseen: "a long time ago",
            image: require("../assets/contactperson.png")
        },
    ];

    const Item = ({ name, lastseen, image }) => (
        <Pressable>
            <View style={Styles.innerContainer}>
                <View>
                    <Image style={Styles.logo} source={image} />
                </View>
                <View>
                    <Text style={Styles.headerText}>{name}</Text>
                    <Text>Last seen {lastseen}</Text>
                </View>
            </View>
        </Pressable>
    );

    const renderItem = ({ item }) => <Item {...item} />;

    return (
        <View style={Styles.container}>
            <View style={{ padding: 10 }}>
                <View style={{ height: 40, display: "flex", flexDirection: "row", gap: 5, backgroundColor: "#D4D4D4", alignItems: "center", justifyContent: "center" }}>
                    <Image source={require("../assets/search.png")} style={Styles.icon} />
                    <Text style={{ fontSize: 16 }}>Search</Text>
                </View>
            </View>
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
    icon: { width: 30, height: 30 },
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
