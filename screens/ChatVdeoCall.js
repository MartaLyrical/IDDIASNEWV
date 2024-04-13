import * as React from "react";
import { Image, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const ChatVdeoCall = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatVdeoCall}>
      <Image
        style={styles.profileRectangleIcon}
        resizeMode="cover"
        source={require("../assets/profile-rectangle.png")}
      />
      <Image
        style={[styles.cameraIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/camera1.png")}
      />
      <Pressable
        style={styles.endCall}
        onPress={() => navigation.navigate("Chat1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/endcall.png")}
        />
      </Pressable>
      <Image
        style={[styles.videoIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/video.png")}
      />
      <Image
        style={styles.profileRectangleIcon1}
        resizeMode="cover"
        source={require("../assets/profile-rectangle1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    height: 60,
    top: 705,
    position: "absolute",
  },
  profileRectangleIcon: {
    top: 0,
    left: 0,
    width: 375,
    position: "absolute",
    height: 812,
  },
  cameraIcon: {
    left: 68,
    width: 60,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  endCall: {
    left: 158,
    top: 690,
    width: 75,
    height: 75,
    position: "absolute",
  },
  videoIcon: {
    left: 263,
    width: 61,
  },
  profileRectangleIcon1: {
    top: 50,
    left: 42,
    width: 103,
    height: 174,
    position: "absolute",
  },
  chatVdeoCall: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default ChatVdeoCall;
