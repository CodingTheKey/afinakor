import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    fonts: {
      regular: string;
      medium: string;
      bold: string;
    };
    colors: {
      primary: string;
      inactive: string;
      background: string;
      text: string;
      textSecondary: string;
    };
  }
}
