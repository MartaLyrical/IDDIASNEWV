import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContainerHero from "../components/ContainerHero";
import Property1Connected from "../components/Property1Connected";
import Property1Home from "../components/Property1Home";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SearchResults = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchResults}>
      <ContainerHero />
      <View style={styles.gallery}>
        <Image
          style={[styles.galleryChild, styles.galleryLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-261.png")}
        />
        <Image
          style={[styles.galleryItem, styles.galleryLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-262.png")}
        />
        <Image
          style={[styles.galleryInner, styles.galleryLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-920.png")}
        />
      </View>
      <Text style={[styles.gallery1, styles.gallery1Typo]}>Gallery</Text>
      <View style={styles.interests}>
        <Image
          style={[styles.galleryChild, styles.galleryLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-2611.png")}
        />
        <Image
          style={[styles.galleryItem, styles.galleryLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-2621.png")}
        />
        <Image
          style={[styles.galleryInner, styles.galleryLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-9201.png")}
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
      <Text style={[styles.interests1, styles.gallery1Typo]}>Interests</Text>
      <Property1Connected
        iDID="ID"
        property1ConnectedPosition="absolute"
        property1ConnectedTop={98}
        property1ConnectedLeft={275}
        rectangleViewBackgroundColor="#2699fb"
        iDIDLeft={23}
      />
      <Image
        style={styles.chatIcon}
        resizeMode="cover"
        source={require("../assets/chat-icon1.png")}
      />
      <Text style={[styles.profile, styles.loremFlexBox]}>Profile</Text>
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
      <Property1Home
        frameMenuBar={require("../assets/frame-menu-bar1.png")}
        profileIcon={require("../assets/profileicon1.png")}
        searchIcon={require("../assets/searchicon1.png")}
        groupIcon={require("../assets/groupicon.png")}
        chatIcon={require("../assets/chaticon.png")}
        homeIcon={require("../assets/homeicon.png")}
        showProfileButton
        property1HomePosition="absolute"
        property1HomeTop={709}
        property1HomeLeft={1}
        ellipseMenuIconLeft={229}
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
        searchButtonTop={20}
        searchButtonLeft={229}
        searchButtonWidth={46}
        searchButtonHeight={72}
        searchTop={54}
        searchFontSize={14}
        searchColor="#000"
        searchIconHeight="33.33%"
        searchIconWidth="54.13%"
        searchIconRight="21.96%"
        searchIconBottom="66.67%"
        searchIconLeft="23.91%"
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
        onSearchButtonPress={() => navigation.navigate("Search")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  galleryLayout: {
    width: 88,
    top: 0,
    height: 88,
    position: "absolute",
  },
  gallery1Typo: {
    textAlign: "center",
    color: Color.colorLightseagreen_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
    left: "50%",
    position: "absolute",
  },
  loremFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  galleryChild: {
    left: 0,
  },
  galleryItem: {
    left: 107,
  },
  galleryInner: {
    left: 214,
  },
  gallery: {
    top: 301,
    height: 88,
    width: 302,
    left: 36,
    position: "absolute",
  },
  gallery1: {
    marginLeft: -28.5,
    top: 253,
  },
  loremIpsumDolor: {
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_3xs,
    top: 108,
    color: Color.colorBlack,
    width: 88,
    height: 88,
    left: 0,
  },
  loremIpsumDolor1: {
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_3xs,
    top: 108,
    color: Color.colorBlack,
    width: 88,
    height: 88,
    left: 107,
  },
  loremIpsumDolor2: {
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_3xs,
    top: 108,
    color: Color.colorBlack,
    width: 88,
    height: 88,
    left: 214,
  },
  interests: {
    top: 462,
    height: 196,
    width: 302,
    left: 36,
    position: "absolute",
  },
  interests1: {
    marginLeft: -34.5,
    top: 414,
  },
  chatIcon: {
    top: 101,
    left: 228,
    width: 28,
    height: 24,
    position: "absolute",
  },
  profile: {
    marginLeft: -31.5,
    top: 32,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
    left: "50%",
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
  searchResults: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SearchResults;
