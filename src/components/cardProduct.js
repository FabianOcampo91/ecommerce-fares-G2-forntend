// import product from "./product";
// import { Box, Image, Text, Stack, Badge } from "@chakra-ui/react";
import React from "react";y
import { Box } from "@chakra-ui/react";

function CardProduct() {
  return (
    <div className="App">
      <Box> Card Product</Box>
      {/* <Box
      w="350px"
      rounded="20px"
      overflow="hidden"
      boxShadow="lg"
      bg="gray.200"
      m="1rem"
      d={product.display}
    >
      <Image src={product.image} alt="image not found" />
      <Box p={5} bg="white">
        <Stack isInline align="base-line" justify="space-between">
          <Text
            as="h2"
            fontFamily="Bebas Neue"
            fontSize="1.5rem"
            letterSpacing="wide"
          >
            {product.tittle}
          </Text>
          <Text fontFamily="Bebas Neue" fontSize="1.5rem" letterSpacing="wide">
            {product.price}
          </Text>
        </Stack>
        <Text color="gray.500" letterSpacing="wide">
          {product.description}
        </Text>
        <Badge
          textTransform="lowercase"
          variant="outline"
          rounded="full"
          px={3}
        >
          0 colors avaible
        </Badge>
      </Box>
    </Box> */}
    </div>
  );
}

export default CardProduct;
