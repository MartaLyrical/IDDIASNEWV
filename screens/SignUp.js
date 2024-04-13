import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View style={[styles.scrollGroup5, styles.inputLayout1]}>
        <View style={[styles.input, styles.inputPosition]}>
          <View style={[styles.input1, styles.inputLayout]}>
            <View style={styles.inputChild} />
            <Text style={styles.fullName}>Full Name</Text>
          </View>
          <View style={[styles.input2, styles.inputLayout]}>
            <View style={styles.inputChild} />
            <Text style={styles.fullName}>Date of Birth</Text>
          </View>
          <View style={[styles.input3, styles.inputLayout]}>
            <View style={styles.inputChild} />
            <Text style={styles.fullName}>Phone Number</Text>
          </View>
          <View style={[styles.input4, styles.inputLayout]}>
            <View style={styles.inputChild} />
            <Text style={styles.fullName}>City</Text>
          </View>
          <View style={[styles.input5, styles.inputLayout]}>
            <View style={styles.inputChild} />
            <Text style={styles.fullName}>Country</Text>
          </View>
          <View style={[styles.input6, styles.inputLayout]}>
            <View style={styles.inputChild} />
            <Text style={styles.fullName}>Enter your Profession</Text>
          </View>
          <View style={[styles.input7, styles.inputLayout]}>
            <View style={styles.inputChild} />
            <Text style={styles.fullName}>E-mail</Text>
          </View>
          <View style={[styles.input8, styles.inputLayout]}>
            <View style={styles.inputChild} />
            <Text style={styles.fullName}>Password</Text>
          </View>
          <View style={[styles.input9, styles.inputLayout]}>
            <View style={styles.inputChild} />
            <Text style={styles.fullName}>Confirm Password</Text>
          </View>
        </View>
      </View>
      <Text
        style={styles.byCreatingAn}
      >{`By creating an account you agree to our
Privacy Policy & Terms of Service`}</Text>
      <Pressable
        style={[styles.buttonSignup, styles.buttonLayout]}
        onPress={() => navigation.navigate("Interests")}
      >
        <View style={[styles.buttonSignupBk, styles.buttonBorder]} />
        <Text style={[styles.signUp1, styles.backTypo]}>Sign Up</Text>
      </Pressable>
      <Pressable
        style={[styles.buttonBack, styles.buttonLayout]}
        onPress={() => navigation.navigate("SignIn")}
      >
        <View style={[styles.buttonBackBk, styles.buttonBorder]} />
        <Text style={[styles.back, styles.backTypo]}>Back</Text>
      </Pressable>
      <View style={[styles.bkRectangleHeader1, styles.inputPosition]} />
      <Image
        style={styles.iddiasIcon}
        resizeMode="cover"
        source={require("../assets/iddias.png")}
      />
      <Text style={styles.createAnAccount}>Create an Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout1: {
    height: 560,
    width: 279,
  },
  inputPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  inputLayout: {
    height: 48,
    left: 0,
    width: 279,
    position: "absolute",
  },
  buttonLayout: {
    width: 302,
    left: 37,
    height: 48,
    position: "absolute",
  },
  buttonBorder: {
    borderColor: Color.colorGray_200,
    width: 302,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    height: 48,
    left: 0,
    top: 0,
    position: "absolute",
  },
  backTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  inputChild: {
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    height: 48,
    left: 0,
    top: 0,
    width: 279,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  fullName: {
    left: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    top: 15,
    position: "absolute",
  },
  input1: {
    top: 0,
    height: 48,
  },
  input2: {
    top: 64,
  },
  input3: {
    top: 128,
  },
  input4: {
    top: 192,
  },
  input5: {
    top: 256,
  },
  input6: {
    top: 320,
  },
  input7: {
    top: 384,
  },
  input8: {
    top: 448,
  },
  input9: {
    top: 512,
  },
  input: {
    height: 560,
    width: 279,
  },
  scrollGroup5: {
    top: 206,
    left: 48,
    position: "absolute",
    width: 279,
  },
  byCreatingAn: {
    marginLeft: -134.5,
    top: 782,
    textAlign: "center",
    left: "50%",
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  buttonSignupBk: {
    backgroundColor: Color.colorLightseagreen_100,
  },
  signUp1: {
    marginLeft: -36,
    top: 15,
    fontSize: FontSize.size_lg,
  },
  buttonSignup: {
    top: 854,
  },
  buttonBackBk: {
    backgroundColor: Color.colorBlack,
  },
  back: {
    marginLeft: -21,
    top: 14,
  },
  buttonBack: {
    top: 938,
  },
  bkRectangleHeader1: {
    width: 375,
    height: 199,
    backgroundColor: Color.colorWhite,
  },
  iddiasIcon: {
    top: 55,
    width: 301,
    height: 71,
    left: 37,
    position: "absolute",
  },
  createAnAccount: {
    marginLeft: -91.5,
    top: 162,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    textAlign: "center",
    left: "50%",
    color: Color.colorBlack,
    position: "absolute",
  },
  signUp: {
    flex: 1,
    width: "100%",
    height: 1028,
    backgroundColor: Color.colorWhite,
  },
});

export default SignUp;
