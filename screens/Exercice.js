import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { Text, Button } from "native-base";
import data from "../data";
// import { color } from "react-native-reanimated";

// let color = "success";

const Exercice = (props) => {
  const [color, setColor] = useState("blue");
  const [score, setScore] = useState(0);
  const [attemtp, setAttempt] = useState(0);
  const [mistake, setMistake] = useState([]);
  const [nombresRestants, setNombresRestants] = useState(
    Array.from({ length: 27 }, (_, i) => i)
  );
  // let response = "";
  // let question = "";

  useEffect(() => {
    if (attemtp === 3) {
      props.navigation.navigate("Finish", { score, mistake });
    }
  }, [attemtp]);
  function piocherNombre() {
    const index = Math.floor(Math.random() * nombresRestants.length);
    const nombrePioche = nombresRestants[index];
    const nouveauxNombresRestants = nombresRestants.filter(
      (nombre) => nombre !== nombrePioche
    );

    // setQuestion(nombrePioche);
    return nombrePioche;
  }
  let question = piocherNombre();

  // old function generate number

  // let interro = piocherNombre();
  // genere un nombre aleatoire
  // let response = getRandomInt();
  // if ((response = question)) {
  // response = question + 1;
  // }

  // let i = getRandomInt(27);

  function piocherQuatreNombre() {
    let raw = checkArrayValues([
      piocherNombre(),
      piocherNombre(),
      piocherNombre(),
      question,
    ]);
    {
      for (let i = 0; i < raw.length; i++) {
        if (raw.indexOf(raw[i]) !== i) {
          // console.log(raw, "DOUBLON");
          return piocherQuatreNombre();
        }

        // return raw;

        // console.log(array, "DOUBLON");

        // return true;
      }
      // console.log(raw, "on dirait cest bon");
      return raw.sort();
    }
    // return raw;
  }

  let test = piocherQuatreNombre();
  // console.log(test, "test");

  //  Fonction de check des doublons :
  function checkArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
      if (array.indexOf(array[i]) !== i) {
        return piocherQuatreNombre();
      }

      // return raw;

      // console.log(array, "DOUBLON");

      // return true;
    }
    // console.log(array, "on dirait cest bon");
    return array.sort();
  }

  // let raw = [piocherNombre(), piocherNombre(), piocherNombre(), question];
  // let r = raw.sort();
  let r = piocherQuatreNombre();

  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * max);
  // }

  // onpress

  function correctAnswer(i) {
    setAttempt(attemtp + 1);
    // setNombresRestants(nouveauxNombresRestants);
    console.log(i, "le i ");
    if (question === i) {
      var color = "green";
      // backgroundColor[i] = "green";
      setColor("green");
      setScore(score + 1);
    } else {
      setColor("red");
      // let erorList = [...i];
      setMistake([...mistake, question]);
      // backgroundColor = "red";
    }
    // return backgroundColor;
    console.log(color, "color");
  }

  let resp = r.map((i) => (
    <View key={i}>
      <TouchableOpacity
        style={styles.button}
        key={i}
        onPress={(e) => {
          correctAnswer(i);
        }}
        pressDuration={0.9}
        margin={"2px"}
      >
        <Image style={styles.image} source={data[i].imageCursive}></Image>
      </TouchableOpacity>
    </View>
  ));
  // console.log(resp, "la repooonse");
  const content = (
    <View>
      <Button
        style={styles.return}
        colorScheme={"pink"}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Return</Text>
      </Button>
      <Text fontWeight={"bold"} right={-275}>
        score: {score}/10
      </Text>
      <View style={styles.container} id="question">
        <Text
          fontSize="30"
          fontWeight={"bold"}
          paddingBottom={3}
          fontFamily="heading"
        >
          {data[question].name}
        </Text>
        <Image style={styles.letter} source={data[question].image}></Image>
      </View>
      <View style={styles.answerContainer}>{resp}</View>
    </View>
  );
  // console.log(picture);
  return <View style={styles.container}>{content}</View>;
};

export default Exercice;

const styles = StyleSheet.create({
  container: {
    padding: "5%,0,5%,0%",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#8370FF",
  },
  button: {
    width: 150,
    height: 150,
    marginVertical: 10,
    borderRadius: 10,
    margin: 3,
  },
  image: {
    borderRadius: 15,
    height: 140,
    width: 140,
    resizeMode: "cover",
  },
  answerContainer: {
    display: "flex",
    flexDirection: "row nowrap",
    alignContent: "center",
    marginTop: 30,
    marging: 18,
    justifyContent: "space-evenly",
    width: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  answer: {
    // display: "row",
  },
  letter: {
    // marginBottom: 7,
  },
  return: {
    width: 100,
    height: 35,

    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: "auto",
  },
});
