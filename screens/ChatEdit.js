import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import FilteredPersonsContainer from "../components/FilteredPersonsContainer";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ChatEdit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatEdit}>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputRectangle, styles.inputLayout]} />
      </View>
      <FilteredPersonsContainer
        imageId={require("../assets/profile-circle9.png")}
        imageDescription={require("../assets/profile-circle10.png")}
        imageDimensions={require("../assets/profile-circle11.png")}
        imageDimensionsText={require("../assets/profile-circle12.png")}
        imageSize={require("../assets/profile-circle13.png")}
        imageCode={require("../assets/profile-circle14.png")}
        imageDimensionsText2={require("../assets/profile-circle15.png")}
        imageIdentifier={require("../assets/profile-circle16.png")}
        loremIpsumDolorLeft={112}
      />
      <Text style={[styles.archive, styles.deleteTypo]}>Archive</Text>
      <Text style={[styles.delete, styles.deleteTypo]}>Delete</Text>
      <Text style={[styles.readAll, styles.chatFlexBox]}>Read All</Text>
      <Image
        style={[styles.checkMarkIcon, styles.checkIconLayout]}
        resizeMode="cover"
        source={require("../assets/property-1checkcircle.png")}
      />
      <Image
        style={[styles.checkMarkIcon1, styles.checkIconLayout]}
        resizeMode="cover"
        source={require("../assets/property-1emptycheckcircle.png")}
      />
      <Image
        style={[styles.checkMarkIcon2, styles.checkIconLayout]}
        resizeMode="cover"
        source={require("../assets/property-1emptycheckcircle.png")}
      />
      <Image
        style={[styles.checkMarkIcon3, styles.checkIconLayout]}
        resizeMode="cover"
        source={require("../assets/property-1emptycheckcircle.png")}
      />
      <Image
        style={[styles.checkMarkIcon4, styles.checkIconLayout]}
        resizeMode="cover"
        source={require("../assets/property-1emptycheckcircle.png")}
      />
      <Image
        style={[styles.checkMarkIcon5, styles.checkIconLayout]}
        resizeMode="cover"
        source={require("../assets/property-1emptycheckcircle.png")}
      />
      <Image
        style={[styles.checkMarkIcon6, styles.checkIconLayout]}
        resizeMode="cover"
        source={require("../assets/property-1emptycheckcircle.png")}
      />
      <Image
        style={[styles.checkMarkIcon7, styles.checkIconLayout]}
        resizeMode="cover"
        source={require("../assets/property-1emptycheckcircle.png")}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("ChatNewChat")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/.png")}
        />
      </Pressable>
      <Pressable
        style={styles.edit}
        onPress={() => navigation.navigate("ChatEdit")}
      >
        <Text style={[styles.edit1, styles.edit1FlexBox]}>Edit</Text>
      </Pressable>
      <Text style={[styles.chat, styles.chatFlexBox]}>Chat</Text>
      <Pressable
        style={[styles.notificationsActive, styles.checkIconLayout]}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/notifications-active.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    height: 48,
    width: 302,
    position: "absolute",
  },
  deleteTypo: {
    height: 19,
    width: 79,
    fontSize: FontSize.size_base,
    top: 748,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
  },
  chatFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  checkIconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  edit1FlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  inputRectangle: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
  },
  input: {
    top: 119,
    left: 36,
  },
  archive: {
    textAlign: "left",
    color: Color.colorBlack,
    width: 79,
    fontSize: FontSize.size_base,
    top: 748,
    left: 36,
    position: "absolute",
  },
  delete: {
    left: 259,
    textAlign: "right",
    color: Color.colorBlack,
    width: 79,
    fontSize: FontSize.size_base,
    top: 748,
    position: "absolute",
  },
  readAll: {
    left: 148,
    height: 19,
    width: 79,
    fontSize: FontSize.size_base,
    top: 748,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
  },
  checkMarkIcon: {
    top: 201,
    left: 36,
  },
  checkMarkIcon1: {
    top: 268,
    left: 36,
  },
  checkMarkIcon2: {
    top: 335,
    left: 36,
  },
  checkMarkIcon3: {
    top: 402,
    left: 36,
  },
  checkMarkIcon4: {
    top: 469,
    left: 36,
  },
  checkMarkIcon5: {
    top: 536,
    left: 36,
  },
  checkMarkIcon6: {
    top: 603,
    left: 36,
  },
  checkMarkIcon7: {
    top: 670,
    left: 36,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  pressable: {
    left: 320,
    top: 75,
    right: 31,
    bottom: 713,
    position: "absolute",
  },
  edit1: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  edit: {
    top: 76,
    left: 36,
    position: "absolute",
  },
  chat: {
    marginLeft: -22.5,
    top: 32,
    left: "50%",
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  notificationsActive: {
    left: 324,
    top: 34,
  },
  chatEdit: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChatEdit;
