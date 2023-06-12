import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Route/Navbar";
import MainRoute from "./Route/MainRoute";
import Auth from "./Authentication/Auth";


function App() {
  return (
      // <Flex>
      //   <Box w='22%'>
      //     <Navbar />
      //   </Box>
      //   <Box w='48%'>
      //     <MainRoute />
      //   </Box>
      //   <Box w='30%' display={{base:'none',md:'none',lg:'block'}}>
      //     <Navbar />
      //   </Box>
      // </Flex>
      <Box>
        <Auth />
      </Box>
  );
}

export default App;
