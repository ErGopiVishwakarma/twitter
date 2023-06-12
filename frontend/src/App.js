import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Route/Navbar";
import MainRoute from "./Route/MainRoute";
import Auth from "./Authentication/Auth";
import Home from "./Pages/Home";


function App() {
  return (
      <Flex>
      <MainRoute />
        {/* <Box w='22%'>
          <Navbar />
        </Box>
        <Box w='48%'>
          <Home />
        </Box>
        <Box w='30%' display={{base:'none',md:'none',lg:'block'}}>
          <Navbar />
        </Box> */}
      </Flex>
      
  );
}

export default App;
