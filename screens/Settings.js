import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Default1 from "../components/Property1Default1";
import LanguageForm from "../components/LanguageForm";
import Property1Default from "../components/Property1Default";
import HelpContainer from "../components/HelpContainer";
import RecentSearchesContainer from "../components/RecentSearchesContainer";
import Property1Home from "../components/Property1Home";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <Property1Default1
        property1DefaultPosition="absolute"
        property1DefaultMarginLeft={-150.5}
        property1DefaultTop={100}
        property1DefaultLeft="50%"
        property1DefaultHeight={65}
        notificationsTop="40%"
      />
      <LanguageForm
        onLanguagePress={() => navigation.navigate("SettingsLanguage")}
      />
      <Pressable
        style={[styles.deleteAccount, styles.deleteLayout]}
        onPress={() => navigation.navigate("SettingsDelete")}
      >
        <View style={[styles.deleteRectangle, styles.deleteLayout]} />
        <Text style={[styles.deleteAccount1, styles.logOut1Typo]}>
          Delete Account
        </Text>
        <Image
          style={styles.iconAwesomeTrashAlt}
          resizeMode="cover"
          source={require("../assets/icon-awesometrashalt.png")}
        />
      </Pressable>
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultTop={191}
        property1DefaultLeft={37}
        property1DefaultWidth={302}
        property1DefaultHeight={65}
        soundTop="38.46%"
      />
      <Pressable
        style={[styles.logOut, styles.deleteLayout]}
        onPress={() => navigation.navigate("SettingsLogOut")}
      >
        <View style={[styles.deleteRectangle, styles.deleteLayout]} />
        <Text style={[styles.logOut1, styles.logOut1Typo]}>Log Out</Text>
        <Image
          style={styles.iconOpenAccountLogout}
          resizeMode="cover"
          source={require("../assets/icon-openaccountlogout.png")}
        />
      </Pressable>
      <HelpContainer onHelpPress={() => navigation.navigate("SettingsHelp")} />
      <RecentSearchesContainer
        onRecentSearchesPress={() => navigation.navigate("ProfileHistory")}
      />
      <Text style={[styles.profile, styles.logOut1Typo]}>Profile</Text>
      <Pressable
        style={[styles.settingsIcon, styles.settingsIconLayout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/settings-icon.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.notificationsActive, styles.settingsIconLayout]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/notifications-active.png")}
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
  deleteLayout: {
    height: 65,
    width: 302,
    position: "absolute",
  },
  logOut1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  settingsIconLayout: {
    height: 20,
    width: 20,
    top: 34,
    position: "absolute",
  },
  deleteRectangle: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightseagreen_200,
  },
  deleteAccount1: {
    left: 51,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    top: 26,
  },
  iconAwesomeTrashAlt: {
    top: 25,
    left: 25,
    width: 14,
    height: 16,
    position: "absolute",
  },
  deleteAccount: {
    top: 553,
    left: 37,
    width: 302,
  },
  logOut1: {
    left: 52,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    top: 26,
  },
  iconOpenAccountLogout: {
    left: 24,
    width: 16,
    height: 14,
    top: 26,
    position: "absolute",
  },
  logOut: {
    top: 463,
    left: 37,
    width: 302,
  },
  profile: {
    marginLeft: -31.5,
    top: 32,
    left: "50%",
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  settingsIcon: {
    left: 324,
  },
  notificationsActive: {
    left: 284,
  },
  settings: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Settings;
