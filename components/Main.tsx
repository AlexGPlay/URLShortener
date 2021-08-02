import styles from "../styles/Main.module.css";

import * as React from "react";
import { Input, Flex, Heading, Box, Text, useColorMode } from "@chakra-ui/react";

export default function Main() {
  const [text, setText] = React.useState("");
  const [textAsLabel, setTextAsLabel] = React.useState(false);
  const { colorMode } = useColorMode();

  const handleTextChange = React.useCallback((evt) => setText(evt.target.value), []);

  return (
    <main className={styles.main}>
      <Flex direction="column" width={780} className={styles.container}>
        <Flex justify="center" marginBottom={10}>
          <Heading size="2xl">URL Shortener</Heading>
        </Flex>
        <Box className={styles.inputContainer}>
          <Input
            value={text}
            onChange={handleTextChange}
            onFocus={() => setTextAsLabel(true)}
            onBlur={() => setTextAsLabel(text.length > 0)}
          />
          <Text
            className={`${styles.inputText} ${textAsLabel ? styles.label : ""} ${
              styles[colorMode]
            }`}
          >
            URL
          </Text>
        </Box>
      </Flex>
    </main>
  );
}
