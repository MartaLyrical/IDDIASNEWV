import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Home = ({
  frameMenuBar,
  profileIcon,
  searchIcon,
  groupIcon,
  chatIcon,
  homeIcon,
  showProfileButton,
  property1HomePosition,
  property1HomeTop,
  property1HomeLeft,
  ellipseMenuIconLeft,
  profileButtonTop,
  profileButtonLeft,
  profileButtonWidth,
  profileButtonHeight,
  profileTop,
  profileFontSize,
  profileColor,
  profileIconHeight,
  profileIconWidth,
  profileIconRight,
  profileIconBottom,
  profileIconLeft,
  searchButtonTop,
  searchButtonLeft,
  searchButtonWidth,
  searchButtonHeight,
  searchTop,
  searchFontSize,
  searchColor,
  searchIconHeight,
  searchIconWidth,
  searchIconRight,
  searchIconBottom,
  searchIconLeft,
  groupButtonTop,
  groupButtonLeft,
  groupButtonWidth,
  groupButtonHeight,
  groupTop,
  groupLeft,
  groupFontSize,
  groupColor,
  groupIconHeight,
  groupIconWidth,
  groupIconRight,
  groupIconBottom,
  groupIconLeft,
  chatButtonTop,
  chatButtonLeft,
  chatButtonWidth,
  chatButtonHeight,
  chatTop,
  chatFontSize,
  chatColor,
  chatIconHeight,
  chatIconWidth,
  chatIconRight,
  chatIconBottom,
  chatIconLeft,
  homeButtonTop,
  homeButtonLeft,
  homeButtonWidth,
  homeButtonHeight,
  homeTop,
  homeFontSize,
  homeColor,
  homeIconHeight,
  homeIconWidth,
  homeIconRight,
  homeIconBottom,
  homeIconLeft,
  onProfileButtonPress,
  onSearchButtonPress,
  onGroupButtonPress,
  onChatButtonPress,
}) => {
  const property1HomeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1HomePosition),
      ...getStyleValue("top", property1HomeTop),
      ...getStyleValue("left", property1HomeLeft),
    };
  }, [property1HomePosition, property1HomeTop, property1HomeLeft]);

  const ellipseMenuIconStyle = useMemo(() => {
    return {
      ...getStyleValue("left", ellipseMenuIconLeft),
    };
  }, [ellipseMenuIconLeft]);

  const profileButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("top", profileButtonTop),
      ...getStyleValue("left", profileButtonLeft),
      ...getStyleValue("width", profileButtonWidth),
      ...getStyleValue("height", profileButtonHeight),
    };
  }, [
    profileButtonTop,
    profileButtonLeft,
    profileButtonWidth,
    profileButtonHeight,
  ]);

  const profileStyle = useMemo(() => {
    return {
      ...getStyleValue("top", profileTop),
      ...getStyleValue("fontSize", profileFontSize),
      ...getStyleValue("color", profileColor),
    };
  }, [profileTop, profileFontSize, profileColor]);

  const profileIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", profileIconHeight),
      ...getStyleValue("width", profileIconWidth),
      ...getStyleValue("right", profileIconRight),
      ...getStyleValue("bottom", profileIconBottom),
      ...getStyleValue("left", profileIconLeft),
    };
  }, [
    profileIconHeight,
    profileIconWidth,
    profileIconRight,
    profileIconBottom,
    profileIconLeft,
  ]);

  const searchButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("top", searchButtonTop),
      ...getStyleValue("left", searchButtonLeft),
      ...getStyleValue("width", searchButtonWidth),
      ...getStyleValue("height", searchButtonHeight),
    };
  }, [
    searchButtonTop,
    searchButtonLeft,
    searchButtonWidth,
    searchButtonHeight,
  ]);

  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("top", searchTop),
      ...getStyleValue("fontSize", searchFontSize),
      ...getStyleValue("color", searchColor),
    };
  }, [searchTop, searchFontSize, searchColor]);

  const searchIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", searchIconHeight),
      ...getStyleValue("width", searchIconWidth),
      ...getStyleValue("right", searchIconRight),
      ...getStyleValue("bottom", searchIconBottom),
      ...getStyleValue("left", searchIconLeft),
    };
  }, [
    searchIconHeight,
    searchIconWidth,
    searchIconRight,
    searchIconBottom,
    searchIconLeft,
  ]);

  const groupButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("top", groupButtonTop),
      ...getStyleValue("left", groupButtonLeft),
      ...getStyleValue("width", groupButtonWidth),
      ...getStyleValue("height", groupButtonHeight),
    };
  }, [groupButtonTop, groupButtonLeft, groupButtonWidth, groupButtonHeight]);

  const groupStyle = useMemo(() => {
    return {
      ...getStyleValue("top", groupTop),
      ...getStyleValue("left", groupLeft),
      ...getStyleValue("fontSize", groupFontSize),
      ...getStyleValue("color", groupColor),
    };
  }, [groupTop, groupLeft, groupFontSize, groupColor]);

  const groupIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", groupIconHeight),
      ...getStyleValue("width", groupIconWidth),
      ...getStyleValue("right", groupIconRight),
      ...getStyleValue("bottom", groupIconBottom),
      ...getStyleValue("left", groupIconLeft),
    };
  }, [
    groupIconHeight,
    groupIconWidth,
    groupIconRight,
    groupIconBottom,
    groupIconLeft,
  ]);

  const chatButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("top", chatButtonTop),
      ...getStyleValue("left", chatButtonLeft),
      ...getStyleValue("width", chatButtonWidth),
      ...getStyleValue("height", chatButtonHeight),
    };
  }, [chatButtonTop, chatButtonLeft, chatButtonWidth, chatButtonHeight]);

  const chatStyle = useMemo(() => {
    return {
      ...getStyleValue("top", chatTop),
      ...getStyleValue("fontSize", chatFontSize),
      ...getStyleValue("color", chatColor),
    };
  }, [chatTop, chatFontSize, chatColor]);

  const chatIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", chatIconHeight),
      ...getStyleValue("width", chatIconWidth),
      ...getStyleValue("right", chatIconRight),
      ...getStyleValue("bottom", chatIconBottom),
      ...getStyleValue("left", chatIconLeft),
    };
  }, [
    chatIconHeight,
    chatIconWidth,
    chatIconRight,
    chatIconBottom,
    chatIconLeft,
  ]);

  const homeButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("top", homeButtonTop),
      ...getStyleValue("left", homeButtonLeft),
      ...getStyleValue("width", homeButtonWidth),
      ...getStyleValue("height", homeButtonHeight),
    };
  }, [homeButtonTop, homeButtonLeft, homeButtonWidth, homeButtonHeight]);

  const homeStyle = useMemo(() => {
    return {
      ...getStyleValue("top", homeTop),
      ...getStyleValue("fontSize", homeFontSize),
      ...getStyleValue("color", homeColor),
    };
  }, [homeTop, homeFontSize, homeColor]);

  const homeIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", homeIconHeight),
      ...getStyleValue("width", homeIconWidth),
      ...getStyleValue("right", homeIconRight),
      ...getStyleValue("bottom", homeIconBottom),
      ...getStyleValue("left", homeIconLeft),
    };
  }, [
    homeIconHeight,
    homeIconWidth,
    homeIconRight,
    homeIconBottom,
    homeIconLeft,
  ]);

  return (
    <View style={[styles.property1home, property1HomeStyle]}>
      <Image
        style={styles.frameMenuBarIcon}
        resizeMode="cover"
        source={frameMenuBar}
      />
      <Image
        style={[styles.ellipseMenuIcon, ellipseMenuIconStyle]}
        resizeMode="cover"
        source={require("../assets/ellipse-menu.png")}
      />
      {showProfileButton && (
        <View
          style={[
            styles.profileButton,
            styles.buttonLayout1,
            profileButtonStyle,
          ]}
          onPress={onProfileButtonPress}
        >
          <Text style={[styles.profile, styles.homeTypo, profileStyle]}>
            Profile
          </Text>
          <Image
            style={[styles.profileIcon, styles.iconLayout4, profileIconStyle]}
            resizeMode="cover"
            source={profileIcon}
          />
        </View>
      )}
      <View
        style={[styles.searchButton, styles.buttonLayout, searchButtonStyle]}
        onPress={onSearchButtonPress}
      >
        <Text style={[styles.profile, styles.homeTypo, searchStyle]}>
          Search
        </Text>
        <Image
          style={[styles.searchIcon, styles.iconLayout4, searchIconStyle]}
          resizeMode="cover"
          source={searchIcon}
        />
      </View>
      <View
        style={[styles.groupButton, styles.buttonLayout1, groupButtonStyle]}
        onPress={onGroupButtonPress}
      >
        <Text style={[styles.group, styles.homeTypo, groupStyle]}>Group</Text>
        <Image
          style={[styles.groupIcon, styles.iconLayout4, groupIconStyle]}
          resizeMode="cover"
          source={groupIcon}
        />
      </View>
      <View
        style={[styles.chatButton, styles.buttonLayout1, chatButtonStyle]}
        onPress={onChatButtonPress}
      >
        <Text style={[styles.profile, styles.homeTypo, chatStyle]}>Chat</Text>
        <Image
          style={[styles.chatIcon, styles.iconLayout4, chatIconStyle]}
          resizeMode="cover"
          source={chatIcon}
        />
      </View>
      <View style={[styles.homeButton, styles.buttonLayout, homeButtonStyle]}>
        <Text style={[styles.home, styles.homeTypo, homeStyle]}>Home</Text>
        <Image
          style={[styles.homeIcon, styles.iconLayout4, homeIconStyle]}
          resizeMode="cover"
          source={homeIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout1: {
    height: 43,
    top: 46,
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout4: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  buttonLayout: {
    width: 40,
    position: "absolute",
  },
  frameMenuBarIcon: {
    top: 32,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 71,
    overflow: "hidden",
    left: 0,
    position: "absolute",
    width: 375,
  },
  ellipseMenuIcon: {
    top: 9,
    left: 27,
    width: 46,
    height: 46,
    position: "absolute",
  },
  profile: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    top: 28,
    textAlign: "center",
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    left: 0,
  },
  profileIcon: {
    width: "64.86%",
    right: "16.22%",
    left: "18.92%",
    bottom: "44.19%",
    height: "55.81%",
    maxWidth: "100%",
    top: "0%",
  },
  profileButton: {
    left: 306,
    width: 37,
    position: "absolute",
  },
  searchIcon: {
    width: "62.25%",
    right: "17.75%",
    left: "20%",
    bottom: "44.19%",
    height: "55.81%",
    maxWidth: "100%",
    top: "0%",
  },
  searchButton: {
    left: 232,
    height: 43,
    top: 46,
  },
  group: {
    left: 1,
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    top: 28,
    textAlign: "center",
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
  },
  groupIcon: {
    width: "100%",
    right: "0%",
    left: "0%",
    bottom: "44.19%",
    height: "55.81%",
    maxWidth: "100%",
    top: "0%",
  },
  groupButton: {
    left: 162,
    width: 36,
    position: "absolute",
  },
  chatIcon: {
    width: "92.22%",
    right: "3.7%",
    left: "4.07%",
    bottom: "44.19%",
    height: "55.81%",
    maxWidth: "100%",
    top: "0%",
  },
  chatButton: {
    left: 101,
    width: 27,
    position: "absolute",
  },
  home: {
    top: 54,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    left: 0,
  },
  homeIcon: {
    height: "33.33%",
    width: "55.25%",
    right: "22.25%",
    bottom: "66.67%",
    left: "22.5%",
    maxWidth: "100%",
    top: "0%",
  },
  homeButton: {
    top: 20,
    left: 30,
    height: 72,
  },
  property1home: {
    height: 103,
    width: 375,
  },
});

export default Property1Home;
