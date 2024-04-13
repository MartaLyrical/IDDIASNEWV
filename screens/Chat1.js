import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContainerMessageForm from "../components/ContainerMessageForm";
import ContainerMessageForm1 from "../components/ContainerMessageForm1";
import FormContainer from "../components/FormContainer";
import ContainerInput from "../components/ContainerInput";
import Property1Home from "../components/Property1Home";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Chat1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chat1}>
      <View style={styles.chat}>
        <ContainerMessageForm />
        <ContainerMessageForm1 />
        <FormContainer />
        <Text style={[styles.monday1040Am, styles.johnDoeTypo]}>
          Monday, 10:40 am
        </Text>
        <ContainerInput />
        <ContainerMessageForm sedUtPerspiciatisTop={448} />
      </View>
      <Pressable
        style={styles.iconVideo}
        onPress={() => navigation.navigate("ChatVdeoCall")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/icon-video.png")}
        />
      </Pressable>
      <Text style={[styles.johnDoe, styles.johnDoeTypo]}>John Doe</Text>
      <Pressable
        style={styles.backArrow}
        onPress={() => navigation.navigate("Chat")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/back-arrow.png")}
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
        onChatButtonPress={() => navigation.navigate("Chat")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  johnDoeTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  monday1040Am: {
    top: 248,
    left: 123,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.arialMT,
  },
  chat: {
    top: 112,
    left: 0,
    width: 375,
    height: 629,
    position: "absolute",
  },
  iconVideo: {
    left: 319,
    top: 36,
    right: 32,
    bottom: 760,
    position: "absolute",
  },
  johnDoe: {
    marginLeft: -45.5,
    top: 32,
    left: "50%",
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontFamily: FontFamily.quicksandBold,
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
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
  chat1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Chat1;
