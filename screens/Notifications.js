import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Home from "../components/Property1Home";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notifications}>
      <View
        style={[styles.notificationsScroll, styles.groupNotificationPosition]}
      >
        <View
          style={[styles.groupNotification, styles.groupNotificationPosition]}
        >
          <View style={[styles.notification, styles.notificationPosition]}>
            <View style={styles.backgroundShadowBox} />
            <Text style={[styles.coffeeMug, styles.coffeePosition]}>
              IDDIAS
            </Text>
            <Text
              style={[styles.beautifulAndDurabl, styles.beautifulPosition1]}
            >
              Luzia Beltrand is connected with you
            </Text>
          </View>
          <View style={[styles.notification1, styles.notificationPosition]}>
            <View style={styles.backgroundShadowBox} />
            <Text style={[styles.coffeeMug, styles.coffeePosition]}>
              IDDIAS
            </Text>
            <Text
              style={[styles.beautifulAndDurabl1, styles.beautifulPosition1]}
            >
              Nelia Campos is connected with you
            </Text>
          </View>
          <View style={[styles.notification2, styles.notificationPosition]}>
            <View style={styles.backgroundShadowBox} />
            <Text style={[styles.coffeeMug2, styles.coffeePosition]}>
              Groups
            </Text>
            <Text
              style={[styles.beautifulAndDurabl2, styles.beautifulPosition]}
            >
              Same Names as a new post
            </Text>
          </View>
          <View style={[styles.notification3, styles.notificationPosition]}>
            <View style={styles.backgroundShadowBox} />
            <Text style={[styles.coffeeMug, styles.coffeePosition]}>
              IDDIAS
            </Text>
            <Text
              style={[styles.beautifulAndDurabl2, styles.beautifulPosition]}
            >
              Sofia Nabais is connected with you
            </Text>
          </View>
          <View style={[styles.notification4, styles.notificationPosition]}>
            <View style={styles.backgroundShadowBox} />
            <Text style={[styles.coffeeMug2, styles.coffeePosition]}>
              Groups
            </Text>
            <Text
              style={[styles.beautifulAndDurabl4, styles.beautifulPosition]}
            >
              Same Faces as a new post
            </Text>
          </View>
          <View style={[styles.notification5, styles.notificationPosition]}>
            <View style={styles.backgroundShadowBox} />
            <Text style={[styles.coffeeMug, styles.coffeePosition]}>
              IDDIAS
            </Text>
            <Text
              style={[styles.beautifulAndDurabl, styles.beautifulPosition1]}
            >
              Luzia Beltrand is connected with you
            </Text>
          </View>
          <View style={[styles.notification6, styles.notificationPosition]}>
            <View style={styles.backgroundShadowBox} />
            <Text style={[styles.coffeeMug, styles.coffeePosition]}>
              IDDIAS
            </Text>
            <Text
              style={[styles.beautifulAndDurabl1, styles.beautifulPosition1]}
            >
              Nelia Campos is connected with you
            </Text>
          </View>
          <View style={[styles.notification7, styles.notificationPosition]}>
            <View style={styles.backgroundShadowBox} />
            <Text style={[styles.coffeeMug2, styles.coffeePosition]}>
              Groups
            </Text>
            <Text
              style={[styles.beautifulAndDurabl2, styles.beautifulPosition]}
            >
              Same Names as a new post
            </Text>
          </View>
          <View style={[styles.notification8, styles.notificationPosition]}>
            <View style={styles.backgroundShadowBox} />
            <Text style={[styles.coffeeMug, styles.coffeePosition]}>
              IDDIAS
            </Text>
            <Text
              style={[styles.beautifulAndDurabl2, styles.beautifulPosition]}
            >
              Sofia Nabais is connected with you
            </Text>
          </View>
          <View style={[styles.notification9, styles.notificationPosition]}>
            <View style={styles.backgroundShadowBox} />
            <Text style={[styles.coffeeMug2, styles.coffeePosition]}>
              Groups
            </Text>
            <Text
              style={[styles.beautifulAndDurabl4, styles.beautifulPosition]}
            >
              Same Faces as a new post
            </Text>
          </View>
        </View>
      </View>
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
      <Text style={styles.notifications1}>Notifications</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  groupNotificationPosition: {
    height: 1010,
    width: 306,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  notificationPosition: {
    height: 83,
    width: 302,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  coffeePosition: {
    height: 19,
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_base,
    marginLeft: -131,
    marginTop: -21.5,
    textAlign: "left",
    color: Color.colorBlack,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  beautifulPosition1: {
    width: 264,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    marginLeft: -130,
    marginTop: 4.5,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  beautifulPosition: {
    width: 238,
    lineHeight: 14,
    fontSize: FontSize.size_sm,
    marginLeft: -130,
    marginTop: 4.5,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  backgroundShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.colorLightblue,
    marginLeft: -151,
    marginTop: -41.5,
    height: 83,
    width: 302,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  coffeeMug: {
    width: 58,
  },
  beautifulAndDurabl: {
    height: 28,
  },
  notification: {
    marginLeft: -149,
    height: 83,
    width: 302,
    marginTop: -505,
  },
  beautifulAndDurabl1: {
    height: 17,
  },
  notification1: {
    marginTop: -402,
    marginLeft: -149,
    height: 83,
    width: 302,
  },
  coffeeMug2: {
    width: 79,
  },
  beautifulAndDurabl2: {
    height: 17,
  },
  notification2: {
    marginTop: -299,
    marginLeft: -149,
    height: 83,
    width: 302,
  },
  notification3: {
    marginTop: -196,
    marginLeft: -149,
    height: 83,
    width: 302,
  },
  beautifulAndDurabl4: {
    height: 26,
  },
  notification4: {
    marginTop: -93,
    marginLeft: -149,
    height: 83,
    width: 302,
  },
  notification5: {
    marginTop: 10,
    marginLeft: -153,
  },
  notification6: {
    marginTop: 113,
    marginLeft: -153,
  },
  notification7: {
    marginTop: 216,
    marginLeft: -153,
  },
  notification8: {
    marginTop: 319,
    marginLeft: -153,
  },
  notification9: {
    marginTop: 422,
    marginLeft: -153,
  },
  groupNotification: {
    marginLeft: -153,
    marginTop: -505,
  },
  notificationsScroll: {
    marginTop: -404,
    marginLeft: -154.5,
  },
  rectangleHeader: {
    top: 0,
    left: 0,
    width: 375,
    height: 64,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  notifications1: {
    marginLeft: -61.5,
    top: 32,
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    width: 123,
    height: 25,
    textAlign: "left",
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
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
  notifications: {
    flex: 1,
    height: 1000,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Notifications;
