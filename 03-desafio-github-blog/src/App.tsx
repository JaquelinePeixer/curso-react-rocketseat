import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from 'react-router-dom';
import { Router } from "./Router";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { defaultTheme } from "./styles/theme/default";
import { GithubProvider } from "./contexts/GithubContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <Header />
        <GithubProvider>
          <Router />
        </GithubProvider>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}