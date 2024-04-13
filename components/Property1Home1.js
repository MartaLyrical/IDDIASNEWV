import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Group = ({
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
    <View style={[styles.property1group, property1GroupStyle]}>
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
            styles.buttonPosition1,
            profileButtonStyle,
          ]}
          onPress={onProfileButtonPress}
        >
          <Text style={[styles.profile, styles.groupTypo2, profileStyle]}>
            Profile
          </Text>
          <Image
            style={[styles.profileIcon, styles.iconLayout2, profileIconStyle]}
            resizeMode="cover"
            source={profileIcon}
          />
        </View>
      )}
      <View
        style={[styles.searchButton, styles.buttonPosition1, searchButtonStyle]}
        onPress={onSearchButtonPress}
      >
        <Text style={[styles.profile, styles.groupTypo2, searchStyle]}>
          Search
        </Text>
        <Image
          style={[styles.searchIcon, styles.iconLayout2, searchIconStyle]}
          resizeMode="cover"
          source={searchIcon}
        />
      </View>
      <View
        style={[styles.groupButton, groupButtonStyle]}
        onPress={onGroupButtonPress}
      >
        <Text style={[styles.group, styles.groupTypo2, groupStyle]}>Group</Text>
        <Image
          style={[styles.groupIcon, styles.iconLayout2, groupIconStyle]}
          resizeMode="cover"
          source={groupIcon}
        />
      </View>
      <View
        style={[styles.chatButton, styles.buttonPosition1, chatButtonStyle]}
        onPress={onChatButtonPress}
      >
        <Text style={[styles.profile, styles.groupTypo2, chatStyle]}>Chat</Text>
        <Image
          style={[styles.chatIcon, styles.iconLayout2, chatIconStyle]}
          resizeMode="cover"
          source={chatIcon}
        />
      </View>
      <View
        style={[styles.homeButton, styles.buttonPosition1, homeButtonStyle]}
      >
        <Text style={[styles.profile, styles.groupTypo2, homeStyle]}>Home</Text>
        <Image
          style={[styles.homeIcon, styles.iconLayout2, homeIconStyle]}
          resizeMode="cover"
          source={homeIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition1: {
    height: 43,
    top: 46,
    position: "absolute",
  },
  groupTypo2: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    overflow: "hidden",
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
    left: 158,
    width: 46,
    height: 46,
    position: "absolute",
  },
  profile: {
    top: 28,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
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
    width: 40,
  },
  group: {
    top: 54,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  groupIcon: {
    height: "33.33%",
    width: "87.8%",
    right: "4.88%",
    bottom: "66.67%",
    left: "7.32%",
    maxWidth: "100%",
    top: "0%",
  },
  groupButton: {
    top: 20,
    left: 160,
    width: 41,
    height: 72,
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
  },
  homeIcon: {
    width: "65%",
    right: "17.35%",
    left: "17.65%",
    bottom: "44.19%",
    height: "55.81%",
    maxWidth: "100%",
    top: "0%",
  },
  homeButton: {
    left: 33,
    width: 34,
  },
  property1group: {
    height: 103,
    width: 375,
  },
});

export default Property1Group;
