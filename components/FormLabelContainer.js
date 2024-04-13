import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const FormLabelContainer = () => {
  return (
    <View style={styles.keyboardUppercase}>
      <View style={styles.fillsGrayPosition}>
        <View style={[styles.background, styles.fillsGrayPosition]} />
      </View>
      <Image
        style={[styles.emojiGlyphIcon, styles.glyphIconLayout]}
        resizeMode="cover"
        source={require("../assets/emoji-glyph.png")}
      />
      <Image
        style={[styles.dictationGlyphIcon, styles.glyphIconLayout]}
        resizeMode="cover"
        source={require("../assets/dictation-glyph.png")}
      />
      <View style={styles.bottomRow}>
        <View style={[styles.label, styles.keyLayout1]}>
          <View style={[styles.key, styles.keyShadowBox1]} />
          <Text style={[styles.label1, styles.textTypo]}>Label</Text>
        </View>
        <View style={[styles.space, styles.key1Layout]}>
          <View style={[styles.key1, styles.key1Layout]} />
          <Text style={[styles.space1, styles.textTypo]}>space</Text>
        </View>
        <View style={styles.viewPosition}>
          <View style={[styles.key2, styles.viewPosition]} />
          <Text style={[styles.text, styles.textTypo]}>123</Text>
        </View>
      </View>
      <View style={[styles.thirdRow, styles.rowPosition]}>
        <Image
          style={[styles.deleteIcon, styles.shiftLayout]}
          resizeMode="cover"
          source={require("../assets/delete.png")}
        />
        <View style={[styles.m, styles.keyLayout]}>
          <View style={[styles.key3, styles.keyShadowBox]} />
          <Text style={[styles.m1, styles.m1Typo]}>M</Text>
        </View>
        <View style={[styles.n, styles.keyLayout]}>
          <View style={[styles.key4, styles.keyShadowBox]} />
          <Text style={[styles.n1, styles.m1Typo]}>N</Text>
        </View>
        <View style={[styles.b, styles.keyLayout]}>
          <View style={[styles.key5, styles.keyShadowBox]} />
          <Text style={[styles.b1, styles.m1Typo]}>B</Text>
        </View>
        <View style={[styles.v, styles.keyLayout]}>
          <View style={[styles.key6, styles.keyShadowBox]} />
          <Text style={[styles.b1, styles.m1Typo]}>V</Text>
        </View>
        <View style={[styles.c, styles.keyLayout]}>
          <View style={[styles.key7, styles.keyShadowBox]} />
          <Text style={[styles.n1, styles.m1Typo]}>C</Text>
        </View>
        <View style={[styles.x, styles.keyLayout]}>
          <View style={[styles.key8, styles.keyShadowBox]} />
          <Text style={[styles.n1, styles.m1Typo]}>X</Text>
        </View>
        <View style={[styles.z, styles.keyLayout]}>
          <View style={[styles.key9, styles.keyShadowBox]} />
          <Text style={[styles.n1, styles.m1Typo]}>Z</Text>
        </View>
        <View style={[styles.shift, styles.shiftLayout]}>
          <View style={[styles.key10, styles.keyShadowBox]} />
          <Image
            style={styles.path3Icon}
            resizeMode="cover"
            source={require("../assets/path-3.png")}
          />
        </View>
      </View>
      <View style={styles.secondRow}>
        <View style={[styles.l, styles.keyLayout]}>
          <View style={[styles.key11, styles.keyShadowBox]} />
          <Text style={[styles.l1, styles.m1Typo]}>L</Text>
        </View>
        <View style={[styles.k, styles.keyLayout]}>
          <View style={[styles.key12, styles.keyShadowBox]} />
          <Text style={[styles.b1, styles.m1Typo]}>K</Text>
        </View>
        <View style={[styles.j, styles.keyLayout]}>
          <View style={[styles.key13, styles.keyShadowBox]} />
          <Text style={[styles.l1, styles.m1Typo]}>J</Text>
        </View>
        <View style={[styles.h, styles.keyLayout]}>
          <View style={[styles.key14, styles.keyShadowBox]} />
          <Text style={[styles.n1, styles.m1Typo]}>H</Text>
        </View>
        <View style={[styles.g, styles.keyLayout]}>
          <View style={[styles.key15, styles.keyShadowBox]} />
          <Text style={[styles.n1, styles.m1Typo]}>G</Text>
        </View>
        <View style={[styles.f, styles.keyLayout]}>
          <View style={[styles.key16, styles.keyShadowBox]} />
          <Text style={[styles.b1, styles.m1Typo]}>F</Text>
        </View>
        <View style={[styles.d, styles.keyLayout]}>
          <View style={[styles.key17, styles.keyShadowBox]} />
          <Text style={[styles.n1, styles.m1Typo]}>D</Text>
        </View>
        <View style={[styles.s, styles.keyLayout]}>
          <View style={[styles.key18, styles.keyShadowBox]} />
          <Text style={[styles.b1, styles.m1Typo]}>S</Text>
        </View>
        <View style={[styles.a, styles.keyLayout]}>
          <View style={[styles.key19, styles.keyShadowBox]} />
          <Text style={[styles.b1, styles.m1Typo]}>A</Text>
        </View>
      </View>
      <View style={[styles.topRow, styles.rowPosition]}>
        <View style={[styles.p, styles.keyPosition]}>
          <View style={[styles.key20, styles.keyPosition]} />
          <Text style={[styles.b1, styles.m1Typo]}>P</Text>
        </View>
        <View style={[styles.o, styles.keyPosition]}>
          <View style={[styles.key21, styles.keyPosition]} />
          <Text style={[styles.o1, styles.m1Typo]}>O</Text>
        </View>
        <View style={[styles.i, styles.keyPosition]}>
          <View style={[styles.key22, styles.keyPosition]} />
          <Text style={[styles.i1, styles.m1Typo]}>I</Text>
        </View>
        <View style={[styles.u, styles.keyPosition]}>
          <View style={[styles.key23, styles.keyPosition]} />
          <Text style={[styles.n1, styles.m1Typo]}>U</Text>
        </View>
        <View style={[styles.y, styles.keyPosition]}>
          <View style={[styles.key24, styles.keyPosition]} />
          <Text style={[styles.b1, styles.m1Typo]}>Y</Text>
        </View>
        <View style={[styles.t, styles.keyPosition]}>
          <View style={[styles.key25, styles.keyPosition]} />
          <Text style={[styles.b1, styles.m1Typo]}>T</Text>
        </View>
        <View style={[styles.r, styles.keyPosition]}>
          <View style={[styles.key26, styles.keyPosition]} />
          <Text style={[styles.b1, styles.m1Typo]}>R</Text>
        </View>
        <View style={[styles.e, styles.keyPosition]}>
          <View style={[styles.key27, styles.keyPosition]} />
          <Text style={[styles.b1, styles.m1Typo]}>E</Text>
        </View>
        <View style={[styles.w, styles.keyPosition]}>
          <View style={[styles.key28, styles.keyPosition]} />
          <Text style={[styles.w1, styles.m1Typo]}>W</Text>
        </View>
        <View style={[styles.q, styles.keyPosition]}>
          <View style={[styles.key29, styles.keyPosition]} />
          <Text style={[styles.o1, styles.m1Typo]}>Q</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fillsGrayPosition: {
    top: 0,
    height: 291,
    width: 375,
    left: 0,
    position: "absolute",
  },
  glyphIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  keyLayout1: {
    width: 88,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyShadowBox1: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(4, 4, 15, 0.36)",
    borderRadius: Border.br_8xs,
  },
  textTypo: {
    height: 19,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.sFProTextRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  key1Layout: {
    width: 183,
    height: 42,
    top: 0,
    position: "absolute",
  },
  viewPosition: {
    width: 86,
    height: 42,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rowPosition: {
    width: 369,
    left: 3,
    position: "absolute",
  },
  shiftLayout: {
    width: 42,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyLayout: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.35)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs,
    left: 0,
  },
  m1Typo: {
    fontFamily: FontFamily.sFProDisplayRegular,
    fontSize: FontSize.size_4xl,
    top: 6,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  keyPosition: {
    bottom: 0,
    width: 32,
    top: 0,
    position: "absolute",
  },
  background: {
    backgroundColor: Color.colorLightgray_200,
  },
  emojiGlyphIcon: {
    top: 237,
    right: 323,
    bottom: 27,
    left: 25,
  },
  dictationGlyphIcon: {
    top: 238,
    right: 30,
    bottom: 28,
    left: 330,
  },
  key: {
    backgroundColor: Color.colorDarkgray_100,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(4, 4, 15, 0.36)",
    borderRadius: Border.br_8xs,
    width: 88,
    height: 42,
    top: 0,
    position: "absolute",
    left: 0,
  },
  label1: {
    left: 24,
    width: 40,
    letterSpacing: -0.3,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.sFProTextRegular,
    fontSize: FontSize.size_base,
    top: 11,
  },
  label: {
    left: 282,
  },
  key1: {
    backgroundColor: Color.colorGray_100,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(4, 4, 15, 0.36)",
    borderRadius: Border.br_8xs,
    width: 183,
    left: 0,
  },
  space1: {
    left: 70,
    width: 44,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.sFProTextRegular,
    fontSize: FontSize.size_base,
    top: 11,
  },
  space: {
    left: 93,
  },
  key2: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(4, 4, 15, 0.36)",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorDarkgray_100,
  },
  text: {
    top: 12,
    left: 29,
    width: 27,
    letterSpacing: -0.3,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.sFProTextRegular,
    fontSize: FontSize.size_base,
  },
  bottomRow: {
    top: 171,
    left: 2,
    width: 370,
    height: 42,
    position: "absolute",
  },
  deleteIcon: {
    left: 327,
  },
  key3: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  m1: {
    left: 6,
  },
  m: {
    left: 282,
  },
  key4: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  n1: {
    left: 8,
  },
  n: {
    left: 244,
  },
  key5: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  b1: {
    left: 9,
  },
  b: {
    left: 207,
  },
  key6: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  v: {
    left: 169,
  },
  key7: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  c: {
    left: 131,
  },
  key8: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  x: {
    left: 94,
  },
  key9: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  z: {
    left: 56,
  },
  key10: {
    width: 42,
    height: 42,
    top: 0,
    position: "absolute",
  },
  path3Icon: {
    top: 13,
    left: 12,
    width: 18,
    height: 16,
    position: "absolute",
  },
  shift: {
    left: 0,
  },
  thirdRow: {
    top: 118,
    height: 42,
  },
  key11: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  l1: {
    left: 10,
  },
  l: {
    left: 301,
  },
  key12: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  k: {
    left: 263,
  },
  key13: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  j: {
    left: 226,
  },
  key14: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  h: {
    left: 188,
  },
  key15: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  g: {
    left: 151,
  },
  key16: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  f: {
    left: 113,
  },
  key17: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  d: {
    left: 75,
  },
  key18: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  s: {
    left: 38,
  },
  key19: {
    width: 32,
    height: 42,
    top: 0,
    position: "absolute",
  },
  a: {
    left: 0,
  },
  secondRow: {
    top: 64,
    left: 22,
    width: 332,
    height: 42,
    position: "absolute",
  },
  key20: {
    shadowColor: "rgba(0, 0, 0, 0.35)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs,
    left: 0,
  },
  p: {
    left: 338,
  },
  key21: {
    shadowColor: "rgba(0, 0, 0, 0.35)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs,
    left: 0,
  },
  o1: {
    left: 7,
  },
  o: {
    left: 300,
  },
  key22: {
    shadowColor: "rgba(0, 0, 0, 0.35)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs,
    left: 0,
  },
  i1: {
    left: 13,
  },
  i: {
    left: 263,
  },
  key23: {
    shadowColor: "rgba(0, 0, 0, 0.35)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs,
    left: 0,
  },
  u: {
    left: 225,
  },
  key24: {
    shadowColor: "rgba(0, 0, 0, 0.35)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs,
    left: 0,
  },
  y: {
    left: 188,
  },
  key25: {
    shadowColor: "rgba(0, 0, 0, 0.35)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs,
    left: 0,
  },
  t: {
    left: 150,
  },
  key26: {
    shadowColor: "rgba(0, 0, 0, 0.35)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs,
    left: 0,
  },
  r: {
    left: 113,
  },
  key27: {
    shadowColor: "rgba(0, 0, 0, 0.35)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs,
    left: 0,
  },
  e: {
    left: 75,
  },
  key28: {
    shadowColor: "rgba(0, 0, 0, 0.35)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs,
    left: 0,
  },
  w1: {
    left: 5,
  },
  w: {
    left: 38,
  },
  key29: {
    shadowColor: "rgba(0, 0, 0, 0.35)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: Border.br_8xs,
    left: 0,
  },
  q: {
    left: 0,
  },
  topRow: {
    top: 10,
    bottom: 239,
  },
  keyboardUppercase: {
    top: 521,
    height: 291,
    width: 375,
    left: 0,
    position: "absolute",
  },
});

export default FormLabelContainer;
