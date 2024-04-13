import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PersonCardForm3 from "../components/PersonCardForm3";
import PersonCardForm from "../components/PersonCardForm";
import Property1Home from "../components/Property1Home";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const ProfileConnections = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileConnections}>
      <View style={[styles.scrollGroup6, styles.personsLayout]}>
        <View style={[styles.persons, styles.personsLayout]}>
          <PersonCardForm3 />
          <PersonCardForm rectangleIconTop={574} />
        </View>
      </View>
      <Text style={[styles.connections, styles.profileTypo]}>Connections</Text>
      <View style={styles.line} />
      <Pressable
        style={[styles.pending, styles.pendingPosition]}
        onPress={() => navigation.navigate("ProfileConnections1")}
      >
        <Text style={[styles.pending1, styles.profileTypo]}>Pending</Text>
      </Pressable>
      <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
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
  personsLayout: {
    height: 1128,
    width: 255,
    position: "absolute",
  },
  profileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  pendingPosition: {
    top: 100,
    position: "absolute",
  },
  settingsIconLayout: {
    height: 20,
    width: 20,
    top: 34,
    position: "absolute",
  },
  persons: {
    top: 0,
    left: 0,
  },
  scrollGroup6: {
    top: 159,
    left: 64,
  },
  connections: {
    left: 58,
    color: Color.colorLightseagreen_200,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    top: 100,
    position: "absolute",
  },
  line: {
    top: 124,
    right: 204,
    bottom: 686,
    left: 50,
    borderStyle: "solid",
    borderColor: Color.colorLightseagreen_200,
    borderTopWidth: 2,
    position: "absolute",
  },
  pending1: {
    color: Color.colorLightseagreen_200,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  pending: {
    left: 230,
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
  profileConnections: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfileConnections;
