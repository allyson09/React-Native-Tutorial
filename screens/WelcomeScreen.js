import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("./assets/background.jpg")}
      >
        <View style={styles.welcomeMessage}>
          <Image
            style={styles.logo}
            source={require("./assets/logo-red.png")}
          />
          <Text>All Your Stuff Are Belong To Us</Text>
        </View>
        <View style={[styles.actionBar, styles.login]} />
        <View style={[styles.actionBar, styles.register]} />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  welcomeMessage: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logRegWrap: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
  },
  actionBar: {
    width: "100%",
    height: 70,
  },
  login: {
    backgroundColor: "#fc5c65",
  },
  register: {
    backgroundColor: "#4ECDC4",
  },
});
