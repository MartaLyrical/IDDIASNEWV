import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Home from "../components/Property1Home";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Search = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.search}>
      <Text style={styles.searchSimiliarity}>{`Search Similiarity `}</Text>
      <Pressable
        style={[styles.faceButton, styles.faceLayout]}
        onPress={() => navigation.navigate("SearchFaceScan")}
      >
        <View style={[styles.faceButtonBk, styles.faceLayout]} />
        <Text style={[styles.face, styles.faceTypo]}>Face</Text>
      </Pressable>
      <Pressable
        style={[styles.nameButton, styles.faceLayout]}
        onPress={() => navigation.navigate("SearchName")}
      >
        <View style={[styles.faceButtonBk, styles.faceLayout]} />
        <Text style={[styles.name, styles.faceTypo]}>Name</Text>
      </Pressable>
      <Pressable
        style={[styles.personalityButton, styles.faceLayout]}
        onPress={() => navigation.navigate("SearchPersonality")}
      >
        <View style={[styles.faceButtonBk, styles.faceLayout]} />
        <Text style={[styles.personality, styles.faceTypo]}>Personality</Text>
      </Pressable>
      <Pressable
        style={[styles.interestsButton, styles.faceLayout]}
        onPress={() => navigation.navigate("SearchInterests")}
      >
        <View style={[styles.faceButtonBk, styles.faceLayout]} />
        <Text style={[styles.interests, styles.faceTypo]}>Interests</Text>
      </Pressable>
      <Pressable
        style={[styles.professionButton, styles.faceLayout]}
        onPress={() => navigation.navigate("SearchProfession")}
      >
        <View style={[styles.faceButtonBk, styles.faceLayout]} />
        <Text style={[styles.profession, styles.faceTypo]}>Profession</Text>
      </Pressable>
      <Pressable
        style={styles.notificationsActive}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/notifications-active.png")}
        />
      </Pressable>
      <Property1Home
        frameMenuBar={require("../assets/frame-menu-bar1.png")}
        profileIcon={require("../assets/profileicon1.png")}
        searchIcon={require("../assets/searchicon1.png")}
        groupIcon={require("../assets/groupicon.png")}
        chatIcon={require("../assets/chaticon.png")}
        homeIcon={require("../assets/homeicon.png")}
        showProfileButton
        property1HomePosition="absolute"
        property1HomeTop={709}
        property1HomeLeft={1}
        ellipseMenuIconLeft={229}
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
        searchButtonTop={20}
        searchButtonLeft={229}
        searchButtonWidth={46}
        searchButtonHeight={72}
        searchTop={54}
        searchFontSize={14}
        searchColor="#000"
        searchIconHeight="33.33%"
        searchIconWidth="54.13%"
        searchIconRight="21.96%"
        searchIconBottom="66.67%"
        searchIconLeft="23.91%"
        groupButtonTop={46}
        groupButtonLeft={162}
        groupButtonWidth={36}
        groupButtonHeight={43}
        groupTop={28}
        groupLeft={1}
        groupFontSize={12}
        groupColor="#fff"
        groupIconHeight="55.81%"
        groupIconWidth="100%"
        groupIconRight="0%"
        groupIconBottom="44.19%"
        groupIconLeft="0%"
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
  faceLayout: {
    height: 70,
    width: 302,
    position: "absolute",
  },
  faceTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_3xl,
    top: 23,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  searchSimiliarity: {
    marginLeft: -88.5,
    top: 32,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  faceButtonBk: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightseagreen_100,
  },
  face: {
    marginLeft: -30,
  },
  faceButton: {
    top: 92,
    left: 37,
    width: 302,
  },
  name: {
    marginLeft: -32,
  },
  nameButton: {
    top: 218,
    left: 37,
    width: 302,
  },
  personality: {
    marginLeft: -60,
  },
  personalityButton: {
    top: 344,
    left: 37,
    width: 302,
  },
  interests: {
    marginLeft: -47,
  },
  interestsButton: {
    top: 470,
    left: 32,
  },
  profession: {
    marginLeft: -55,
  },
  professionButton: {
    top: 596,
    left: 34,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  notificationsActive: {
    left: 324,
    top: 34,
    width: 20,
    height: 20,
    position: "absolute",
  },
  search: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default Search;
