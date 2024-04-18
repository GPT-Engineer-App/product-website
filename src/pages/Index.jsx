import { Box, Button, Text, Image, VStack, Heading, Container } from "@chakra-ui/react";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="center">
        <Image borderRadius="lg" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcxMzQ3NjYzNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product Image" boxSize="300px" objectFit="cover" />
        <Heading as="h1" size="xl">
          Amazing Product
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover the features of our Amazing Product. It's designed to improve your daily workflow significantly. Try it now and see the difference!
        </Text>
        <Box>
          <Button rightIcon={<FaShoppingCart />} colorScheme="teal" mr={4}>
            Add to Cart
          </Button>
          <Button rightIcon={<FaInfoCircle />} variant="outline" colorScheme="teal">
            Learn More
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
