import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/delfault";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/Header";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter >
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}