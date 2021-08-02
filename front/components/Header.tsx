import { useColorMode } from "@chakra-ui/react";
import ThemeToggle from "./ThemeToggle.tsx";

export type HeaderProps = {
  onThemeChange?: () => void;
};

export default function Header({ onThemeChange }: HeaderProps) {
  const { colorMode } = useColorMode();

  return (
    <header>
      <ThemeToggle theme={colorMode} onClick={onThemeChange} />
    </header>
  );
}
