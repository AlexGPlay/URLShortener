import styles from "../styles/Main.module.css";

import * as React from "react";
import { Input, Flex, Heading, Box, Text, useColorMode, Button } from "@chakra-ui/react";

export default function Main() {
  const [text, setText] = React.useState("");
  const [textAsLabel, setTextAsLabel] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { colorMode } = useColorMode();

  const handleTextChange = React.useCallback((evt) => setText(evt.target.value), []);
  const handleSubmit = React.useCallback(
    (evt) => {
      evt.preventDefault();
      if (!text || text.length === 0) return setError("A URL must be introduced");
      setError(null);
    },
    [text]
  );

  return (
    <main className={styles.main}>
      <Flex
        as="form"
        onSubmit={handleSubmit}
        direction="column"
        width="100%"
        padding={10}
        maxWidth={780}
        className={styles.container}
      >
        <Flex justify="center" marginBottom={10}>
          <Heading size="2xl">URL Shortener</Heading>
        </Flex>
        <Flex>
          <Box className={styles.inputContainer} marginRight={5}>
            <Input
              isInvalid={!!error}
              value={text}
              onChange={handleTextChange}
              onFocus={() => setTextAsLabel(true)}
              onBlur={() => setTextAsLabel(text.length > 0)}
              errorBorderColor="crimson"
            />
            <Text
              className={`${styles.inputText} ${textAsLabel ? styles.label : ""} ${
                styles[colorMode]
              }`}
            >
              URL
            </Text>
          </Box>
          <Button type="submit" colorScheme="blue">
            Shorten URL
          </Button>
        </Flex>
      </Flex>
    </main>
  );
}
