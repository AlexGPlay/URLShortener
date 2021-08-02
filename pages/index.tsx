import { useColorMode } from "@chakra-ui/react";
import * as React from "react";

import Header from "../components/Header.tsx";
import Main from "../components/Main.tsx";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleColorTheme = () => {
    toggleColorMode();
  };

  return (
    <>
      <Header onThemeChange={toggleColorTheme} />
      <Main />
    </>
  );
}
