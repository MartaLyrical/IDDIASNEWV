import * as React from "react";
import { StyleSheet, View } from "react-native";
import NameContainer from "./NameContainer";

const PersonCardForm2 = () => {
  return (
    <View style={styles.persons}>
      <NameContainer
        personName="Mike Fuller"
        profileImageId={require("../assets/profile-circle.png")}
      />
      <NameContainer
        personName="John Doe"
        profileImageId={require("../assets/profile-circle1.png")}
        propTop={67}
      />
      <NameContainer
        personName="Jason Caleb"
        profileImageId={require("../assets/profile-circle2.png")}
        propTop={134}
      />
      <NameContainer
        personName="Family Group"
        profileImageId={require("../assets/profile-circle3.png")}
        propTop={201}
      />
      <NameContainer
        personName="Nelia Campos"
        profileImageId={require("../assets/profile-circle4.png")}
        propTop={268}
      />
      <NameContainer
        personName="Julia Mendes"
        profileImageId={require("../assets/profile-circle5.png")}
        propTop={335}
      />
      <NameContainer
        personName="Rui Patalim"
        profileImageId={require("../assets/profile-circle6.png")}
        propTop={402}
      />
      <NameContainer
        personName="Sonia Ferreira"
        profileImageId={require("../assets/profile-circle7.png")}
        propTop={469}
      />
      <NameContainer
        personName="Lúcia Montes"
        profileImageId={require("../assets/profile-circle8.png")}
        propTop={536}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  persons: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 245,
    height: 588,
  },
});

export default PersonCardForm2;
