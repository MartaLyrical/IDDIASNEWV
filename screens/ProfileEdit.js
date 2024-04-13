import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EditInfoForm from "../components/EditInfoForm";
import AvatarImage from "../components/AvatarImage";
import ButtonContinue from "../components/ButtonContinue";
import Property1Home from "../components/Property1Home";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ProfileEdit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileEdit}>
      <EditInfoForm />
      <View style={styles.hero}>
        <AvatarImage
          avatarImageAvatar={require("../assets/profile1.png")}
          avatarIconPosition="absolute"
          avatarIconTop={0}
          avatarIconLeft={0}
          avatarIconWidth={58}
        />
        <View style={styles.name}>
          <Text style={styles.johnDoe}>John Doe</Text>
          <Text style={[styles.editName, styles.editClr]}>Edit Name</Text>
        </View>
        <Text style={[styles.editPhoto, styles.editClr]}>Edit Photo</Text>
      </View>
      <ButtonContinue
        propTop={922}
        onButtonContinuePress={() => navigation.navigate("FaceRecognition")}
      />
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
      <View style={styles.rectangleHeader} />
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
      <Text style={[styles.profile, styles.editClr]}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  editClr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  settingsIconLayout: {
    height: 20,
    width: 20,
    top: 34,
    position: "absolute",
  },
  johnDoe: {
    fontSize: FontSize.size_base,
    color: Color.colorLightseagreen_100,
    textAlign: "left",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  editName: {
    top: 30,
    left: 12,
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
  },
  name: {
    top: 3,
    left: 73,
    width: 76,
    height: 42,
    position: "absolute",
  },
  editPhoto: {
    top: 62,
    left: 8,
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
  },
  hero: {
    top: 100,
    left: 32,
    width: 149,
    height: 74,
    position: "absolute",
  },
  rectangleHeader: {
    width: 375,
    height: 64,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
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
    marginLeft: -31.5,
    top: 32,
    left: "50%",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
  },
  profileEdit: {
    flex: 1,
    height: 1088,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default ProfileEdit;
