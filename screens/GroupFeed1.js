import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContainerPosts from "../components/ContainerPosts";
import Property1Home from "../components/Property1Home";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const GroupFeed1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupFeed1}>
      <View style={styles.posts}>
        <ContainerPosts />
        <ContainerPosts titleTop={0} />
      </View>
      <Pressable
        style={[styles.pressable, styles.pressablePosition]}
        onPress={() => navigation.navigate("ChatNewChat")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/.png")}
        />
      </Pressable>
      <Text style={[styles.sameNames, styles.pressablePosition]}>
        Same Names
      </Text>
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
        frameMenuBar={require("../assets/frame-menu-bar2.png")}
        profileIcon={require("../assets/profileicon1.png")}
        searchIcon={require("../assets/searchicon.png")}
        groupIcon={require("../assets/groupicon1.png")}
        chatIcon={require("../assets/chaticon.png")}
        homeIcon={require("../assets/homeicon.png")}
        showProfileButton
        property1HomePosition="absolute"
        property1HomeTop={709}
        property1HomeLeft={0}
        ellipseMenuIconLeft={158}
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
        groupButtonTop={20}
        groupButtonLeft={160}
        groupButtonWidth={41}
        groupButtonHeight={72}
        groupTop={54}
        groupLeft={0}
        groupFontSize={14}
        groupColor="#000"
        groupIconHeight="33.33%"
        groupIconWidth="87.8%"
        groupIconRight="4.88%"
        groupIconBottom="66.67%"
        groupIconLeft="7.32%"
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
        onGroupButtonPress={() => navigation.navigate("GroupFeed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pressablePosition: {
    top: 32,
    position: "absolute",
  },
  posts: {
    top: 93,
    left: 18,
    width: 340,
    height: 732,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  pressable: {
    left: 320,
    right: 31,
    bottom: 756,
  },
  sameNames: {
    marginLeft: -63.5,
    left: "50%",
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  notificationsActive: {
    left: 272,
    top: 34,
    width: 20,
    height: 20,
    position: "absolute",
  },
  groupFeed1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default GroupFeed1;
