import React, { useState } from 'react';
import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <VStack spacing={4} align="center" mt={10}>
      <Box w="300px" p={5} boxShadow="md" borderRadius="md" borderWidth="1px">
        <Text fontSize="2xl" mb={4} textAlign="center">Simple Chakra UI Form</Text>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter some text"
          mb={4}
        />
        <Button onClick={handleSubmit} colorScheme="teal" width="100%">
          Submit
        </Button>
      </Box>
      
      {submittedValue && (
        <Text mt={4} fontSize="xl" color="teal.500">
          You submitted: {submittedValue}
        </Text>
      )}
    </VStack>
  );
}

export default App;