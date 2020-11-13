import { AuthProvider } from "../lib/auth";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import customTheme from "../styles/theme";
import { PostContextProvider } from "../contexts/PostContext";

function MyApp({ Component, pageProps }) {
  return (
    <PostContextProvider>
      <ThemeProvider theme={customTheme}>
        <AuthProvider>
          <CSSReset />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </PostContextProvider>
  );
}

export default MyApp;
