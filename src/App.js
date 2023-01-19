import "./App.css";
import Layout from "./components/Layout/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import fonts from "./utils/fonts";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={fonts}>
        <CssBaseline />
        <Layout></Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
