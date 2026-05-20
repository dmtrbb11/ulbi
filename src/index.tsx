import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "app/providers/ThemeProvider";
import "./shared/config/i18n/i18n";

render(
  <ThemeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContextProvider>,

  document.getElementById("root")
);
