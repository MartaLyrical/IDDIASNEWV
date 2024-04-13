import React, { useMemo } from "react";
import { Image, StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AvatarImage = ({
  avatarImageAvatar,
  avatarIconPosition,
  avatarIconTop,
  avatarIconLeft,
  avatarIconWidth,
}) => {
  const avatarIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", avatarIconPosition),
      ...getStyleValue("top", avatarIconTop),
      ...getStyleValue("left", avatarIconLeft),
      ...getStyleValue("width", avatarIconWidth),
    };
  }, [avatarIconPosition, avatarIconTop, avatarIconLeft, avatarIconWidth]);

  return (
    <Image
      style={[styles.avatarIcon, avatarIconStyle]}
      resizeMode="cover"
      source={avatarImageAvatar}
    />
  );
};

const styles = StyleSheet.create({
  avatarIcon: {
    width: 56,
    height: 56,
  },
});

export default AvatarImage;
