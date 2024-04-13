import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Home from "../components/Property1Home";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SettingsHelp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingsHelp}>
      <Text
        style={[styles.gettingStartedUsingIddias, styles.helpTypo]}
      >{`Getting started

Using IDDIAS

Terms & Conditions

Account Questions

Troubleshooting`}</Text>
      <Image
        style={[styles.arrowForwardIcon, styles.arrowIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrowforward.png")}
      />
      <Image
        style={[styles.arrowForwardIcon1, styles.arrowIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrowforward.png")}
      />
      <Image
        style={[styles.arrowForwardIcon2, styles.arrowIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrowforward.png")}
      />
      <Image
        style={[styles.arrowForwardIcon3, styles.arrowIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrowforward.png")}
      />
      <Text style={[styles.help, styles.helpTypo]}>Help</Text>
      <Pressable
        style={[styles.settingsIcon, styles.settingsIconLayout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/settings-icon.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.notificationsActive, styles.settingsIconLayout]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/notifications-active.png")}
        />
      </Pressable>
      <Pressable
        style={styles.backArrow}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/back-arrow.png")}
        />
      </Pressable>
      <Property1Home
        frameMenuBar={require("../assets/frame-menu-bar.png")}
        profileIcon={require("../assets/profileicon.png")}
        searchIcon={require("../assets/searchicon.png")}
        groupIcon={require("../assets/groupicon.png")}
        chatIcon={require("../assets/chaticon.png")}
        homeIcon={require("../assets/homeicon.png")}
        showProfileButton
        property1HomePosition="absolute"
        property1HomeTop={711}
        property1HomeLeft={0}
        ellipseMenuIconLeft={302}
        profileButtonTop={20}
        profileButtonLeft={303}
        profileButtonWidth={43}
        profileButtonHeight={72}
        profileTop={54}
        profileFontSize={14}
        profileColor="#000"
        profileIconHeight="33.33%"
        profileIconWidth="55.81%"
        profileIconRight="20.93%"
        profileIconBottom="66.67%"
        profileIconLeft="23.26%"
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
        onProfileButtonPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  helpTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  arrowIconLayout: {
    height: 14,
    width: 8,
    left: 330,
    position: "absolute",
  },
  settingsIconLayout: {
    height: 20,
    width: 20,
    top: 34,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  gettingStartedUsingIddias: {
    top: 104,
    left: 36,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    width: 308,
  },
  arrowForwardIcon: {
    top: 109,
  },
  arrowForwardIcon1: {
    top: 155,
  },
  arrowForwardIcon2: {
    top: 202,
  },
  arrowForwardIcon3: {
    top: 248,
  },
  help: {
    marginLeft: -22.5,
    top: 32,
    left: "50%",
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    textAlign: "center",
  },
  settingsIcon: {
    left: 324,
  },
  notificationsActive: {
    left: 284,
  },
  icon2: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
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
  settingsHelp: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SettingsHelp;
