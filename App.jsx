import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Kameran from "./components/Kameran";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Kameran />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
