import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import Property1Home from "../components/Property1Home";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={styles.scrollGroupHome}>
        <View style={[styles.posts, styles.postsLayout]}>
          <Text style={styles.loremTypo}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor #incididunt ero labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco poriti
            laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Image
            style={[styles.imageHome1Icon, styles.postsLayout]}
            resizeMode="cover"
            source={require("../assets/image-home1.png")}
          />
          <View style={[styles.title, styles.postsLayout]}>
            <Text style={[styles.motivationalQuiz, styles.home1Typo]}>
              Motivational Quiz
            </Text>
            <Text style={styles.hAgo}>1h ago</Text>
          </View>
        </View>
        <View style={[styles.posts1, styles.postsLayout]}>
          <Text style={[styles.loremIpsumDolor1, styles.loremTypo]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor #incididunt ero labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco poriti
            laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Image
            style={[styles.imageHome1Icon, styles.postsLayout]}
            resizeMode="cover"
            source={require("../assets/image-home.png")}
          />
          <View style={[styles.title, styles.postsLayout]}>
            <Text style={[styles.motivationalQuiz, styles.home1Typo]}>
              5 Things about your personality
            </Text>
            <Text style={styles.hAgo}>1h ago</Text>
          </View>
        </View>
      </View>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputLayout]} />
      </View>
      <Property1Home
        frameMenuBar={require("../assets/frame-menu-bar4.png")}
        profileIcon={require("../assets/profileicon1.png")}
        searchIcon={require("../assets/searchicon.png")}
        groupIcon={require("../assets/groupicon.png")}
        chatIcon={require("../assets/chaticon.png")}
        homeIcon={require("../assets/homeicon1.png")}
        showProfileButton
        property1HomePosition="absolute"
        property1HomeTop={709}
        property1HomeLeft={1}
        ellipseMenuIconLeft={27}
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
        homeButtonTop={20}
        homeButtonLeft={30}
        homeButtonWidth={40}
        homeButtonHeight={72}
        homeTop={54}
        homeFontSize={14}
        homeColor="#000"
        homeIconHeight="33.33%"
        homeIconWidth="55.25%"
        homeIconRight="22.25%"
        homeIconBottom="66.67%"
        homeIconLeft="22.5%"
      />
      <View style={styles.rectangleHeader} />
      <Pressable
        style={styles.notificationsActive}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/notifications-active.png")}
        />
      </Pressable>
      <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postsLayout: {
    width: 295,
    position: "absolute",
  },
  home1Typo: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 24,
    position: "absolute",
  },
  loremTypo: {
    textAlign: "left",
    top: 205,
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandRegular,
    lineHeight: 24,
    fontSize: FontSize.size_sm,
    width: 295,
    left: 0,
    position: "absolute",
  },
  inputLayout: {
    height: 48,
    width: 302,
    position: "absolute",
  },
  imageHome1Icon: {
    marginLeft: -147.5,
    height: 170,
    left: "50%",
    top: 0,
  },
  motivationalQuiz: {
    top: 0,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    left: 0,
  },
  hAgo: {
    left: 251,
    textAlign: "right",
    width: 44,
    top: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandRegular,
    lineHeight: 24,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  title: {
    top: 181,
    height: 24,
    left: 0,
  },
  posts: {
    top: 361,
    height: 349,
    left: 0,
  },
  loremIpsumDolor1: {
    height: 74,
  },
  posts1: {
    left: 1,
    height: 279,
    top: 0,
  },
  scrollGroupHome: {
    top: 138,
    left: 39,
    width: 296,
    height: 710,
    position: "absolute",
  },
  inputChild: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    top: 0,
    left: 0,
  },
  input: {
    top: 77,
    left: 36,
  },
  rectangleHeader: {
    width: 375,
    height: 64,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  icon: {
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
  home1: {
    marginLeft: -28.5,
    top: 32,
    fontSize: FontSize.size_xl,
    width: 58,
    height: 92,
    left: "50%",
  },
  home: {
    flex: 1,
    height: 880,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Home;
