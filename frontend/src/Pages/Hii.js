import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Route/Navbar'
import Home from './Home'

const Hii = () => {
  return (
    <Flex w='100%'>
        <Box w='22%'>
          <Navbar />
        </Box>
        <Box w='48%'>
          <Home />
        </Box>
        <Box w='30%' display={{base:'none',md:'none',lg:'block'}}>
          <Navbar />
        </Box>
      </Flex>
  )
}

export default Hii