import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "../../theme";
import useSettings from "../Youtube/hooks/useSettings";

function MyThemeProvider({ children }: any) {
  const { settings } = useSettings();
  const theme = createTheme({ theme: settings.theme });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MyThemeProvider;
