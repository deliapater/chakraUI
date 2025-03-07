import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  VStack,
  Text,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const MotionBox = motion(Box);

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <VStack spacing={4} align="center" mt={10}>
      <Box
        w="300px"
        p={5}
        boxShadow="md"
        borderRadius="md"
        borderWidth="1px"
        aria-label="Form container"
      >
        <Text fontSize="2xl" mb={4} textAlign="center">
          Simple Chakra UI Form
        </Text>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter some text"
          mb={4}
          aria-label="Text input field"
        />
        <Button
          onClick={handleSubmit}
          colorScheme="teal"
          width="100%"
          aria-label="Submit form"
        >
          Submit
        </Button>
      </Box>

      {submittedValue && (
        <Text mt={4} fontSize="xl" color="teal.500">
          You submitted: {submittedValue}
        </Text>
      )}
      <Flex justify="center" mt={4}>
        <Button
          onClick={toggleColorMode}
          variant="outline"
          size="sm"
          aria-label="Toggle dark mode"
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />} Toggle Mode
        </Button>
      </Flex>
      <Flex>
        <MotionBox
          w="100px"
          h="100px"
          bg="teal.500"
          mt={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          borderRadius="md"
          cursor="pointer"
          whileHover={{ scale: 1.2 }} // Animates when hovered
          whileTap={{ scale: 0.9 }} // Animates when clicked
        >
          Motion Box
        </MotionBox>
      </Flex>
    </VStack>
  );
}

export default App;
