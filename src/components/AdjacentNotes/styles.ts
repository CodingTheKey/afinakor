import { TextBold } from "@/components/common/StyledText";
import { Text, View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-vertical: 20px;
`;

export const SideNotes = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const NoteText = styled(Text)<{ opacity?: number }>`
  font-size: 24px;
  margin-horizontal: 10px;
  opacity: ${(props) => props.opacity ?? 1};
`;

export const InactiveNote = styled(NoteText)`
  color: #666;
`;

export const CurrentNote = styled(TextBold)`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
  margin-horizontal: 10px;
`;
