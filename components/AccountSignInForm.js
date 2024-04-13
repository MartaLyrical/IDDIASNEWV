import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AccountSignInForm = () => {
  return (
    <View style={styles.accountSignup}>
      <View style={styles.input}>
        <View style={[styles.inputEmail, styles.inputLayout]}>
          <View style={[styles.inputEmailChild, styles.inputLayout]} />
          <Text style={styles.eMail}>E-mail</Text>
        </View>
        <View style={[styles.inputPassword, styles.inputLayout]}>
          <View style={[styles.inputEmailChild, styles.inputLayout]} />
          <Text style={styles.eMail}>Password</Text>
        </View>
      </View>
      <Text style={[styles.signIn, styles.signInPosition]}>Sign In</Text>
      <Text
        style={[styles.byContinuingYou, styles.signInPosition]}
      >{`By continuing, you agree to accept our 
Privacy Policy & Terms of Service.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    height: 48,
    left: 0,
    width: 279,
    position: "absolute",
  },
  signInPosition: {
    textAlign: "center",
    left: "50%",
    color: Color.colorBlack,
    position: "absolute",
  },
  inputEmailChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    top: 0,
  },
  eMail: {
    top: 15,
    left: 20,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  inputEmail: {
    top: 0,
  },
  inputPassword: {
    top: 64,
  },
  input: {
    top: 77,
    height: 112,
    left: 0,
    width: 279,
    position: "absolute",
  },
  signIn: {
    marginLeft: -63.5,
    fontSize: FontSize.size_7xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    width: 128,
    top: 0,
  },
  byContinuingYou: {
    marginLeft: -131.5,
    top: 245,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.quicksandSemiBold,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    left: "50%",
  },
  accountSignup: {
    top: 187,
    left: 42,
    height: 285,
    width: 279,
    position: "absolute",
  },
});

export default AccountSignInForm;
