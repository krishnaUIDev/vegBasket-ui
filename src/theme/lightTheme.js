import { createMuiTheme } from "@material-ui/core/styles";

const themeLight = createMuiTheme({
  palette: {
    type: "light",
    primary: { main: "#373737", background: "" },
    secondary: { main: "#f4511e" },
    footer: {
      background: "#f5f5f7",
    },
  },
});

export { themeLight };
