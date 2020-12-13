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
      <View style={styles.background}>
        <View style={styles.navButtonWrap}>
          <View style={[styles.navButton, styles.previous]} />
          <View style={[styles.navButton, styles.next]} />
        </View>
        <Image
          resizeMode={"contain"}
          style={styles.itemImage}
          source={require("./assets/chair.jpg")}
        />
      </View>
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
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  itemImage: {
    width: "100%",
    height: 520,
    marginTop: 70,
  },
  navButtonWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navButton: {
    width: 50,
    height: 50,
    marginLeft: 50,
    marginRight: 50,
  },
  previous: {
    backgroundColor: "#fc5c65",
  },
  next: {
    backgroundColor: "#4ECDC4",
  },
});
