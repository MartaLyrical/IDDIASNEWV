import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import FilteredPersonsContainer from "../components/FilteredPersonsContainer";
import { useNavigation } from "@react-navigation/native";
import Property1Home from "../components/Property1Home";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Chat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chat}>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputRectangle, styles.inputLayout]} />
      </View>
      <FilteredPersonsContainer
        imageId={require("../assets/profile-circle.png")}
        imageDescription={require("../assets/profile-circle1.png")}
        imageDimensions={require("../assets/profile-circle2.png")}
        imageDimensionsText={require("../assets/profile-circle3.png")}
        imageSize={require("../assets/profile-circle4.png")}
        imageCode={require("../assets/profile-circle5.png")}
        imageDimensionsText2={require("../assets/profile-circle6.png")}
        imageIdentifier={require("../assets/profile-circle7.png")}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("ChatNewChat")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/.png")}
        />
      </Pressable>
      <Pressable
        style={styles.edit}
        onPress={() => navigation.navigate("ChatEdit")}
      >
        <Text style={styles.edit1}>Edit</Text>
      </Pressable>
      <Text style={styles.chat1}>Chat</Text>
      <Pressable
        style={styles.notificationsActive}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/notifications-active.png")}
        />
      </Pressable>
      <Property1Home
        frameMenuBar={require("../assets/frame-menu-bar3.png")}
        profileIcon={require("../assets/profileicon1.png")}
        searchIcon={require("../assets/searchicon.png")}
        groupIcon={require("../assets/groupicon.png")}
        chatIcon={require("../assets/chaticon1.png")}
        homeIcon={require("../assets/homeicon.png")}
        showProfileButton
        property1HomePosition="absolute"
        property1HomeTop={709}
        property1HomeLeft={0}
        ellipseMenuIconLeft={92}
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
        chatButtonTop={20}
        chatButtonLeft={98}
        chatButtonWidth={32}
        chatButtonHeight={72}
        chatTop={54}
        chatFontSize={14}
        chatColor="#000"
        chatIconHeight="33.33%"
        chatIconWidth="77.81%"
        chatIconRight="9.38%"
        chatIconBottom="66.67%"
        chatIconLeft="12.81%"
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
    height: 48,
    width: 302,
    position: "absolute",
  },
  inputRectangle: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
  },
  input: {
    top: 119,
    left: 36,
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
    textAlign: "left",
    color: Color.colorBlack,
  },
  edit: {
    top: 76,
    left: 36,
    position: "absolute",
  },
  chat1: {
    marginLeft: -22.5,
    top: 32,
    left: "50%",
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  icon1: {
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
  chat: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Chat;
