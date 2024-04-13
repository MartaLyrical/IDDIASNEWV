import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SearchFaceScan = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.searchFaceScan}
      onPress={() => navigation.navigate("SearchFace")}
    >
      <Image
        style={styles.nliaDiasIcon}
        resizeMode="cover"
        source={require("../assets/nliadias.png")}
      />
      <Image
        style={styles.subtractionIcon}
        resizeMode="cover"
        source={require("../assets/subtraction.png")}
      />
      <View style={styles.faceScanSquare} />
      <Text style={styles.faceScan}>Face Scan</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  nliaDiasIcon: {
    top: -130,
    left: -339,
    width: 1150,
    height: 1890,
    position: "absolute",
  },
  subtractionIcon: {
    top: 0,
    left: 0,
    width: 375,
    position: "absolute",
    height: 812,
  },
  faceScanSquare: {
    top: 115,
    left: 34,
    borderRadius: Border.br_10xs,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 307,
    height: 387,
    position: "absolute",
  },
  faceScan: {
    marginLeft: -47.5,
    top: 644,
    left: "50%",
    fontSize: FontSize.size_xl,
    letterSpacing: -0.3,
    fontWeight: "600",
    fontFamily: FontFamily.quicksandSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    width: 96,
    position: "absolute",
  },
  searchFaceScan: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default SearchFaceScan;
