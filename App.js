import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <App />
      <hr />
      <FormCategorias />
    </ChakraProvider>
  );
};

export default App;
