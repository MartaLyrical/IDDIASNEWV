import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const EditInfoForm = () => {
  return (
    <View style={styles.editInfo}>
      <View style={styles.input}>
        <View style={[styles.dateOfBirth, styles.passwordLayout]}>
          <View
            style={[styles.dateOfBirthRectangle, styles.editBiographyBorder]}
          />
          <Text style={[styles.dateOfBirth1, styles.dateOfBirth1Typo]}>
            Date of Birth
          </Text>
        </View>
        <View style={[styles.phoneNumber, styles.passwordLayout]}>
          <View
            style={[styles.dateOfBirthRectangle, styles.editBiographyBorder]}
          />
          <Text style={[styles.dateOfBirth1, styles.dateOfBirth1Typo]}>
            Phone Number
          </Text>
        </View>
        <View style={[styles.city, styles.passwordLayout]}>
          <View
            style={[styles.dateOfBirthRectangle, styles.editBiographyBorder]}
          />
          <Text style={[styles.dateOfBirth1, styles.dateOfBirth1Typo]}>
            City
          </Text>
        </View>
        <View style={[styles.country, styles.passwordLayout]}>
          <View
            style={[styles.dateOfBirthRectangle, styles.editBiographyBorder]}
          />
          <Text style={[styles.dateOfBirth1, styles.dateOfBirth1Typo]}>
            Country
          </Text>
        </View>
        <View style={[styles.profession, styles.passwordLayout]}>
          <View
            style={[styles.dateOfBirthRectangle, styles.editBiographyBorder]}
          />
          <Text style={[styles.dateOfBirth1, styles.dateOfBirth1Typo]}>
            Profession
          </Text>
        </View>
        <View style={[styles.eMail, styles.passwordLayout]}>
          <View
            style={[styles.dateOfBirthRectangle, styles.editBiographyBorder]}
          />
          <Text style={[styles.dateOfBirth1, styles.dateOfBirth1Typo]}>
            E-mail
          </Text>
        </View>
        <View style={[styles.password, styles.passwordLayout]}>
          <View
            style={[styles.dateOfBirthRectangle, styles.editBiographyBorder]}
          />
          <Text style={[styles.dateOfBirth1, styles.dateOfBirth1Typo]}>
            Password
          </Text>
        </View>
        <View style={[styles.confirmPassword, styles.passwordLayout]}>
          <View
            style={[styles.dateOfBirthRectangle, styles.editBiographyBorder]}
          />
          <Text style={[styles.dateOfBirth1, styles.dateOfBirth1Typo]}>
            Confirm Password
          </Text>
        </View>
        <View style={[styles.interests, styles.passwordLayout]}>
          <View
            style={[styles.dateOfBirthRectangle, styles.editBiographyBorder]}
          />
          <Text style={[styles.dateOfBirth1, styles.dateOfBirth1Typo]}>
            Interests
          </Text>
        </View>
      </View>
      <View style={[styles.editBiography, styles.editBiographyBorder]} />
      <Text style={[styles.editBiography1, styles.dateOfBirth1Typo]}>
        Edit Biography
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordLayout: {
    height: 48,
    width: 279,
    left: 0,
  },
  editBiographyBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  dateOfBirth1Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  dateOfBirthRectangle: {
    height: 48,
    width: 279,
    left: 0,
  },
  dateOfBirth1: {
    top: 15,
    left: 20,
  },
  dateOfBirth: {
    top: 0,
    height: 48,
    position: "absolute",
  },
  phoneNumber: {
    top: 64,
    position: "absolute",
  },
  city: {
    top: 128,
    position: "absolute",
  },
  country: {
    top: 192,
    position: "absolute",
  },
  profession: {
    top: 256,
    position: "absolute",
  },
  eMail: {
    top: 320,
    position: "absolute",
  },
  password: {
    top: 384,
    position: "absolute",
  },
  confirmPassword: {
    top: 448,
    position: "absolute",
  },
  interests: {
    top: 512,
    position: "absolute",
  },
  input: {
    top: 125,
    height: 560,
    width: 279,
    left: 0,
    position: "absolute",
  },
  editBiography: {
    right: 0,
    bottom: 579,
    left: 1,
  },
  editBiography1: {
    top: 5,
    left: 12,
    lineHeight: 24,
    width: 254,
    height: 374,
  },
  editInfo: {
    top: 206,
    left: 48,
    width: 280,
    height: 685,
    position: "absolute",
  },
});

export default EditInfoForm;
