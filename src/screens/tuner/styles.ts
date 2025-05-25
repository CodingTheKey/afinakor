import { LinearGradient } from "expo-linear-gradient";
import { Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Text, TextBold } from "../../components/common/StyledText";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledGradient = styled(LinearGradient)`
  flex: 1;
`;

export const Content = styled(View)`
  flex: 1;
  padding-vertical: ${Platform.OS === "ios" ? "20px" : "80px"};
  align-items: center;
`;

export const TunerContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -40px;
`;

export const FrequencyContainer = styled(View)`
  align-items: center;
  background-color: #252525;
  padding: 20px;
  border-radius: 15px;
  width: 85%;
  flex-direction: row;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  margin-top: -60px;
`;

export const StatusText = styled(TextBold)<{ color: string }>`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  color: ${(props) => props.color};
`;

export const FrequencyLabel = styled(Text)`
  color: #666;
  font-size: 18px;
  margin-right: 12px;
`;

export const FrequencyValue = styled(TextBold)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 32px;
  margin-right: 8px;
`;

export const FrequencyUnit = styled(Text)`
  color: #666;
  font-size: 18px;
`;
