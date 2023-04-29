import { Text, Button } from "native-base";
import { View, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

import data from "../data";
import * as Font from "expo-font";
import ConfettiCannon from "react-native-confetti-cannon";
// const MessageScreen = () => {

// };
const Finisher = (props) => {
  //   score = props.score;

  const route = useRoute();
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
    return <Text> Loading...</Text>;
  }
  var eror = route.params.mistake;
  for (let i = 0; i < eror.length; i++) {
    if (eror.indexOf(eror[i]) !== i) {
      // console.log(i, "DOUBLON");
      return eror.pop(i);
    }
  }

  let erorList = eror.map((i) => (
    <View key={i} display="flex" flexDirection="row nowrap">
      <Image style={styles.image} source={data[i].imageCursive}></Image>
    </View>
  ));
  console.log(erorList, "eror");
  return (
    <View style={styles.container}>
      <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
      <Text
        style={styles.title}
        // fontFamily={"custom-font"}
      >
        finish
      </Text>

      {/* <Image
        style={styles.image}
        source={require("../images/HomeImage.png")}
        alt="Alternate Text"
        size="12"
      /> */}
      <Text fontSize={25}> Really nice {route.params.score}/10 !! </Text>
      <Text fontSize={20}>The letter you need to work on : </Text>
      <View style={styles.answerContainer}>{erorList}</View>
      <Button
        colorScheme="secondary"
        size={"lg"}
        style={styles.button}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </Button>
    </View>
  );
};

export default Finisher;

const styles = StyleSheet.create({
  container: {
    // height: ,
    flex: 1,
    // margin: "15%",
    display: "flex",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#8370FF",
    // #D0C9FF
  },
  answerContainer: {
    alignContent: "center",
    marginTop: 30,
    marging: 18,
    justifyContent: "space-evenly",
    width: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
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
    margin: "5%",
    height: 75,
    width: 75,
  },
});
