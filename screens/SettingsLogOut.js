import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Default1 from "../components/Property1Default1";
import LanguageForm from "../components/LanguageForm";
import DeleteAccountForm from "../components/DeleteAccountForm";
import Property1Default from "../components/Property1Default";
import LogOutContainer from "../components/LogOutContainer";
import HelpContainer from "../components/HelpContainer";
import RecentSearchesContainer from "../components/RecentSearchesContainer";
import Property1Home from "../components/Property1Home";
import PopOver from "../components/PopOver";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SettingsLogOut = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settingsLogOut, styles.blurRectangleLayout]}>
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
      <DeleteAccountForm />
      <Property1Default
        property1DefaultPosition="absolute"
        property1DefaultTop={191}
        property1DefaultLeft={37}
        property1DefaultWidth={302}
        property1DefaultHeight={65}
        soundTop="38.46%"
      />
      <LogOutContainer />
      <HelpContainer onHelpPress={() => navigation.navigate("SettingsHelp")} />
      <RecentSearchesContainer
        onRecentSearchesPress={() => navigation.navigate("ProfileHistory")}
      />
      <Text style={styles.profile}>Profile</Text>
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
      <View style={[styles.blurRectangle, styles.blurRectangleLayout]} />
      <PopOver
        popOverPosition="absolute"
        popOverTop={318}
        popOverLeft={40}
        onBackPress={() => navigation.navigate("Settings")}
        onYesPress={() => navigation.navigate("Splash")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blurRectangleLayout: {
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  settingsIconLayout: {
    height: 20,
    width: 20,
    top: 34,
    position: "absolute",
  },
  profile: {
    marginLeft: -31.5,
    top: 32,
    left: "50%",
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
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
  blurRectangle: {
    top: 0,
    left: 0,
    width: 375,
    opacity: 0.6,
    position: "absolute",
  },
  settingsLogOut: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default SettingsLogOut;
