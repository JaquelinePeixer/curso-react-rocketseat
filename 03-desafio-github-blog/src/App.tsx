import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./Router";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}