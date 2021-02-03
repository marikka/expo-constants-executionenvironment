import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as AuthSession from "expo-auth-session";
import Constants from "expo-constants";

export default function App() {
  const executionEnvironment = Constants.executionEnvironment;
  console.log(
    `Constants.executionEnvironment: ${JSON.stringify(executionEnvironment)}`
  );
  const redirectUrl = AuthSession.getRedirectUrl();
  console.log(`AuthSession.getRedirectUrl(): ${redirectUrl}`);

  return (
    <View style={styles.container}>
      <Text>{`Constants.executionEnvironment: ${JSON.stringify(
        executionEnvironment
      )}`}</Text>
      <Text>{`AuthSession.getRedirectUrl(): ${redirectUrl}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
