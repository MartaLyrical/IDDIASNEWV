import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PersonCardForm2 from "../components/PersonCardForm2";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ChatNewChat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatNewChat}>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputRectangle, styles.inputLayout]} />
      </View>
      <Pressable
        style={styles.persons}
        onPress={() => navigation.navigate("Chat1")}
      >
        <PersonCardForm2 />
      </Pressable>
      <Pressable style={styles.x} onPress={() => navigation.navigate("Chat")}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/x.png")}
        />
      </Pressable>
      <Text style={styles.newChat}>New Chat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    height: 48,
    width: 302,
    position: "absolute",
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
  persons: {
    top: 187,
    left: 44,
    width: 245,
    height: 588,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  x: {
    left: 315,
    top: 70,
    right: 26,
    bottom: 708,
    position: "absolute",
  },
  newChat: {
    marginLeft: -46.5,
    top: 32,
    left: "50%",
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  chatNewChat: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ChatNewChat;
