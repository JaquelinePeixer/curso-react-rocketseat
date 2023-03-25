import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/delfault";
import { GlobalStyle } from "./styles/global";
import { ListDeliveryContextProvider } from "./contexts/ListDeliveryContext";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter >
          <ListDeliveryContextProvider>
            <Router />
          </ListDeliveryContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}