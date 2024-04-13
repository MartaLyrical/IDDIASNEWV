import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import FormLabelContainer from "../components/FormLabelContainer";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const GroupCreationNaming = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.groupCreationNaming, styles.iconLayout1]}>
      <FormLabelContainer />
      <Image
        style={[styles.cameraIcon, styles.cameraIconPosition]}
        resizeMode="cover"
        source={require("../assets/camera.png")}
      />
      <Text style={[styles.groupSubject, styles.members2OfTypo]}>
        Group Subject
      </Text>
      <View style={[styles.line, styles.lineLayout]} />
      <View style={[styles.line1, styles.lineLayout]} />
      <Text style={styles.pleaseProvideA}>{`Please provide a group subject
and optinal group icon`}</Text>
      <View style={[styles.membersRectangle, styles.cameraIconPosition]} />
      <Text style={[styles.members2Of, styles.members2OfTypo]}>
        Members: 2 of 50
      </Text>
      <Text style={[styles.nliaBarroso, styles.nliaFlexBox]}>{`Nélia
Barroso`}</Text>
      <Image
        style={[styles.profileIcon, styles.profileIconLayout]}
        resizeMode="cover"
        source={require("../assets/profile2.png")}
      />
      <Image
        style={[styles.iconClose, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon-close.png")}
      />
      <Text style={[styles.nliaMatos, styles.nliaFlexBox]}>{`Nélia
Matos`}</Text>
      <Image
        style={[styles.profileIcon1, styles.profileIconLayout]}
        resizeMode="cover"
        source={require("../assets/profile3.png")}
      />
      <Image
        style={[styles.iconClose1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon-close.png")}
      />
      <Text style={[styles.newGroup, styles.create1Typo]}>New Group</Text>
      <Pressable
        style={styles.createPosition}
        onPress={() => navigation.navigate("GroupFeed1")}
      >
        <Text style={[styles.create1, styles.create1Typo]}>Create</Text>
      </Pressable>
      <Pressable
        style={styles.backArrow}
        onPress={() => navigation.navigate("GroupCreationMembers")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/back-arrow.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  cameraIconPosition: {
    left: 36,
    position: "absolute",
  },
  members2OfTypo: {
    textAlign: "left",
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  lineLayout: {
    height: 2,
    width: 226,
    borderTopWidth: 2,
    borderColor: Color.colorDimgray,
    borderStyle: "solid",
    left: 113,
    position: "absolute",
  },
  nliaFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  profileIconLayout: {
    height: 60,
    width: 60,
    top: 297,
    position: "absolute",
  },
  iconLayout: {
    height: 12,
    width: 12,
    top: 297,
    position: "absolute",
  },
  create1Typo: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
  },
  cameraIcon: {
    top: 95,
    width: 68,
    height: 68,
  },
  groupSubject: {
    top: 119,
    color: Color.colorBlack,
    left: 114,
    textAlign: "left",
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_base,
  },
  line: {
    top: 111,
  },
  line1: {
    top: 145,
  },
  pleaseProvideA: {
    top: 154,
    fontWeight: "300",
    fontFamily: FontFamily.quicksandLight,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    left: 114,
    position: "absolute",
  },
  membersRectangle: {
    top: 216,
    backgroundColor: Color.colorLightseagreen_200,
    width: 302,
    height: 45,
  },
  members2Of: {
    top: 229,
    left: 51,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_base,
  },
  nliaBarroso: {
    marginLeft: -63.5,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    top: 364,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
    left: "50%",
  },
  profileIcon: {
    left: 120,
  },
  iconClose: {
    left: 166,
  },
  nliaMatos: {
    left: 50,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    top: 364,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  profileIcon1: {
    left: 40,
  },
  iconClose1: {
    left: 84,
  },
  newGroup: {
    marginLeft: -53.5,
    fontSize: FontSize.size_xl,
    top: 32,
    left: "50%",
    position: "absolute",
    textAlign: "center",
    color: Color.colorBlack,
  },
  create1: {
    marginLeft: 97.5,
    fontSize: FontSize.size_lg,
    color: Color.colorLightseagreen_200,
    textAlign: "right",
  },
  createPosition: {
    top: 32,
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  backArrow: {
    left: "8.8%",
    top: "4.19%",
    right: "85.09%",
    bottom: "93.35%",
    width: "6.11%",
    height: "2.46%",
    position: "absolute",
  },
  groupCreationNaming: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
  },
});

export default GroupCreationNaming;
