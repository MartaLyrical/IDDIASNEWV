import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import AvatarImage from "./AvatarImage";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const UserCard = () => {
  const navigation = useNavigation();

  return (
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
        <Text style={[styles.sanFranciscoCa, styles.hiMyNameTypo]}>
          San Francisco, CA
        </Text>
      </View>
      <Image
        style={styles.editProfileIcon}
        resizeMode="cover"
        source={require("../assets/edit-profile.png")}
      />
      <Text style={[styles.hiMyName, styles.hiMyNameTypo]}>
        Hi! My name is John, I’m a creative geek from San Francisco, CA. I enjoy
        creating eye candy solutions for web and mobile apps. Contact me at
        john@mail.com
      </Text>
      <Pressable
        style={styles.connections}
        onPress={() => navigation.navigate("ProfileConnections")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/connections.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  hiMyNameTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
    lineHeight: 24,
    left: 0,
    position: "absolute",
  },
  johnDoe: {
    top: 0,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorLightseagreen_100,
    width: 79,
    textAlign: "left",
    lineHeight: 24,
    left: 0,
    position: "absolute",
  },
  sanFranciscoCa: {
    top: 22,
    fontSize: FontSize.size_xs,
    width: 111,
  },
  name: {
    top: 3,
    left: 71,
    height: 46,
    width: 111,
    position: "absolute",
  },
  editProfileIcon: {
    height: "8.89%",
    width: "5.29%",
    top: "3.89%",
    right: "43.04%",
    bottom: "87.22%",
    left: "51.67%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  hiMyName: {
    top: 82,
    fontSize: FontSize.size_sm,
    height: 98,
    width: 312,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  connections: {
    left: 276,
    top: 11,
    width: 35,
    height: 34,
    position: "absolute",
  },
  hero: {
    top: 100,
    left: 32,
    height: 180,
    width: 312,
    position: "absolute",
  },
});

export default UserCard;
