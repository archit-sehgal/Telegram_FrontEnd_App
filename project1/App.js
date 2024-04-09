import React from 'react';
import { StyleSheet, Text, Pressable, View, Image, Settings } from 'react-native';
import { NavigationContainer,useNavigation,useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomePage from './components/WelcomePage';
import Contacts from "./components/contacts"
import Setting from "./components/Setting"
const Stack = createNativeStackNavigator();

// Custom header component
const CustomHeader = () => {
  const navigation=useNavigation();
  const route = useRoute();
  return (
    <View style={styles.customHeader}>
      <View style={styles.rowflex}>
        <Pressable onPress={() => { navigation.navigate("editchats") }}>
          <Text style={{ color: "rgb(0,139,230)", fontSize: 18, fontWeight: "bold" }}>Edit</Text>
        </Pressable>
      </View>
      <View style={styles.rowflex}>
        <Pressable onPress={() => { navigation.navigate("welcome") }}>
          <Image
            style={styles.logo}
            source={require('./assets/telegram.png')}
          />
        </Pressable>
        <Text style={styles.headerText}>{route.name==="welcome"?"chats":route.name}</Text>
      </View>

      <View style={styles.rowflex}>
        <Pressable onPress={() => { navigation.navigate("addtochats") }}>
          <Image
            style={styles.logo1}
            source={require('./assets/plus.png')}
          />
        </Pressable>
        <Pressable onPress={() => { navigation.navigate("editchats") }}>
          <Image
            style={styles.logo}
            source={require('./assets/edit.png')}
          /></Pressable>
      </View>
    </View>
  )
};

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <Stack.Navigator
          screenOptions={{
            header: () => <CustomHeader />
          }}>
          <Stack.Screen name="welcome"  component={WelcomePage} />
          <Stack.Screen name="contacts" component={Contacts} />
          <Stack.Screen name="setting" component={Setting} />
        </Stack.Navigator>
        <Footer />
      </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: "100%",
    backgroundColor: 'whitesmoke'
  },
  rowflex: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  logo1: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
