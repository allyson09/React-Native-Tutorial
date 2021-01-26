import React from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";

import Card from "./app/components/Card";
import colors from "./app/config/colors";

export default function App() {
  return (
    <View style={styles.background}>
      <Card
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.grayBackground,
    padding: 20,
    paddingTop: 100,
  },
});
