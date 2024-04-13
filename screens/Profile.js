import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import UserCard from "../components/UserCard";
import { useNavigation } from "@react-navigation/native";
import Property1Home from "../components/Property1Home";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <UserCard />
      <View style={[styles.gallery, styles.galleryPosition]}>
        <Text style={[styles.gallery1, styles.gallery1Typo]}>Gallery</Text>
        <Image
          style={[styles.galleryChild, styles.galleryLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-2617.png")}
        />
        <Image
          style={[styles.galleryItem, styles.galleryLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-2622.png")}
        />
        <Image
          style={[styles.galleryInner, styles.galleryLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-9202.png")}
        />
      </View>
      <View style={[styles.interests, styles.galleryPosition]}>
        <Text style={[styles.interests1, styles.gallery1Typo]}>Interests</Text>
        <Image
          style={[styles.galleryChild, styles.galleryLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-2618.png")}
        />
        <Image
          style={[styles.galleryItem, styles.galleryLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-2623.png")}
        />
        <Image
          style={[styles.galleryInner, styles.galleryLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-9203.png")}
        />
        <Text style={[styles.loremIpsumDolor, styles.loremFlexBox]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
        <Text
          style={[styles.loremIpsumDolor1, styles.loremFlexBox]}
        >{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor `}</Text>
        <Text style={[styles.loremIpsumDolor2, styles.loremFlexBox]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
      </View>
      <Text style={[styles.profile1, styles.loremFlexBox]}>Profile</Text>
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  galleryPosition: {
    width: 312,
    left: 32,
    position: "absolute",
  },
  gallery1Typo: {
    textAlign: "center",
    color: Color.colorLightseagreen_100,
    fontSize: FontSize.size_base,
    top: 0,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
    position: "absolute",
  },
  galleryLayout: {
    height: 88,
    width: 91,
    top: 48,
    position: "absolute",
  },
  loremFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  settingsIconLayout: {
    height: 20,
    width: 20,
    top: 34,
    position: "absolute",
  },
  gallery1: {
    left: 127,
    width: 60,
  },
  galleryChild: {
    left: 0,
  },
  galleryItem: {
    left: 111,
  },
  galleryInner: {
    left: 221,
  },
  gallery: {
    top: 306,
    height: 136,
  },
  interests1: {
    left: 121,
    width: 71,
  },
  loremIpsumDolor: {
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_3xs,
    top: 156,
    color: Color.colorBlack,
    height: 88,
    width: 91,
    left: 0,
  },
  loremIpsumDolor1: {
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_3xs,
    top: 156,
    color: Color.colorBlack,
    height: 88,
    width: 91,
    left: 111,
  },
  loremIpsumDolor2: {
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_3xs,
    top: 156,
    color: Color.colorBlack,
    height: 88,
    width: 91,
    left: 221,
  },
  interests: {
    top: 467,
    height: 244,
  },
  profile1: {
    marginLeft: -31.5,
    top: 32,
    left: "50%",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
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
  profile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
