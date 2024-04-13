import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import EditContainer from "../components/EditContainer";
import { useNavigation } from "@react-navigation/native";
import Property1Home from "../components/Property1Home";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const GroupFeed = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupFeed}>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputRectangle, styles.sameNamesIconPosition]} />
      </View>
      <EditContainer
        featureImageUrl="Same Faces"
        faceImageUrl={require("../assets/same-faces.png")}
      />
      <EditContainer
        featureImageUrl="Same Jobs"
        faceImageUrl={require("../assets/same-jobs.png")}
        loremIpsumDolorTop={278}
        loremIpsumDolorLeft={37}
        propTextAlign="left"
      />
      <Pressable
        style={styles.name}
        onPress={() => navigation.navigate("GroupFeed1")}
      >
        <Text style={[styles.sameNames, styles.groupTypo]}>Same Names</Text>
        <Image
          style={[styles.sameNamesIcon, styles.sameNamesIconPosition]}
          resizeMode="cover"
          source={require("../assets/same-names.png")}
        />
        <Text style={[styles.loremIpsumDolor, styles.loremIpsumDolorPosition]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
      </Pressable>
      <EditContainer
        featureImageUrl="Same Personality"
        faceImageUrl={require("../assets/same-personality.png")}
        loremIpsumDolorTop={524}
        loremIpsumDolorLeft={37}
        propTextAlign="left"
      />
      <EditContainer
        featureImageUrl="Same Interests"
        faceImageUrl={require("../assets/same-interests.png")}
        loremIpsumDolorTop={647}
        loremIpsumDolorLeft={37}
        propTextAlign="center"
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("GroupCreationMembers")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.edit, styles.editPosition]}
        onPress={() => navigation.navigate("GroupFeedEdit")}
      >
        <Text style={styles.edit1}>Edit</Text>
      </Pressable>
      <Text style={[styles.group, styles.groupTypo]}>Group</Text>
      <Pressable
        style={[styles.notificationsActive, styles.loremIpsumDolorPosition]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/notifications-active.png")}
        />
      </Pressable>
      <Property1Home
        frameMenuBar={require("../assets/frame-menu-bar2.png")}
        profileIcon={require("../assets/profileicon1.png")}
        searchIcon={require("../assets/searchicon.png")}
        groupIcon={require("../assets/groupicon1.png")}
        chatIcon={require("../assets/chaticon.png")}
        homeIcon={require("../assets/homeicon.png")}
        showProfileButton
        property1HomePosition="absolute"
        property1HomeTop={709}
        property1HomeLeft={0}
        ellipseMenuIconLeft={158}
        profileButtonTop={46}
        profileButtonLeft={306}
        profileButtonWidth={37}
        profileButtonHeight={43}
        profileTop={28}
        profileFontSize={12}
        profileColor="#fff"
        profileIconHeight="55.81%"
        profileIconWidth="64.86%"
        profileIconRight="16.22%"
        profileIconBottom="44.19%"
        profileIconLeft="18.92%"
        searchButtonTop={46}
        searchButtonLeft={232}
        searchButtonWidth={40}
        searchButtonHeight={43}
        searchTop={28}
        searchFontSize={12}
        searchColor="#fff"
        searchIconHeight="55.81%"
        searchIconWidth="62.25%"
        searchIconRight="17.75%"
        searchIconBottom="44.19%"
        searchIconLeft="20%"
        groupButtonTop={20}
        groupButtonLeft={160}
        groupButtonWidth={41}
        groupButtonHeight={72}
        groupTop={54}
        groupLeft={0}
        groupFontSize={14}
        groupColor="#000"
        groupIconHeight="33.33%"
        groupIconWidth="87.8%"
        groupIconRight="4.88%"
        groupIconBottom="66.67%"
        groupIconLeft="7.32%"
        chatButtonTop={46}
        chatButtonLeft={101}
        chatButtonWidth={27}
        chatButtonHeight={43}
        chatTop={28}
        chatFontSize={12}
        chatColor="#fff"
        chatIconHeight="55.81%"
        chatIconWidth="92.22%"
        chatIconRight="3.7%"
        chatIconBottom="44.19%"
        chatIconLeft="4.07%"
        homeButtonTop={46}
        homeButtonLeft={33}
        homeButtonWidth={34}
        homeButtonHeight={43}
        homeTop={28}
        homeFontSize={12}
        homeColor="#fff"
        homeIconHeight="55.81%"
        homeIconWidth="65%"
        homeIconRight="17.35%"
        homeIconBottom="44.19%"
        homeIconLeft="17.65%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    height: 34,
    width: 302,
  },
  sameNamesIconPosition: {
    left: 0,
    position: "absolute",
  },
  groupTypo: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
    position: "absolute",
  },
  loremIpsumDolorPosition: {
    top: 34,
    position: "absolute",
  },
  editPosition: {
    left: 36,
    position: "absolute",
  },
  inputRectangle: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    top: 0,
    height: 34,
    width: 302,
  },
  input: {
    top: 113,
    left: 36,
    position: "absolute",
  },
  sameNames: {
    fontSize: FontSize.size_base,
    color: Color.colorLightseagreen_100,
    textAlign: "left",
    left: 117,
    top: 0,
  },
  sameNamesIcon: {
    top: 5,
    width: 88,
    height: 88,
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.quicksandRegular,
    width: 185,
    height: 59,
    color: Color.colorBlack,
    textAlign: "left",
    left: 117,
  },
  name: {
    top: 401,
    left: 37,
    height: 93,
    width: 302,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  pressable: {
    left: 320,
    top: 75,
    right: 31,
    bottom: 713,
    position: "absolute",
  },
  edit1: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.quicksandSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  edit: {
    top: 76,
  },
  group: {
    marginLeft: -29.5,
    top: 32,
    left: "50%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorBlack,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  notificationsActive: {
    left: 324,
    width: 20,
    height: 20,
  },
  groupFeed: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default GroupFeed;
