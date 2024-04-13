import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AccountSignInForm from "../components/AccountSignInForm";
import ButtonContinue from "../components/ButtonContinue";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signIn}>
      <Image
        style={styles.iddiasIcon}
        resizeMode="cover"
        source={require("../assets/iddias.png")}
      />
      <AccountSignInForm />
      <ButtonContinue
        onButtonContinuePress={() => navigation.navigate("FaceRecognition")}
      />
      <Pressable
        style={[styles.signUp, styles.signUpPosition]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign Up</Text>
      </Pressable>
      <Text style={[styles.dontHaveAn, styles.signUp1Typo]}>
        Don't have an account?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpPosition: {
    left: "50%",
    position: "absolute",
  },
  signUp1Typo: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
  },
  iddiasIcon: {
    top: 55,
    left: 37,
    width: 301,
    height: 71,
    position: "absolute",
  },
  signUp1: {
    marginLeft: -39.5,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorLightseagreen_100,
  },
  signUp: {
    top: 654,
  },
  dontHaveAn: {
    marginLeft: -116.5,
    top: 624,
    fontWeight: "600",
    fontFamily: FontFamily.quicksandSemiBold,
    color: Color.colorBlack,
    width: 234,
    left: "50%",
    position: "absolute",
  },
  signIn: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignIn;
