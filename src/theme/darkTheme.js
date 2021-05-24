import { createMuiTheme } from "@material-ui/core/styles";

const themeDark = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: "#eeeeee", background: "#090c15" },
    secondary: { main: "#f4511e", background: "#1f272a" },
    footer: {
      background: "#161b22",
    },
  },
});

export { themeDark };
