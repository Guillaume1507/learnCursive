import ScreenHome from "./screens/Home";
import Landing from "./screens/Landing";
import Finisher from "./screens/Finisher";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import Footer from "./screens/Footer";
import { SafeAreaFrameContext } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Exercice from "./screens/Exercice";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle: {
                height: 90,
                paddingHorizontal: 5,
                paddingTop: 0,
                backgroundColor: "red",
                position: "absolute",
                borderTopWidth: 0,
              },
            })}
          >
            <Stack.Screen name="Home" component={ScreenHome} />
            <Stack.Screen name="Exercice" component={Exercice} />
            <Stack.Screen name="Finish" component={Finisher} />
            {/* <Stack.Screen name="Footer" component={Footer} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "15%",
    // flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    backgroundColor: "lightgrey",
    margin: "15%",
    // flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontSize: "30px",
  },
});
