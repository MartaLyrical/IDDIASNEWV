import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MenuBar1 = () => {
  return (
    <View style={styles.menuBar}>
      <View style={[styles.property1profile, styles.property1chatLayout]}>
        <Image
          style={styles.frameMenuBarIcon}
          resizeMode="cover"
          source={require("../assets/frame-menu-bar.png")}
        />
        <Image
          style={[styles.ellipseMenuIcon, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-menu.png")}
        />
        <View style={[styles.profileButton, styles.buttonLayout]}>
          <Text style={styles.profile}>Profile</Text>
          <Image
            style={[styles.profileIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/profileicon.png")}
          />
        </View>
        <View style={[styles.searchButton, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Search</Text>
          <Image
            style={[styles.searchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/searchicon.png")}
          />
        </View>
        <View style={[styles.groupButton, styles.buttonPosition]}>
          <Text style={[styles.group, styles.groupTypo]}>Group</Text>
          <Image
            style={[styles.groupIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/groupicon.png")}
          />
        </View>
        <View style={[styles.chatButton, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Chat</Text>
          <Image
            style={[styles.chatIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/chaticon.png")}
          />
        </View>
        <View style={[styles.homeButton, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Home</Text>
          <Image
            style={[styles.homeIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/homeicon.png")}
          />
        </View>
      </View>
      <View style={[styles.property1search, styles.property1chatLayout]}>
        <Image
          style={styles.frameMenuBarIcon}
          resizeMode="cover"
          source={require("../assets/frame-menu-bar1.png")}
        />
        <Image
          style={[styles.ellipseMenuIcon1, styles.searchButton1Position]}
          resizeMode="cover"
          source={require("../assets/ellipse-menu.png")}
        />
        <View style={[styles.profileButton1, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Profile</Text>
          <Image
            style={[styles.profileIcon1, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/profileicon1.png")}
          />
        </View>
        <View style={[styles.searchButton1, styles.searchButton1Position]}>
          <Text style={styles.profile}>Search</Text>
          <Image
            style={[styles.searchIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/searchicon1.png")}
          />
        </View>
        <View style={[styles.groupButton, styles.buttonPosition]}>
          <Text style={[styles.group, styles.groupTypo]}>Group</Text>
          <Image
            style={[styles.groupIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/groupicon.png")}
          />
        </View>
        <View style={[styles.chatButton, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Chat</Text>
          <Image
            style={[styles.chatIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/chaticon.png")}
          />
        </View>
        <View style={[styles.homeButton, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Home</Text>
          <Image
            style={[styles.homeIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/homeicon.png")}
          />
        </View>
      </View>
      <View style={[styles.property1group, styles.property1chatLayout]}>
        <Image
          style={styles.frameMenuBarIcon}
          resizeMode="cover"
          source={require("../assets/frame-menu-bar2.png")}
        />
        <Image
          style={[styles.ellipseMenuIcon2, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-menu.png")}
        />
        <View style={[styles.profileButton1, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Profile</Text>
          <Image
            style={[styles.profileIcon1, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/profileicon1.png")}
          />
        </View>
        <View style={[styles.searchButton, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Search</Text>
          <Image
            style={[styles.searchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/searchicon.png")}
          />
        </View>
        <View style={[styles.groupButton2, styles.buttonLayout]}>
          <Text style={styles.profile}>Group</Text>
          <Image
            style={[styles.groupIcon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/groupicon1.png")}
          />
        </View>
        <View style={[styles.chatButton, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Chat</Text>
          <Image
            style={[styles.chatIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/chaticon.png")}
          />
        </View>
        <View style={[styles.homeButton, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Home</Text>
          <Image
            style={[styles.homeIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/homeicon.png")}
          />
        </View>
      </View>
      <View style={[styles.property1chat, styles.property1chatLayout]}>
        <Image
          style={styles.frameMenuBarIcon}
          resizeMode="cover"
          source={require("../assets/frame-menu-bar3.png")}
        />
        <Image
          style={[styles.ellipseMenuIcon3, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-menu.png")}
        />
        <View style={[styles.profileButton1, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Profile</Text>
          <Image
            style={[styles.profileIcon1, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/profileicon1.png")}
          />
        </View>
        <View style={[styles.searchButton, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Search</Text>
          <Image
            style={[styles.searchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/searchicon.png")}
          />
        </View>
        <View style={[styles.groupButton, styles.buttonPosition]}>
          <Text style={[styles.group, styles.groupTypo]}>Group</Text>
          <Image
            style={[styles.groupIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/groupicon.png")}
          />
        </View>
        <View style={[styles.chatButton3, styles.buttonLayout]}>
          <Text style={styles.profile}>Chat</Text>
          <Image
            style={[styles.chatIcon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chaticon1.png")}
          />
        </View>
        <View style={[styles.homeButton, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Home</Text>
          <Image
            style={[styles.homeIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/homeicon.png")}
          />
        </View>
      </View>
      <View style={styles.property1home}>
        <Image
          style={styles.frameMenuBarIcon}
          resizeMode="cover"
          source={require("../assets/frame-menu-bar4.png")}
        />
        <Image
          style={[styles.ellipseMenuIcon4, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-menu.png")}
        />
        <View style={[styles.profileButton1, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Profile</Text>
          <Image
            style={[styles.profileIcon1, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/profileicon1.png")}
          />
        </View>
        <View style={[styles.searchButton, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Search</Text>
          <Image
            style={[styles.searchIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/searchicon.png")}
          />
        </View>
        <View style={[styles.groupButton, styles.buttonPosition]}>
          <Text style={[styles.group, styles.groupTypo]}>Group</Text>
          <Image
            style={[styles.groupIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/groupicon.png")}
          />
        </View>
        <View style={[styles.chatButton, styles.buttonPosition]}>
          <Text style={[styles.search, styles.groupTypo]}>Chat</Text>
          <Image
            style={[styles.chatIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/chaticon.png")}
          />
        </View>
        <View style={[styles.homeButton4, styles.buttonLayout]}>
          <Text style={styles.profile}>Home</Text>
          <Image
            style={[styles.homeIcon4, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/homeicon1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1chatLayout: {
    height: 103,
    left: 20,
    width: 375,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 46,
    top: 9,
  },
  buttonLayout: {
    height: 72,
    top: 20,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "66.67%",
    top: "0%",
    height: "33.33%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonPosition: {
    height: 43,
    top: 46,
    position: "absolute",
  },
  groupTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    top: 28,
    textAlign: "center",
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  iconPosition: {
    bottom: "44.19%",
    height: "55.81%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  searchButton1Position: {
    left: 229,
    width: 46,
    position: "absolute",
  },
  frameMenuBarIcon: {
    top: 32,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 71,
    left: 0,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  ellipseMenuIcon: {
    left: 302,
    width: 46,
    height: 46,
    top: 9,
    position: "absolute",
  },
  profile: {
    top: 54,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  profileIcon: {
    width: "55.81%",
    right: "20.93%",
    left: "23.26%",
  },
  profileButton: {
    left: 303,
    width: 43,
    position: "absolute",
    height: 72,
  },
  search: {
    left: 0,
  },
  searchIcon: {
    width: "62.25%",
    right: "17.75%",
    left: "20%",
  },
  searchButton: {
    left: 232,
    width: 40,
  },
  group: {
    left: 1,
  },
  groupIcon: {
    width: "100%",
    right: "0%",
    left: "0%",
  },
  groupButton: {
    left: 162,
    width: 36,
  },
  chatIcon: {
    width: "92.22%",
    right: "3.7%",
    left: "4.07%",
  },
  chatButton: {
    left: 101,
    width: 27,
  },
  homeIcon: {
    width: "65%",
    right: "17.35%",
    left: "17.65%",
  },
  homeButton: {
    left: 33,
    width: 34,
  },
  property1profile: {
    top: 624,
  },
  ellipseMenuIcon1: {
    height: 46,
    top: 9,
    left: 229,
  },
  profileIcon1: {
    width: "64.86%",
    right: "16.22%",
    left: "18.92%",
  },
  profileButton1: {
    left: 306,
    width: 37,
  },
  searchIcon1: {
    width: "54.13%",
    right: "21.96%",
    left: "23.91%",
  },
  searchButton1: {
    height: 72,
    top: 20,
  },
  property1search: {
    top: 473,
  },
  ellipseMenuIcon2: {
    left: 158,
    width: 46,
    height: 46,
    top: 9,
    position: "absolute",
  },
  groupIcon2: {
    width: "87.8%",
    right: "4.88%",
    left: "7.32%",
  },
  groupButton2: {
    left: 160,
    width: 41,
    position: "absolute",
    height: 72,
  },
  property1group: {
    top: 322,
  },
  ellipseMenuIcon3: {
    left: 92,
    width: 46,
    height: 46,
    top: 9,
    position: "absolute",
  },
  chatIcon3: {
    width: "77.81%",
    right: "9.38%",
    left: "12.81%",
  },
  chatButton3: {
    left: 98,
    width: 32,
    position: "absolute",
    height: 72,
  },
  property1chat: {
    top: 171,
  },
  ellipseMenuIcon4: {
    left: 27,
    width: 46,
    height: 46,
    top: 9,
    position: "absolute",
  },
  homeIcon4: {
    width: "55.25%",
    right: "22.25%",
    left: "22.5%",
  },
  homeButton4: {
    left: 30,
    width: 40,
    position: "absolute",
    height: 72,
  },
  property1home: {
    top: 20,
    height: 103,
    width: 375,
    left: 20,
    position: "absolute",
  },
  menuBar: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 415,
    height: 747,
    overflow: "hidden",
  },
});

export default MenuBar1;
