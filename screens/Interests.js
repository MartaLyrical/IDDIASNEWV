import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonContinue from "../components/ButtonContinue";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Interests = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.interests}>
      <Text style={[styles.interests1, styles.choose3Clr]}>Interests</Text>
      <View style={[styles.travel, styles.foodPosition1]}>
        <Image
          style={[styles.travelImageIcon, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/travel-image.png")}
        />
        <Text style={[styles.travel1, styles.art1Typo]}>Travel</Text>
      </View>
      <View style={[styles.music, styles.artPosition1]}>
        <Image
          style={[styles.travelImageIcon, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/music-image.png")}
        />
        <Text style={[styles.music1, styles.art1Typo]}>Music</Text>
      </View>
      <View style={[styles.sports, styles.artPosition]}>
        <Image
          style={[styles.travelImageIcon, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/sports-image.png")}
        />
        <Text style={[styles.sports1, styles.food1Typo]}>Sports</Text>
      </View>
      <View style={[styles.art, styles.artPosition]}>
        <Image
          style={[styles.travelImageIcon, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/art-image.png")}
        />
        <Text style={[styles.art1, styles.art1Typo]}>Art</Text>
      </View>
      <View style={[styles.food, styles.foodPosition]}>
        <Image
          style={[styles.travelImageIcon, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/food-image.png")}
        />
        <Text style={[styles.food1, styles.food1Typo]}>Food</Text>
      </View>
      <View style={[styles.technology, styles.foodPosition]}>
        <Image
          style={[styles.travelImageIcon, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/technology-image.png")}
        />
        <Text style={[styles.technology1, styles.food1Typo]}>Technology</Text>
      </View>
      <View style={[styles.cinema, styles.cinemaPosition]}>
        <Image
          style={[styles.travelImageIcon, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/cinema-image.png")}
        />
        <Text style={[styles.cinema1, styles.food1Typo]}>Cinema</Text>
      </View>
      <Image
        style={[styles.imageIcon, styles.cinemaPosition]}
        resizeMode="cover"
        source={require("../assets/image.png")}
      />
      <Text style={[styles.literature, styles.art1Typo]}>Literature</Text>
      <Image
        style={[styles.imageIcon1, styles.imageIconPosition]}
        resizeMode="cover"
        source={require("../assets/image1.png")}
      />
      <Text style={[styles.fashion, styles.designTypo]}>Fashion</Text>
      <Image
        style={[styles.imageIcon2, styles.imageIconPosition]}
        resizeMode="cover"
        source={require("../assets/image2.png")}
      />
      <Text style={[styles.design, styles.designTypo]}>Design</Text>
      <Text style={[styles.choose3, styles.art1Typo]}>Choose 3</Text>
      <ButtonContinue
        propTop={744}
        onButtonContinuePress={() => navigation.navigate("FaceRecognition")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  choose3Clr: {
    color: Color.colorBlack,
    left: "50%",
  },
  foodPosition1: {
    left: 36,
    right: 193,
  },
  imageIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  art1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  artPosition1: {
    left: 192,
    right: 37,
  },
  artPosition: {
    bottom: 497,
    top: 215,
    position: "absolute",
  },
  food1Typo: {
    top: 38,
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 24,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  foodPosition: {
    bottom: 382,
    top: 330,
    position: "absolute",
  },
  cinemaPosition: {
    bottom: 267,
    top: 445,
    position: "absolute",
  },
  imageIconPosition: {
    bottom: 152,
    top: 560,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  designTypo: {
    top: 598,
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 24,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  interests1: {
    marginLeft: -42.5,
    top: 32,
    lineHeight: 30,
    textAlign: "center",
    width: 86,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  travelImageIcon: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
    maxWidth: "100%",
  },
  travel1: {
    left: 43,
    width: 61,
    color: Color.colorWhite,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    top: 35,
  },
  travel: {
    bottom: 612,
    top: 100,
    position: "absolute",
  },
  music1: {
    left: 47,
    color: Color.colorWhite,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    top: 35,
  },
  music: {
    bottom: 612,
    top: 100,
    position: "absolute",
  },
  sports1: {
    left: 40,
  },
  sports: {
    left: 36,
    right: 193,
  },
  art1: {
    left: 58,
    width: 30,
    color: Color.colorWhite,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    top: 35,
  },
  art: {
    left: 192,
    right: 37,
  },
  food1: {
    left: 49,
  },
  food: {
    left: 36,
    right: 193,
  },
  technology1: {
    left: 16,
  },
  technology: {
    left: 192,
    right: 37,
  },
  cinema1: {
    left: 35,
  },
  cinema: {
    left: 36,
    right: 193,
  },
  imageIcon: {
    left: 192,
    right: 37,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  literature: {
    top: 483,
    left: 217,
    width: 97,
    color: Color.colorWhite,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  imageIcon1: {
    right: 192,
    left: 37,
  },
  fashion: {
    left: 72,
  },
  imageIcon2: {
    right: 36,
    left: 193,
  },
  design: {
    left: 232,
  },
  choose3: {
    marginLeft: -41.5,
    top: 692,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    left: "50%",
    textAlign: "left",
  },
  interests: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Interests;
