import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import EditContainer1 from "../components/EditContainer1";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const GroupFeedEdit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupFeedEdit}>
      <View style={styles.input}>
        <View style={styles.inputRectangle} />
      </View>
      <EditContainer1
        comparisonLabels="Same Faces"
        imageLabelId={require("../assets/same-faces.png")}
        faceImageUrl={require("../assets/property-1checkcircle.png")}
      />
      <Pressable
        style={styles.name}
        onPress={() => navigation.navigate("GroupFeed")}
      >
        <Text style={[styles.sameJobs, styles.groupTypo]}>Same Jobs</Text>
        <Image
          style={styles.sameJobsIcon}
          resizeMode="cover"
          source={require("../assets/same-jobs.png")}
        />
        <Text style={[styles.loremIpsumDolor, styles.deleteClr]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
        <Image
          style={[styles.checkMarkIcon, styles.checkMarkIconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1emptycheckcircle.png")}
        />
      </Pressable>
      <EditContainer1
        comparisonLabels="Same Names"
        imageLabelId={require("../assets/same-names.png")}
        faceImageUrl={require("../assets/property-1emptycheckcircle.png")}
        loremIpsumDolorTop={401}
        checkMarkIconTextAlign="left"
      />
      <EditContainer1
        comparisonLabels="Same Personality"
        imageLabelId={require("../assets/same-personality.png")}
        faceImageUrl={require("../assets/property-1emptycheckcircle.png")}
        loremIpsumDolorTop={524}
        checkMarkIconTextAlign="left"
      />
      <EditContainer1
        comparisonLabels="Same Interests"
        imageLabelId={require("../assets/same-interests.png")}
        faceImageUrl={require("../assets/property-1emptycheckcircle.png")}
        loremIpsumDolorTop={647}
        checkMarkIconTextAlign="center"
      />
      <Text style={[styles.archive, styles.deleteTypo]}>Archive</Text>
      <Text style={[styles.delete, styles.deleteTypo]}>Delete</Text>
      <Text style={[styles.readAll, styles.groupFlexBox]}>Read All</Text>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("GroupCreationMembers")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/.png")}
        />
      </Pressable>
      <Text style={styles.edit}>Edit</Text>
      <Text style={[styles.group, styles.groupFlexBox]}>Group</Text>
      <Pressable
        style={[styles.notificationsActive, styles.checkMarkIconLayout]}
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
  groupTypo: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
  },
  deleteClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  checkMarkIconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  deleteTypo: {
    height: 19,
    width: 79,
    top: 762,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  groupFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  inputRectangle: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    left: 0,
    top: 0,
    height: 34,
    width: 302,
    position: "absolute",
  },
  input: {
    top: 113,
    height: 34,
    width: 302,
    left: 36,
    position: "absolute",
  },
  sameJobs: {
    color: Color.colorLightseagreen_100,
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontWeight: "700",
    lineHeight: 24,
    left: 153,
    top: 0,
    position: "absolute",
  },
  sameJobsIcon: {
    top: 5,
    width: 88,
    height: 88,
    left: 36,
    position: "absolute",
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.quicksandRegular,
    width: 147,
    height: 59,
    top: 34,
    textAlign: "left",
    left: 153,
    color: Color.colorBlack,
  },
  checkMarkIcon: {
    top: 39,
    left: 0,
  },
  name: {
    top: 278,
    width: 300,
    height: 93,
    left: 36,
    position: "absolute",
  },
  archive: {
    color: Color.colorBlack,
    position: "absolute",
    textAlign: "left",
    left: 36,
  },
  delete: {
    left: 259,
    textAlign: "right",
    color: Color.colorBlack,
    position: "absolute",
  },
  readAll: {
    left: 148,
    height: 19,
    width: 79,
    top: 762,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
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
  edit: {
    top: 76,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    textAlign: "left",
    left: 36,
    position: "absolute",
  },
  group: {
    marginLeft: -29.5,
    top: 32,
    left: "50%",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  notificationsActive: {
    left: 324,
    top: 34,
  },
  groupFeedEdit: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default GroupFeedEdit;
