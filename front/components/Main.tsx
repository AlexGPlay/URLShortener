import styles from "../styles/Main.module.css";

import * as React from "react";
import { Input, Flex, Heading, Box, Text, useColorMode, Button, useToast } from "@chakra-ui/react";
import { shortenUrl } from "../api/shortenUrl";
import { OWN_URL } from "../util/server.const";

export default function Main() {
  const [text, setText] = React.useState("");
  const [textAsLabel, setTextAsLabel] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [shortenedUrl, setShortenedUrl] = React.useState("");

  const inputRef = React.useRef(null);

  const { colorMode } = useColorMode();
  const toast = useToast();

  React.useEffect(() => {
    if (new URLSearchParams(window.location.search).get("error"))
      toast({
        title: "Error",
        description: "An error has occurred",
        duration: 2500,
        isClosable: true,
        status: "error",
      });
  }, []);

  const handleTextChange = React.useCallback((evt) => setText(evt.target.value), []);
  const handleCopy = React.useCallback(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
    try {
      const result = document.execCommand("copy");
      if (!result) throw new Error();
      toast({
        title: "Link copied",
        description: "Link has been copied to  the clipboard",
        status: "success",
        duration: 2500,
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: "Link copy error",
        description: "An error has occurred",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    }
  }, [shortenedUrl]);
  const handleSubmit = React.useCallback(
    async (evt) => {
      try {
        evt.preventDefault();
        if (!text || text.length === 0) return setError("A URL must be introduced");
        setIsLoading(true);
        const response = await shortenUrl(text);
        setIsLoading(false);
        if (response.error) {
          setError(response.error);
        } else {
          setShortenedUrl(response.data);
          setError(null);
        }
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
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
          <Button type="submit" colorScheme="blue" isLoading={isLoading}>
            Shorten URL
          </Button>
        </Flex>
      </Flex>
      {shortenedUrl && (
        <Box borderWidth={1} borderRadius={5} width="100%" maxWidth={700} margin={10} padding={5}>
          <Text>Generated URL</Text>
          <Flex marginTop={5}>
            <Input value={`${OWN_URL}/${shortenedUrl}`} isReadOnly marginRight={5} ref={inputRef} />
            <Button colorScheme="blue" onClick={handleCopy}>
              Copy
            </Button>
          </Flex>
        </Box>
      )}
    </main>
  );
}
