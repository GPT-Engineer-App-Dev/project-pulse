import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="100%" py={4} bg="gray.700" color="white" textAlign="center" mt="auto">
      <Text>&amp;copy; {new Date().getFullYear()} The Ultimate Todo List Extravaganza. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;