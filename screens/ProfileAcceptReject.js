import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContainerHero from "../components/ContainerHero";
import GalleryContainer from "../components/GalleryContainer";
import InterestsForm from "../components/InterestsForm";
import Property1Home from "../components/Property1Home";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ProfileAcceptReject = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileAcceptReject}>
      <ContainerHero />
      <GalleryContainer />
      <InterestsForm />
      <Image
        style={styles.chatIcon}
        resizeMode="cover"
        source={require("../assets/chat-icon.png")}
      />
      <Pressable
        style={styles.acceptButton}
        onPress={() => navigation.navigate("ProfileConnected1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/accept-button.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.declineButtom, styles.declineButtomLayout]}
        onPress={() => navigation.navigate("ProfileConnections1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/decline-buttom.png")}
        />
      </Pressable>
      <Text style={styles.profile}>Profile</Text>
      <Pressable
        style={[styles.notificationsActive, styles.declineButtomLayout]}
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
  declineButtomLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  chatIcon: {
    top: 101,
    left: 228,
    width: 28,
    height: 24,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  acceptButton: {
    left: 314,
    top: 104,
    width: 18,
    height: 18,
    position: "absolute",
  },
  declineButtom: {
    left: 277,
    top: 103,
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
  notificationsActive: {
    left: 324,
    top: 34,
  },
  profileAcceptReject: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfileAcceptReject;
