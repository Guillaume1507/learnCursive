import { Text, Button } from "native-base";
import { View, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import * as Font from "expo-font";
const ScreenHome = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "custom-font": require("../assets/font/Kamalla.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);
  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        // fontFamily={"custom-font"}
      >
        Learn Cursive
      </Text>
      <Image
        style={styles.image}
        source={require("../images/HomeImage.png")}
        alt="Alternate Text"
        size="12"
      />

      <Button
        colorScheme="secondary"
        size={"lg"}
        style={styles.button}
        onPress={() => props.navigation.navigate("Exercice")}
      >
        <Text style={styles.buttonText}>Exercice</Text>
      </Button>
      <Footer />
    </View>
  );
};

export default ScreenHome;

const styles = StyleSheet.create({
  container: {
    // height: ,
    flex: 1,
    // margin: "15%",
    display: "flex",
    // padding: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#8370FF",
    // #D0C9FF
  },
  title: {
    // fontFamily: "kamalla",

    fontFamily: "custom-font",
    fontSize: "70rem",
    lineHeight: "100rem",
  },
  button: { width: 140, color: "purple" },
  buttonText: { fontSize: 20 },
  image: {
    borderRadius: 5,
  },
});
