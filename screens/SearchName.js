import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Home from "../components/Property1Home";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SearchName = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchName}>
      <View style={styles.searchBar} />
      <Image
        style={styles.searchIcon}
        resizeMode="cover"
        source={require("../assets/search-icon.png")}
      />
      <Pressable
        style={styles.name}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.neliaCardoso}>Nelia Cardoso</Text>
        <Image
          style={styles.nameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-26110.png")}
        />
        <Text style={[styles.loremIpsumDolor, styles.searchName1Clr]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
      </Pressable>
      <Pressable
        style={[styles.name1, styles.namePosition]}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.neliaCardoso}>Nelia Campos</Text>
        <Image
          style={styles.nameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-26111.png")}
        />
        <Text style={[styles.loremIpsumDolor, styles.searchName1Clr]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
      </Pressable>
      <Pressable
        style={[styles.name2, styles.namePosition]}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.neliaCardoso}>Nelia Ferreira</Text>
        <Image
          style={styles.nameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-26112.png")}
        />
        <Text style={[styles.loremIpsumDolor, styles.searchName1Clr]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
      </Pressable>
      <Pressable
        style={[styles.name3, styles.namePosition]}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.neliaCardoso}>Nelia Mendes</Text>
        <Image
          style={styles.nameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-26113.png")}
        />
        <Text style={[styles.loremIpsumDolor, styles.searchName1Clr]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
      </Pressable>
      <Pressable
        style={[styles.name4, styles.namePosition]}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.neliaSilva}>Nelia Silva</Text>
        <Image
          style={styles.nameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-26114.png")}
        />
        <Text style={[styles.loremIpsumDolor, styles.searchName1Clr]}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </Text>
      </Pressable>
      <Text style={[styles.searchName1, styles.searchName1Clr]}>
        Search - Name
      </Text>
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
      <Property1Home
        frameMenuBar={require("../assets/frame-menu-bar1.png")}
        profileIcon={require("../assets/profileicon1.png")}
        searchIcon={require("../assets/searchicon1.png")}
        groupIcon={require("../assets/groupicon.png")}
        chatIcon={require("../assets/chaticon.png")}
        homeIcon={require("../assets/homeicon.png")}
        showProfileButton
        property1HomePosition="absolute"
        property1HomeTop={709}
        property1HomeLeft={1}
        ellipseMenuIconLeft={229}
        profileButtonTop={46}
        profileButtonLeft={306}
        profileButtonWidth={37}
        profileButtonHeight={43}
        profileTop={28}
        profileFontSize={12}
        profileColor="#fff"
        profileIconHeight="55.81%"
        profileIconWidth="64.86%"
        profileIconRight="16.22%"
        profileIconBottom="44.19%"
        profileIconLeft="18.92%"
        searchButtonTop={20}
        searchButtonLeft={229}
        searchButtonWidth={46}
        searchButtonHeight={72}
        searchTop={54}
        searchFontSize={14}
        searchColor="#000"
        searchIconHeight="33.33%"
        searchIconWidth="54.13%"
        searchIconRight="21.96%"
        searchIconBottom="66.67%"
        searchIconLeft="23.91%"
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
        onSearchButtonPress={() => navigation.navigate("Search")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchName1Clr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  namePosition: {
    left: 37,
    height: 93,
    width: 302,
    position: "absolute",
  },
  searchBar: {
    top: 76,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 48,
    width: 302,
    left: 36,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  searchIcon: {
    height: "1.85%",
    width: "4%",
    top: "11.33%",
    right: "15.47%",
    bottom: "86.82%",
    left: "80.53%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  neliaCardoso: {
    textAlign: "left",
    color: Color.colorLightseagreen_100,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    left: 117,
    top: 0,
    position: "absolute",
  },
  nameChild: {
    top: 5,
    left: 0,
    width: 88,
    height: 88,
    position: "absolute",
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.quicksandRegular,
    width: 185,
    height: 59,
    top: 34,
    color: Color.colorBlack,
    left: 117,
  },
  name: {
    top: 155,
    height: 93,
    width: 302,
    left: 36,
    position: "absolute",
  },
  name1: {
    top: 278,
  },
  name2: {
    top: 401,
  },
  name3: {
    top: 524,
  },
  neliaSilva: {
    textAlign: "center",
    color: Color.colorLightseagreen_100,
    fontSize: FontSize.size_base,
    top: 0,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
    left: 117,
    position: "absolute",
  },
  name4: {
    top: 647,
  },
  searchName1: {
    marginLeft: -74.5,
    top: 32,
    left: "50%",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
    color: Color.colorBlack,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  notificationsActive: {
    left: 324,
    width: 20,
    height: 20,
    top: 34,
    position: "absolute",
  },
  searchName: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SearchName;
