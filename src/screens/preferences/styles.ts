import { Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Text } from "../../components/common/StyledText";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled(View)`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  padding-bottom: ${Platform.OS === "ios" ? "100px" : "80px"};
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 30px;
  text-align: center;
  color: #fff;
`;

export const PreferencesContainer = styled(View)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PreferenceItem = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 15px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PreferenceText = styled(Text)`
  font-size: 16px;
  color: #fff;
`;
