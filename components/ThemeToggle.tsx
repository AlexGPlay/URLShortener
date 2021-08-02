import styles from "../styles/ThemeToggle.module.css";

import type { Theme } from "../types/Theme";

export type ThemeToggleProps = {
  theme?: Theme;
  onClick?: () => void;
};

export default function ThemeToggle({ theme = "light", onClick }: ThemeToggleProps) {
  return (
    <div className={`${styles.themeToggle} ${styles[theme]}`} onClick={onClick}>
      <div className={styles.toggleShape}></div>
    </div>
  );
}
