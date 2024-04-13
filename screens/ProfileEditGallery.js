import * as React from "react";
import { Text, StyleSheet, Pressable, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RecentGalleryContainer from "../components/RecentGalleryContainer";
import Property1Home from "../components/Property1Home";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ProfileEditGallery = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileEditGallery}>
      <RecentGalleryContainer />
      <Pressable
        style={[styles.cancel, styles.sendPosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={[styles.cancel1, styles.cancel1Clr]}>Cancel</Text>
      </Pressable>
      <Pressable
        style={[styles.send, styles.sendPosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={[styles.send1, styles.send1Typo]}>Send</Text>
      </Pressable>
      <Image
        style={styles.galleryImageIcon}
        resizeMode="cover"
        source={require("../assets/gallery-image.png")}
      />
      <Text style={[styles.profile, styles.cancel1Clr]}>Profile</Text>
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
  sendPosition: {
    top: 32,
    position: "absolute",
  },
  cancel1Clr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  send1Typo: {
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  cancel1: {
    textAlign: "left",
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  cancel: {
    left: 32,
  },
  send1: {
    color: Color.colorLightseagreen_200,
    textAlign: "left",
  },
  send: {
    left: 306,
  },
  galleryImageIcon: {
    top: 106,
    width: 309,
    height: 150,
    left: 32,
    position: "absolute",
  },
  profile: {
    marginLeft: -31.5,
    left: "50%",
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    textAlign: "left",
    top: 32,
    position: "absolute",
  },
  profileEditGallery: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ProfileEditGallery;
