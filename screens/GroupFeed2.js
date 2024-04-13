import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormLabelContainer from "../components/FormLabelContainer";
import Send from "../components/Send";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupFeed2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupFeed2}>
      <FormLabelContainer />
      <Send
        component41Position="absolute"
        component41Top={31}
        component41Right={31}
        component41Bottom={755}
        component41Left={284}
        sendFontFamily="Quicksand-SemiBold"
        sendFontWeight="600"
        onSendPress={() => navigation.navigate("GroupFeed1")}
      />
      <Text style={[styles.whatsNew, styles.cancelFlexBox]}>What's new?</Text>
      <Image
        style={styles.profileIcon}
        resizeMode="cover"
        source={require("../assets/profile4.png")}
      />
      <Image
        style={styles.galleryIcon}
        resizeMode="cover"
        source={require("../assets/gallery.png")}
      />
      <Image
        style={styles.maskGroup2}
        resizeMode="cover"
        source={require("../assets/mask-group-2.png")}
      />
      <Pressable
        style={styles.sameNames}
        onPress={() => navigation.navigate("GroupFeed1")}
      >
        <Text style={[styles.cancel, styles.cancelFlexBox]}>Cancel</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cancelFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  whatsNew: {
    top: 84,
    left: 86,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.quicksandSemiBold,
    position: "absolute",
  },
  profileIcon: {
    top: 76,
    left: 32,
    width: 36,
    height: 36,
    position: "absolute",
  },
  galleryIcon: {
    top: 446,
    left: 4,
    width: 368,
    height: 70,
    position: "absolute",
  },
  maskGroup2: {
    top: 126,
    left: 36,
    width: 302,
    height: 302,
    position: "absolute",
  },
  cancel: {
    marginLeft: -155.5,
    fontSize: FontSize.size_xl,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
  },
  sameNames: {
    left: "50%",
    top: 32,
    position: "absolute",
  },
  groupFeed2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default GroupFeed2;
