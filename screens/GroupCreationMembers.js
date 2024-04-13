import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const GroupCreationMembers = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.groupCreationMembers, styles.iconLayout]}>
      <View style={[styles.input, styles.inputLayout]}>
        <View style={[styles.inputChild, styles.inputChildPosition]} />
      </View>
      <View style={[styles.member, styles.memberLayout]}>
        <Image
          style={[styles.profileIcon, styles.memberLayout]}
          resizeMode="cover"
          source={require("../assets/profile5.png")}
        />
        <Text style={[styles.nliaCerqueira, styles.addMembersFlexBox]}>
          Nélia Cerqueira
        </Text>
        <Image
          style={[styles.checkMarkIcon, styles.checkIconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1emptycheckcircle.png")}
        />
      </View>
      <View style={[styles.member1, styles.memberPosition]}>
        <Image
          style={[styles.profileIcon, styles.memberLayout]}
          resizeMode="cover"
          source={require("../assets/profile6.png")}
        />
        <Text style={[styles.nliaCerqueira, styles.addMembersFlexBox]}>
          Nélia Vieira
        </Text>
        <Image
          style={[styles.checkMarkIcon, styles.checkIconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1emptycheckcircle.png")}
        />
      </View>
      <View style={[styles.member2, styles.memberPosition]}>
        <Image
          style={[styles.profileIcon, styles.memberLayout]}
          resizeMode="cover"
          source={require("../assets/profile7.png")}
        />
        <Text style={[styles.nliaCerqueira, styles.addMembersFlexBox]}>
          Nélia Silva
        </Text>
        <Image
          style={[styles.checkMarkIcon, styles.checkIconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1emptycheckcircle.png")}
        />
      </View>
      <View style={[styles.member3, styles.memberPosition]}>
        <Image
          style={[styles.profileIcon, styles.memberLayout]}
          resizeMode="cover"
          source={require("../assets/profile8.png")}
        />
        <Text style={[styles.nliaCerqueira, styles.addMembersFlexBox]}>
          Nélia Oliveira
        </Text>
        <Image
          style={[styles.checkMarkIcon, styles.checkIconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1emptycheckcircle.png")}
        />
      </View>
      <View style={[styles.member4, styles.memberPosition]}>
        <Image
          style={[styles.profileIcon, styles.memberLayout]}
          resizeMode="cover"
          source={require("../assets/profile9.png")}
        />
        <Text style={[styles.nliaCerqueira, styles.addMembersFlexBox]}>
          Nélia Pereira
        </Text>
        <Image
          style={[styles.checkMarkIcon, styles.checkIconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1emptycheckcircle.png")}
        />
      </View>
      <View style={[styles.member5, styles.memberPosition]}>
        <Image
          style={[styles.profileIcon, styles.memberLayout]}
          resizeMode="cover"
          source={require("../assets/profile10.png")}
        />
        <Text style={[styles.nliaCerqueira, styles.addMembersFlexBox]}>
          Nélia Cardoso
        </Text>
        <Image
          style={[styles.checkMarkIcon5, styles.checkIconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1emptycheckcircle.png")}
        />
      </View>
      <View style={[styles.member6, styles.memberPosition]}>
        <Image
          style={[styles.profileIcon, styles.memberLayout]}
          resizeMode="cover"
          source={require("../assets/profile11.png")}
        />
        <Text style={styles.nliaCarneiro}>Nélia Carneiro</Text>
        <Image
          style={[styles.checkMarkIcon5, styles.checkIconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1emptycheckcircle.png")}
        />
      </View>
      <View style={[styles.member7, styles.memberPosition]}>
        <Image
          style={[styles.profileIcon, styles.memberLayout]}
          resizeMode="cover"
          source={require("../assets/profile2.png")}
        />
        <Text style={[styles.nliaCerqueira, styles.addMembersFlexBox]}>
          Nélia Barroso
        </Text>
        <Image
          style={[styles.checkMarkIcon5, styles.checkIconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1checkcircle.png")}
        />
      </View>
      <View style={[styles.member8, styles.memberPosition]}>
        <Image
          style={[styles.profileIcon, styles.memberLayout]}
          resizeMode="cover"
          source={require("../assets/profile3.png")}
        />
        <Text style={[styles.nliaCerqueira, styles.addMembersFlexBox]}>
          Nélia Matos
        </Text>
        <Image
          style={[styles.checkMarkIcon5, styles.checkIconLayout]}
          resizeMode="cover"
          source={require("../assets/property-1checkcircle.png")}
        />
      </View>
      <Text style={[styles.addMembers, styles.next1Typo]}>Add Members</Text>
      <Pressable
        style={styles.nextPosition}
        onPress={() => navigation.navigate("GroupCreationNaming")}
      >
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
      </Pressable>
      <Pressable
        style={styles.backArrow}
        onPress={() => navigation.navigate("GroupFeed")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/back-arrow.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  inputLayout: {
    height: 34,
    width: 302,
    position: "absolute",
  },
  inputChildPosition: {
    left: 0,
    top: 0,
  },
  memberLayout: {
    height: 60,
    position: "absolute",
  },
  addMembersFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  checkIconLayout: {
    height: 20,
    width: 20,
    left: 278,
    position: "absolute",
  },
  memberPosition: {
    left: 40,
    height: 60,
    width: 298,
    position: "absolute",
  },
  next1Typo: {
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
  },
  inputChild: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 34,
    width: 302,
    position: "absolute",
  },
  input: {
    top: 94,
    left: 36,
  },
  profileIcon: {
    width: 60,
    left: 0,
    top: 0,
  },
  nliaCerqueira: {
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_sm,
    left: 74,
    top: 21,
    textAlign: "center",
    position: "absolute",
  },
  checkMarkIcon: {
    top: 19,
  },
  member: {
    top: 718,
    left: 41,
    width: 298,
    height: 60,
  },
  member1: {
    top: 647,
  },
  member2: {
    top: 576,
  },
  member3: {
    top: 505,
  },
  member4: {
    top: 434,
  },
  checkMarkIcon5: {
    top: 20,
  },
  member5: {
    top: 362,
  },
  nliaCarneiro: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_sm,
    left: 74,
    top: 21,
    position: "absolute",
  },
  member6: {
    top: 291,
  },
  member7: {
    top: 220,
  },
  member8: {
    top: 149,
  },
  addMembers: {
    marginLeft: -66.5,
    fontSize: FontSize.size_xl,
    left: "50%",
    top: 32,
    position: "absolute",
    textAlign: "center",
    color: Color.colorBlack,
  },
  next1: {
    marginLeft: 115.5,
    fontSize: FontSize.size_lg,
    color: Color.colorLightseagreen_200,
    textAlign: "right",
  },
  nextPosition: {
    left: "50%",
    top: 32,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  backArrow: {
    left: "8.8%",
    top: "4.19%",
    right: "85.09%",
    bottom: "93.35%",
    width: "6.11%",
    height: "2.46%",
    position: "absolute",
  },
  groupCreationMembers: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
  },
});

export default GroupCreationMembers;
