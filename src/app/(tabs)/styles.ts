import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TextStyle, ViewStyle } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";

export const StyledIcon = styled(FontAwesome)`
  margin-bottom: -3px;
`;

export const getTabBarStyle = (theme: DefaultTheme): ViewStyle => ({
  height: 110,
  paddingBottom: 8,
  backgroundColor: theme.colors.background,
  borderTopWidth: 1,
  borderTopColor: "#333",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  elevation: 0,
  shadowOpacity: 0,
});

export const getTabBarItemStyle = (): ViewStyle => ({
  paddingTop: 10,
});

export const getTabBarLabelStyle = (theme: DefaultTheme): TextStyle => ({
  fontSize: 12,
  paddingTop: 4,
  fontWeight: "500" as const,
  fontFamily: theme.fonts.medium,
});
