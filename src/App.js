import Layout from "./components/Layout/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import fonts from "./utils/fonts";

function App() {
  return (
    <ThemeProvider theme={fonts}>
      <CssBaseline />
      <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;
