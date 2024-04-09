import { View, Text, StyleSheet, SectionList, Image, ScrollView } from 'react-native';
export default function Setting() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.group1}>
                <Image style={styles.logo} source={require("../assets/archit.jpg")} />
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Archit Sehgal</Text>
                <Text style={{ fontSize: 16 }}>+91 91x99x8x70 . @architsehgal</Text>
            </View>
            <View style={styles.group2}>
                <Image style={styles.icon} source={require("../assets/camera.webp")} />
                <Text style={{ color: "rgb(0,139,230)", fontSize: 16 }}>Change Profile Photo</Text>
            </View>
            <View style={{ height: 20 }} />
            <View style={styles.group2}>
                <Image style={styles.icon} source={require("../assets/icon1.png")} />
                <Text style={{ color: "#000", fontSize: 16 }}>My Stories</Text>
                <Text style={{ position: "absolute", right: 20, fontSize: 16 }}>{">"}</Text>
            </View>
            <View style={{ height: 20 }} />
            <View style={{backgroundColor:"#fff",borderRadius:15}}>
                <View style={styles.group2}>
                    <Image style={styles.icon} source={require("../assets/icon2.jpg")} />
                    <Text style={{ color: "#000", fontSize: 16 }}>Saved Messages</Text>
                    <Text style={{ position: "absolute", right: 20, fontSize: 16 }}>{">"}</Text>
                </View>
                <View style={styles.group2}>
                    <Image style={styles.icon} source={require("../assets/icon3.png")} />
                    <Text style={{ color: "#000", fontSize: 16 }}>Recent Calls</Text>
                    <Text style={{ position: "absolute", right: 20, fontSize: 16 }}>{">"}</Text>
                </View>
                <View style={styles.group2}>
                    <Image style={styles.icon} source={require("../assets/icon4.jpg")} />
                    <Text style={{ color: "#000", fontSize: 16 }}>Devices</Text>
                    <Text style={{ position: "absolute", right: 20, fontSize: 16 }}>{"2 >"}</Text>
                </View>
                <View style={styles.group2}>
                    <Image style={styles.icon} source={require("../assets/icon5.jpg")} />
                    <Text style={{ color: "#000", fontSize: 16 }}>Chat Folders</Text>
                    <Text style={{ position: "absolute", right: 20, fontSize: 16 }}>{">"}</Text>
                </View>
            </View>
            <View style={{ height: 20 }} />
            <View style={{backgroundColor:"#fff",borderRadius:15}}>
                <View style={styles.group2}>
                    <Image style={styles.icon} source={require("../assets/icon6.jpg")} />
                    <Text style={{ color: "#000", fontSize: 16 }}>Notifications and Sounds</Text>
                    <Text style={{ position: "absolute", right: 20, fontSize: 16 }}>{">"}</Text>
                </View>
                <View style={styles.group2}>
                    <Image style={styles.icon} source={require("../assets/icon7.png")} />
                    <Text style={{ color: "#000", fontSize: 16 }}>Privacy and Secruity</Text>
                    <Text style={{ position: "absolute", right: 20, fontSize: 16 }}>{">"}</Text>
                </View>
                <View style={styles.group2}>
                    <Image style={styles.icon} source={require("../assets/icon8.jpg")} />
                    <Text style={{ color: "#000", fontSize: 16 }}>Data and Storage</Text>
                    <Text style={{ position: "absolute", right: 20, fontSize: 16 }}>{">"}</Text>
                </View>
                <View style={styles.group2}>
                    <Image style={styles.icon} source={require("../assets/icon9.avif")} />
                    <Text style={{ color: "#000", fontSize: 16 }}>Power Saving</Text>
                    <Text style={{ position: "absolute", right: 20, fontSize: 16 }}>{"Off >"}</Text>
                </View>
                <View style={styles.group2}>
                    <Image style={styles.icon} source={require("../assets/icon10.png")} />
                    <Text style={{ color: "#000", fontSize: 16 }}>Language</Text>
                    <Text style={{ position: "absolute", right: 20, fontSize: 16 }}>{"English >"}</Text>
                </View>
            </View>
            <View style={{ height: 40 }} />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D4D4D4",//gray color
        flex: 1,
        padding: 10
    }, logo: {
        width: 70,
        height: 70,
        borderRadius: 35,
        resizeMode: 'contain',
        marginBottom: 5
    },
    group1: {
        display: "flex",
        alignItems: "center",
        padding: 10,
        gap: 2
    }, icon: {
        width: 30,
        height: 30,
        borderRadius: 8,
        resizeMode: 'contain',
    },
    group2: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10
    }
})
