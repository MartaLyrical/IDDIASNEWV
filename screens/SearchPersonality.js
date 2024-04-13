import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Home from "../components/Property1Home";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SearchPersonality = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchPersonality}>
      <Pressable
        style={styles.name}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.ruiPatalim}>Rui Patalim</Text>
        <Image
          style={styles.nameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-26125.png")}
        />
        <Text style={[styles.similarity, styles.similarityClr]}>
          43% Similarity
        </Text>
      </Pressable>
      <Pressable
        style={[styles.name1, styles.namePosition]}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.ruiPatalim}>Nelia Campos</Text>
        <Image
          style={styles.nameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-26126.png")}
        />
        <Text style={[styles.similarity, styles.similarityClr]}>
          87% Similarity
        </Text>
      </Pressable>
      <Pressable
        style={[styles.name2, styles.namePosition]}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.ruiPatalim}>Susana Camara</Text>
        <Image
          style={styles.nameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-26124.png")}
        />
        <Text style={[styles.similarity, styles.similarityClr]}>
          51% Similarity
        </Text>
      </Pressable>
      <Pressable
        style={[styles.name3, styles.namePosition]}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.ruiPatalim}>Jorge Silva</Text>
        <Image
          style={styles.nameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-26127.png")}
        />
        <Text style={[styles.similarity, styles.similarityClr]}>
          36% Similarity
        </Text>
      </Pressable>
      <Pressable
        style={[styles.name4, styles.namePosition]}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.soniaFerreira}>Sonia Ferreira</Text>
        <Image
          style={styles.nameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-26128.png")}
        />
        <Text style={[styles.similarity, styles.similarityClr]}>
          73% Similarity
        </Text>
      </Pressable>
      <Text style={[styles.searchPersonality1, styles.similarityClr]}>
        Search - Personality
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
        showProfileButton={false}
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
  similarityClr: {
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
  ruiPatalim: {
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
  similarity: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.quicksandRegular,
    width: 185,
    height: 59,
    top: 34,
    color: Color.colorBlack,
    left: 117,
  },
  name: {
    top: 103,
    left: 36,
    height: 93,
    width: 302,
    position: "absolute",
  },
  name1: {
    top: 226,
  },
  name2: {
    top: 349,
  },
  name3: {
    top: 472,
  },
  soniaFerreira: {
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
    top: 595,
  },
  searchPersonality1: {
    marginLeft: -99.5,
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
  searchPersonality: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SearchPersonality;
